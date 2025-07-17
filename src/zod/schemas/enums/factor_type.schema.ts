import { z } from 'zod';

export const factor_typeSchema = z.enum(['totp', 'webauthn', 'phone']);
