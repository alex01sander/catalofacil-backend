import { z } from 'zod';

export const Domain_ownersScalarFieldEnumSchema = z.enum([
  'id',
  'domain',
  'user_id',
  'created_at',
  'updated_at',
  'domain_type',
]);
