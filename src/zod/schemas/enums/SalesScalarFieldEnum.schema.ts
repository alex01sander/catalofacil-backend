import { z } from 'zod';

export const SalesScalarFieldEnumSchema = z.enum([
  'id',
  'user_id',
  'product_name',
  'quantity',
  'unit_price',
  'total_price',
  'sale_date',
  'status',
  'created_at',
  'updated_at',
  'store_id',
]);
