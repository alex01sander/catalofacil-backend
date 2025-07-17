import { z } from 'zod';

export const IdentitiesScalarFieldEnumSchema = z.enum([
  'provider_id',
  'user_id',
  'identity_data',
  'provider',
  'last_sign_in_at',
  'created_at',
  'updated_at',
  'email',
  'id',
]);
