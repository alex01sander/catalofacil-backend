import { Router } from 'express';

import prisma from '../lib/prisma';
const router = Router();

// Listar todos os valores do enum factor_type
router.get('/', (req, res) => {
  res.json(['totp', 'webauthn', 'phone']);
});

export default router; 