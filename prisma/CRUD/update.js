const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

prisma.user
  .upsert({
    where: { id: 1 },
    update: { name: "Bob Marley" },
    create: { name: "Marry", bio: "Marry's bio" },
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

// prisma.user
//   .update({
//     where: { id: 1 },
//     data: { name: "NT James" },
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(() => {
//     prisma.$disconnect();
//   });
