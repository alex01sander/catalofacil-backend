import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient();
const router = Router();

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { email, password: hash } });
  res.json(user);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET as string);
  res.json({ token });
});

export default router;
