import { z } from 'zod';

export const Mfa_challengesScalarFieldEnumSchema = z.enum([
  'id',
  'factor_id',
  'created_at',
  'verified_at',
  'ip_address',
  'otp_code',
  'web_authn_session_data',
]);
