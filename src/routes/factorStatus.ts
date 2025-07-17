import { Router } from 'express';

const router = Router();

// Listar todos os valores do enum factor_status
router.get('/', (req, res) => {
  res.json(['unverified', 'verified']);
});

export default router; 