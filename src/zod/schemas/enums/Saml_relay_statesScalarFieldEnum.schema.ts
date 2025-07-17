import { z } from 'zod';

export const Saml_relay_statesScalarFieldEnumSchema = z.enum([
  'id',
  'sso_provider_id',
  'request_id',
  'for_email',
  'redirect_to',
  'created_at',
  'updated_at',
  'flow_state_id',
]);
