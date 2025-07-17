import { z } from 'zod';

export const Product_costsScalarFieldEnumSchema = z.enum([
  'id',
  'user_id',
  'store_id',
  'product_name',
  'cost_price',
  'desired_margin',
  'suggested_price',
  'created_at',
  'updated_at',
]);
