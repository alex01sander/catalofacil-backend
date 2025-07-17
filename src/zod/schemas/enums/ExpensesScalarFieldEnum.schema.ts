import { z } from 'zod';

export const ExpensesScalarFieldEnumSchema = z.enum([
  'id',
  'user_id',
  'store_id',
  'name',
  'category',
  'type',
  'amount',
  'due_date',
  'is_recurring',
  'recurring_frequency',
  'status',
  'paid_date',
  'created_at',
  'updated_at',
]);
