import { z } from 'zod';

export const Credit_transactionsScalarFieldEnumSchema = z.enum([
  'id',
  'credit_account_id',
  'user_id',
  'type',
  'amount',
  'description',
  'date',
  'created_at',
]);
