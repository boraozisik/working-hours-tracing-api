import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.workingDay.deleteMany();
  const michael = await prisma.workingDay.create({
    data: {
      email: 'michaeldclown@cp.com',
      name: 'Michael',
      day: 4,
    },
  });

  console.log({ michael });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
