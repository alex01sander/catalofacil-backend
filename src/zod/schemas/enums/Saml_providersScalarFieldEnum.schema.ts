import { z } from 'zod';

export const Saml_providersScalarFieldEnumSchema = z.enum([
  'id',
  'sso_provider_id',
  'entity_id',
  'metadata_xml',
  'metadata_url',
  'attribute_mapping',
  'created_at',
  'updated_at',
  'name_id_format',
]);
