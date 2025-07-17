import { z } from 'zod';

export const DomainScalarFieldEnumSchema = z.enum([
  'id',
  'slug',
  'userId',
  'createdAt',
]);
