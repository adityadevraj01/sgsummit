import { db } from '../index';
import { registrations } from '../schema';

export async function seedRegistrations() {
  console.log('Seeding registrations...');

  const registrationData = [
    {
      name: 'Alex Johnson',
      email: 'alex.johnson@mit.edu',
      country: 'United States',
      institutionId: 1, // MIT
      plan: 'summit',
      paid: 1,
      createdAt: Date.now() - (24 * 60 * 60 * 1000), // 1 day ago
    },
    {
      name: 'Sarah Chen',
      email: 'sarah.chen@stanford.edu',
      country: 'United States',
      institutionId: 2, // Stanford
      plan: 'community',
      paid: 0,
      createdAt: Date.now() - (12 * 60 * 60 * 1000), // 12 hours ago
    },
    {
      name: 'Mohammed Al-Rahman',
      email: 'mohammed.rahman@ox.ac.uk',
      country: 'United Kingdom',
      institutionId: 10, // Oxford
      plan: 'summit',
      paid: 1,
      createdAt: Date.now() - (3 * 24 * 60 * 60 * 1000), // 3 days ago
    },
    {
      name: 'Ananya Gupta',
      email: 'ananya.gupta@iitb.ac.in',
      country: 'India',
      institutionId: 29, // IIT Bombay
      plan: 'community',
      paid: 0,
      createdAt: Date.now() - (5 * 24 * 60 * 60 * 1000), // 5 days ago
    },
    {
      name: 'Emma Wilson',
      email: 'emma.wilson@freelancer.com',
      country: 'Canada',
      institutionId: null, // No institution
      plan: 'summit',
      paid: 1,
      createdAt: Date.now() - (7 * 24 * 60 * 60 * 1000), // 7 days ago
    },
    {
      name: 'Hiroshi Tanaka',
      email: 'hiroshi.tanaka@u-tokyo.ac.jp',
      country: 'Japan',
      institutionId: 25, // University of Tokyo
      plan: 'community',
      paid: 0,
      createdAt: Date.now() - (2 * 60 * 60 * 1000), // 2 hours ago
    },
  ];

  try {
    await db.insert(registrations).values(registrationData);
    console.log(`✅ Successfully seeded ${registrationData.length} registrations`);
  } catch (error) {
    console.error('❌ Error seeding registrations:', error);
    throw error;
  }
}

// Run the seeder if this file is executed directly
if (require.main === module) {
  seedRegistrations()
    .then(() => {
      console.log('Registrations seeding completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Registrations seeding failed:', error);
      process.exit(1);
    });
}