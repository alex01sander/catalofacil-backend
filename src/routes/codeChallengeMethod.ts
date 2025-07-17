import { Router } from 'express';

const router = Router();

// Listar todos os valores do enum code_challenge_method
router.get('/', (req, res) => {
  res.json(['s256', 'plain']);
});

export default router; 