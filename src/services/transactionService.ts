import jwt from 'jsonwebtoken';
import { PrismaClient } from '../generated/prisma/client';

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET as string;

interface JwtUserPayload extends jwt.JwtPayload {
  phone: string;
}

export default function getUserTransactions(
  startDate: String,
  endDate: String,
  token: any
) {
  const start = new Date(startDate as string);
  const end = new Date(endDate as string);
  end.setHours(23, 59, 59, 999);

  const tokenNoBearer = token.replace('Bearer ', '');
  const decodedToken = jwt.verify(tokenNoBearer, JWT_SECRET) as JwtUserPayload;
  const userPhone = decodedToken.phone;

  console.log('Phone:', userPhone);
  console.log('Start:', start);
  console.log('End:', end);

  return prisma.transaction.findMany({
    where: {
      phone: userPhone,
    },
  });
}
