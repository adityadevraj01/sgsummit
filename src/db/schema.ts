import { sqliteTable, integer, text, index } from 'drizzle-orm/sqlite-core';

export const institutions = sqliteTable('institutions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  country: text('country'),
  state: text('state'),
  city: text('city'),
  domain: text('domain'),
  type: text('type').notNull().default('institute'),
  rank: integer('rank'),
  createdAt: integer('created_at').notNull(),
}, (table) => ({
  nameIdx: index('idx_institutions_name').on(table.name),
  countryIdx: index('idx_institutions_country').on(table.country),
}));

export const payments = sqliteTable('payments', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  fullName: text('full_name').notNull(),
  email: text('email').notNull(),
  whatsapp: text('whatsapp'),
  country: text('country'),
  plan: text('plan').notNull(),
  currency: text('currency').notNull(),
  amountCents: integer('amount_cents').notNull(),
  status: text('status').notNull().default('pending'),
  transactionRef: text('transaction_ref'),
  notes: text('notes'),
  sourcePage: text('source_page'),
  createdAt: integer('created_at').notNull(),
}, (table) => ({
  statusIdx: index('idx_payments_status').on(table.status),
  planIdx: index('idx_payments_plan').on(table.plan),
  createdIdx: index('idx_payments_created').on(table.createdAt),
}));

export const registrations = sqliteTable('registrations', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  country: text('country'),
  institutionId: integer('institution_id').references(() => institutions.id, { onDelete: 'set null' }),
  plan: text('plan').notNull(),
  paid: integer('paid').notNull().default(0),
  createdAt: integer('created_at').notNull(),
});