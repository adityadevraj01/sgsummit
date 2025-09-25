import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { payments } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function PATCH(
  request: NextRequest,
  { params }: { params: any } // ✅ Correct typing
) {
  try {
    const id = parseInt(params.id, 10);

    if (!id || isNaN(id) || id <= 0) {
      return NextResponse.json(
        { error: 'Valid payment ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { status, transaction_ref, notes } = body;

    // Validate status if provided
    if (status && !['pending', 'verified', 'rejected'].includes(status)) {
      return NextResponse.json(
        { error: 'Status must be pending, verified, or rejected', code: 'INVALID_STATUS' },
        { status: 400 }
      );
    }

    // Check if payment exists
    const existingPayment = await db
      .select()
      .from(payments)
      .where(eq(payments.id, id))
      .limit(1);

    if (existingPayment.length === 0) {
      return NextResponse.json(
        { error: 'Payment not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    // Build update object with only provided fields
    const updateData: Record<string, any> = {};

    if (status !== undefined) updateData.status = status;
    if (transaction_ref !== undefined) updateData.transactionRef = transaction_ref?.trim() || null;
    if (notes !== undefined) updateData.notes = notes?.trim() || null;

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { error: 'No valid fields provided for update', code: 'NO_UPDATE_FIELDS' },
        { status: 400 }
      );
    }

    const updatedPayment = await db
      .update(payments)
      .set(updateData)
      .where(eq(payments.id, id))
      .returning();

    return NextResponse.json(updatedPayment[0]);
  } catch (error) {
    console.error('PATCH payment error:', error);
    return NextResponse.json(
      { error: 'Internal server error', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}
