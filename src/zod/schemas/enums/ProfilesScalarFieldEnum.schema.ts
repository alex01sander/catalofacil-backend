import { z } from 'zod';

export const ProfilesScalarFieldEnumSchema = z.enum([
  'id',
  'email',
  'full_name',
  'created_at',
  'updated_at',
]);
