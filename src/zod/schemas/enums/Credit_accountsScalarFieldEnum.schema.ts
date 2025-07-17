import { z } from 'zod';

export const Credit_accountsScalarFieldEnumSchema = z.enum([
  'id',
  'user_id',
  'store_id',
  'customer_name',
  'customer_phone',
  'total_debt',
  'created_at',
  'updated_at',
  'status',
]);
