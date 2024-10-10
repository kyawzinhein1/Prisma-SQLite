const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

prisma.user
  .create({
    data: {
      name: "John Doe",
      bio: "My Profile",
      posts: {
        create: [{ content: "First Post" }, { content: "Second Post" }],
      },
    },
  })
  .then(() => {
    console.log("Inserted User with post.");
  })
  .catch((e) => {
    console.error(e);
    Process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
