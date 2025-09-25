import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { payments } from '@/db/schema';
import { like, eq, desc, and, count } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      full_name, 
      email, 
      whatsapp, 
      country, 
      plan, 
      currency, 
      amount_cents, 
      transaction_ref, 
      notes, 
      source_page 
    } = body;

    // Validate required fields
    if (!full_name || !full_name.trim()) {
      return NextResponse.json({ 
        error: 'Full name is required', 
        code: 'MISSING_REQUIRED_FIELD' 
      }, { status: 400 });
    }

    if (!email || !email.trim()) {
      return NextResponse.json({ 
        error: 'Email is required', 
        code: 'MISSING_REQUIRED_FIELD' 
      }, { status: 400 });
    }

    if (!plan) {
      return NextResponse.json({ 
        error: 'Plan is required', 
        code: 'MISSING_REQUIRED_FIELD' 
      }, { status: 400 });
    }

    if (!currency) {
      return NextResponse.json({ 
        error: 'Currency is required', 
        code: 'MISSING_REQUIRED_FIELD' 
      }, { status: 400 });
    }

    if (!amount_cents || amount_cents <= 0) {
      return NextResponse.json({ 
        error: 'Amount cents must be greater than 0', 
        code: 'INVALID_AMOUNT' 
      }, { status: 400 });
    }

    // Validate plan values
    if (!['community', 'summit'].includes(plan)) {
      return NextResponse.json({ 
        error: 'Plan must be community or summit', 
        code: 'INVALID_PLAN' 
      }, { status: 400 });
    }

    // Validate currency values
    if (!['USD', 'INR'].includes(currency)) {
      return NextResponse.json({ 
        error: 'Currency must be USD or INR', 
        code: 'INVALID_CURRENCY' 
      }, { status: 400 });
    }

    const newPayment = await db.insert(payments).values({
      fullName: full_name.trim(),
      email: email.trim().toLowerCase(),
      whatsapp: whatsapp?.trim() || null,
      country: country?.trim() || null,
      plan,
      currency,
      amountCents: parseInt(amount_cents),
      status: 'pending',
      transactionRef: transaction_ref?.trim() || null,
      notes: notes?.trim() || null,
      sourcePage: source_page?.trim() || null,
      createdAt: Date.now(),
    }).returning();

    return NextResponse.json(newPayment[0], { status: 201 });
  } catch (error) {
    console.error('POST payments error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const plan = searchParams.get('plan');
    const email = searchParams.get('email');
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const pageSize = Math.min(100, Math.max(1, parseInt(searchParams.get('pageSize') || '20')));
    const offset = (page - 1) * pageSize;

    let query = db.select().from(payments);
    let countQuery = db.select({ count: count() }).from(payments);

    const conditions = [];

    if (status) {
      conditions.push(eq(payments.status, status));
    }

    if (plan) {
      conditions.push(eq(payments.plan, plan));
    }

    if (email) {
      conditions.push(like(payments.email, `%${email.toLowerCase()}%`));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
      countQuery = countQuery.where(and(...conditions));
    }

    const [data, totalResult] = await Promise.all([
      query.orderBy(desc(payments.createdAt)).limit(pageSize).offset(offset),
      countQuery
    ]);

    const total = totalResult[0].count;

    return NextResponse.json({
      data,
      pagination: {
        page,
        pageSize,
        total
      }
    });
  } catch (error) {
    console.error('GET payments error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}