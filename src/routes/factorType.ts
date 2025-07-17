import { Router } from 'express';

const router = Router();

// Listar todos os valores do enum factor_type
router.get('/', (req, res) => {
  res.json(['totp', 'webauthn', 'phone']);
});

export default router; 