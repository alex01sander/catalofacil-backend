import { z } from 'zod';

export const Cash_flowScalarFieldEnumSchema = z.enum([
  'id',
  'user_id',
  'store_id',
  'type',
  'category',
  'description',
  'amount',
  'date',
  'payment_method',
  'created_at',
  'updated_at',
]);
