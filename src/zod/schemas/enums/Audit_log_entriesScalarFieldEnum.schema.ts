import { z } from 'zod';

export const Audit_log_entriesScalarFieldEnumSchema = z.enum([
  'instance_id',
  'id',
  'payload',
  'created_at',
  'ip_address',
]);
