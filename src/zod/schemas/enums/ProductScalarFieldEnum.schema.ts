import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'description',
  'price',
  'imageUrl',
  'domainId',
  'createdAt',
]);
