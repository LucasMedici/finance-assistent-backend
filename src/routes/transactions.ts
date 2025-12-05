import { Router } from 'express';
import getUserTransactions from '../services/transactionService';

const router = Router();
``;

router.get('/', async (req, res) => {
  const { startDate, endDate } = req.query;
  const token = req.headers.authorization;

  try {
    const UserTransactions = await getUserTransactions(
      startDate as any,
      endDate as any,
      token as any
    );
    res.json(UserTransactions);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
