import { Router } from 'express';

import prisma from '../lib/prisma';
const router = Router();

// Listar todos os valores do enum aal_level
router.get('/', (req, res) => {
  res.json(['aal1', 'aal2', 'aal3']);
});

export default router; 