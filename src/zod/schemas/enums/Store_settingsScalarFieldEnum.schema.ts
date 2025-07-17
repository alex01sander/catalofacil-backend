import { z } from 'zod';

export const Store_settingsScalarFieldEnumSchema = z.enum([
  'id',
  'user_id',
  'store_name',
  'store_description',
  'mobile_logo',
  'desktop_banner',
  'mobile_banner_color',
  'mobile_banner_image',
  'created_at',
  'updated_at',
  'store_subtitle',
  'instagram_url',
  'whatsapp_number',
]);
