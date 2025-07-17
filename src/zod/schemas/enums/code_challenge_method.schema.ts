import { z } from 'zod';

export const code_challenge_methodSchema = z.enum(['s256', 'plain']);
