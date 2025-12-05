import { Router } from 'express';
import getUserTransactions from '../services/transactionService';

const router = Router();

router.get('/:phone', async (req, res) => {
  const phone = req.params.phone;

  try {
    const UserTransactions = await getUserTransactions(phone);
    res.json(UserTransactions);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
