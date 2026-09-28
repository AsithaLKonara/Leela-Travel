const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 10);
  
  const admin = await prisma.user.upsert({
    where: { email: "admin@leelatravel.com" },
    update: {},
    create: {
      email: "admin@leelatravel.com",
      name: "Leela Admin",
      password: hashedPassword,
      role: "ADMIN"
    },
  });

  console.log("Database seeded successfully.");
  console.log("Admin account:", admin.email);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
