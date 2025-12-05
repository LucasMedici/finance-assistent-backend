import { PrismaClient } from '../generated/prisma/client';

const prisma = new PrismaClient();

export default function getUserTransactions(phone: string) {
  return prisma.transaction.findMany({
    where: {
      phone: phone,
    },
  });
}
