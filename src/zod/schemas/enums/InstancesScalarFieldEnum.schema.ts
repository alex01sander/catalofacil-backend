import { z } from 'zod';

export const InstancesScalarFieldEnumSchema = z.enum([
  'id',
  'uuid',
  'raw_base_config',
  'created_at',
  'updated_at',
]);
