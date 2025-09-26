import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { registrations } from '@/db/schema';
import { like, eq, desc, and } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, country, institution_id, plan, paid } = body;

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json({ 
        error: 'Name is required', 
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

    // Validate plan values
    if (!['community', 'summit'].includes(plan)) {
      return NextResponse.json({ 
        error: 'Plan must be community or summit', 
        code: 'INVALID_PLAN' 
      }, { status: 400 });
    }

    // Validate institution_id if provided
    if (institution_id && (isNaN(parseInt(institution_id)) || parseInt(institution_id) <= 0)) {
      return NextResponse.json({ 
        error: 'Institution ID must be a positive integer', 
        code: 'INVALID_INSTITUTION_ID' 
      }, { status: 400 });
    }

    // Coerce paid to 0 or 1
    const paidValue = paid ? 1 : 0;

    const newRegistration = await db.insert(registrations).values({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      country: country?.trim() || null,
      institutionId: institution_id ? parseInt(institution_id) : null,
      plan,
      paid: paidValue,
      createdAt: Date.now(),
    }).returning();

    return NextResponse.json(newRegistration[0], { status: 201 });
  } catch (error) {
    console.error('POST registrations error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const plan = searchParams.get('plan');
    const paidParam = searchParams.get('paid');

    const conditions = [];

    if (email) {
      conditions.push(like(registrations.email, `%${email.toLowerCase()}%`));
    }

    if (plan) {
      conditions.push(eq(registrations.plan, plan));
    }

    if (paidParam !== null) {
      const paidValue = paidParam === '1' ? 1 : 0;
      conditions.push(eq(registrations.paid, paidValue));
    }

    // FIX: Build the query in a single expression to avoid type issues
    const filteredQuery =
      conditions.length > 0
        ? db.select().from(registrations).where(and(...conditions))
        : db.select().from(registrations);

    const results = await filteredQuery.orderBy(desc(registrations.createdAt));
    return NextResponse.json(results);
  } catch (error) {
    console.error('GET registrations error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}