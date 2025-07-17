import { z } from 'zod';

export const factor_statusSchema = z.enum(['unverified', 'verified']);
