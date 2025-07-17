import { z } from 'zod';

export const OrdersScalarFieldEnumSchema = z.enum([
  'id',
  'store_owner_id',
  'customer_id',
  'customer_name',
  'customer_email',
  'customer_phone',
  'total_amount',
  'status',
  'created_at',
  'updated_at',
  'store_id',
]);
