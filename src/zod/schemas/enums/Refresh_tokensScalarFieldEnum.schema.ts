import { z } from 'zod';

export const Refresh_tokensScalarFieldEnumSchema = z.enum([
  'instance_id',
  'id',
  'token',
  'user_id',
  'revoked',
  'created_at',
  'updated_at',
  'parent',
  'session_id',
]);
