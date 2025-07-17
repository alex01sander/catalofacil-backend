import { z } from 'zod';

export const One_time_tokensScalarFieldEnumSchema = z.enum([
  'id',
  'user_id',
  'token_type',
  'token_hash',
  'relates_to',
  'created_at',
  'updated_at',
]);
