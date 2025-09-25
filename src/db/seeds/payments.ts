import { db } from '../index';
import { payments } from '../schema';

export async function seedPayments() {
  console.log('Seeding payments...');

  const paymentData = [
    {
      fullName: 'John Smith',
      email: 'john.smith@example.com',
      whatsapp: '+1-555-123-4567',
      country: 'United States',
      plan: 'summit',
      currency: 'USD',
      amountCents: 15000, // $150.00
      status: 'verified',
      transactionRef: 'TXN_US_12345678',
      notes: 'Payment verified via Stripe',
      sourcePage: '/payment/international',
      createdAt: Date.now() - (24 * 60 * 60 * 1000), // 1 day ago
    },
    {
      fullName: 'Priya Sharma',
      email: 'priya.sharma@gmail.com',
      whatsapp: '+91-98765-43210',
      country: 'India',
      plan: 'community',
      currency: 'INR',
      amountCents: 250000, // ₹2500
      status: 'pending',
      transactionRef: 'UTR123456789012',
      notes: 'UPI payment pending verification',
      sourcePage: '/payment/india',
      createdAt: Date.now() - (12 * 60 * 60 * 1000), // 12 hours ago
    },
    {
      fullName: 'Maria Garcia',
      email: 'maria.garcia@universidad.es',
      whatsapp: '+34-600-123-456',
      country: 'Spain',
      plan: 'summit',
      currency: 'USD',
      amountCents: 12000, // $120.00 (early bird)
      status: 'verified',
      transactionRef: 'PAYPAL_ESP_789',
      notes: 'PayPal payment confirmed',
      sourcePage: '/payment/international',
      createdAt: Date.now() - (3 * 24 * 60 * 60 * 1000), // 3 days ago
    },
    {
      fullName: 'Raj Patel',
      email: 'raj.patel@iitb.ac.in',
      whatsapp: '9876543210',
      country: 'India',
      plan: 'summit',
      currency: 'INR',
      amountCents: 500000, // ₹5000
      status: 'rejected',
      transactionRef: 'UTR987654321098',
      notes: 'Transaction not found in bank records',
      sourcePage: '/payment/india',
      createdAt: Date.now() - (5 * 24 * 60 * 60 * 1000), // 5 days ago
    },
    {
      fullName: 'Li Wei',
      email: 'li.wei@tsinghua.edu.cn',
      whatsapp: '+86-138-0013-8000',
      country: 'China',
      plan: 'community',
      currency: 'USD',
      amountCents: 5000, // $50.00
      status: 'verified',
      transactionRef: 'WECHAT_CN_456',
      notes: 'WeChat Pay international transfer',
      sourcePage: '/payment/international',
      createdAt: Date.now() - (7 * 24 * 60 * 60 * 1000), // 7 days ago
    },
    {
      fullName: 'Aarav Singh',
      email: 'aarav.singh@vit.ac.in',
      whatsapp: '+91-99887-76543',
      country: 'India',
      plan: 'community',
      currency: 'INR',
      amountCents: 200000, // ₹2000
      status: 'pending',
      transactionRef: null,
      notes: 'Waiting for payment confirmation from user',
      sourcePage: '/payment/india',
      createdAt: Date.now() - (2 * 60 * 60 * 1000), // 2 hours ago
    },
  ];

  try {
    await db.insert(payments).values(paymentData);
    console.log(`✅ Successfully seeded ${paymentData.length} payments`);
  } catch (error) {
    console.error('❌ Error seeding payments:', error);
    throw error;
  }
}

// Run the seeder if this file is executed directly
if (require.main === module) {
  seedPayments()
    .then(() => {
      console.log('Payments seeding completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Payments seeding failed:', error);
      process.exit(1);
    });
}