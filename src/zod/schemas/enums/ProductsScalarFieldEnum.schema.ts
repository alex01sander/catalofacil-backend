import { z } from 'zod';

export const ProductsScalarFieldEnumSchema = z.enum([
  'id',
  'user_id',
  'category_id',
  'name',
  'description',
  'price',
  'stock',
  'is_active',
  'image',
  'images',
  'created_at',
  'updated_at',
  'store_id',
]);
