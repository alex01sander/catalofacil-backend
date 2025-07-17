import { z } from 'zod';

export const one_time_token_typeSchema = z.enum([
  'confirmation_token',
  'reauthentication_token',
  'recovery_token',
  'email_change_token_new',
  'email_change_token_current',
  'phone_change_token',
]);
