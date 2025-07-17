import { z } from 'zod';

export const CategoriesScalarFieldEnumSchema = z.enum([
  'id',
  'user_id',
  'name',
  'color',
  'image',
  'created_at',
  'updated_at',
  'store_id',
]);
