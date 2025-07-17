import { z } from 'zod';

export const Mfa_amr_claimsScalarFieldEnumSchema = z.enum([
  'session_id',
  'created_at',
  'updated_at',
  'authentication_method',
  'id',
]);
