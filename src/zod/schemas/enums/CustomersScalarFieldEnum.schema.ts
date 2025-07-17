import { z } from 'zod';

export const CustomersScalarFieldEnumSchema = z.enum([
  'id',
  'store_owner_id',
  'name',
  'email',
  'phone',
  'address',
  'created_at',
  'store_id',
]);
