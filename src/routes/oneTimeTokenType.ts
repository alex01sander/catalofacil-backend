import { Router } from 'express';

import prisma from '../lib/prisma';
const router = Router();

// Listar todos os valores do enum one_time_token_type
router.get('/', (req, res) => {
  res.json([
    'confirmation_token',
    'reauthentication_token',
    'recovery_token',
    'email_change_token_new',
    'email_change_token_current',
    'phone_change_token',
  ]);
});

export default router; 