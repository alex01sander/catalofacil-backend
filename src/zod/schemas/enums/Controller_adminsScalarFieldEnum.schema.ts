import { z } from 'zod';

export const Controller_adminsScalarFieldEnumSchema = z.enum([
  'id',
  'user_id',
  'email',
  'created_at',
  'updated_at',
]);
