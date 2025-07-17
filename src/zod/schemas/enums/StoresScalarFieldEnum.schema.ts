import { z } from 'zod';

export const StoresScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'slug',
  'domain',
  'user_id',
  'description',
  'logo_url',
  'banner_url',
  'whatsapp_number',
  'instagram_url',
  'theme_color',
  'created_at',
  'updated_at',
]);
