import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seed = async (): Promise<void> => {
  return;
};

seed()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
