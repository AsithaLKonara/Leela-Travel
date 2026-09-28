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

  // Sample Packages
  const packages = [
    {
      slug: "classic-ceylon",
      title: "Classic Ceylon Explorer",
      description: "A comprehensive 7-day journey through Sri Lanka's cultural triangle, tea country, and southern coast.",
      price: 1200,
      duration: 7,
      mood: "Culture",
      image: "/images/hero/3100.jpg",
      highlights: ["Sigiriya Rock Fortress", "Kandy Temple of the Tooth", "Ella Train Ride", "Galle Fort"],
      included: ["Luxury Accommodation", "Private Chauffeur", "Breakfast & Dinner", "Entrance Fees"]
    },
    {
      slug: "wildlife-safari",
      title: "Untamed Wildlife Safari",
      description: "Track leopards in Yala and elephants in Wilpattu on this thrilling 5-day adventure.",
      price: 950,
      duration: 5,
      mood: "Wildlife",
      image: "/images/hero/yala elephants.jpg",
      highlights: ["Yala National Park", "Wilpattu Safari", "Turtle Hatchery"],
      included: ["Luxury Tent Stay", "Safari Jeep", "All Meals", "Park Fees"]
    },
    {
      slug: "highland-retreat",
      title: "Highland Tea Retreat",
      description: "Escape to the cool climate of Nuwara Eliya and Ella for 4 days of pure relaxation.",
      price: 800,
      duration: 4,
      mood: "Mountains",
      image: "/images/hero/ella.jpg",
      highlights: ["Tea Plantation Tour", "Ramboda Falls", "Nine Arch Bridge"],
      included: ["Boutique Hotel", "Private Transfer", "Breakfast", "Tea Tasting"]
    }
  ];

  for (const pkg of packages) {
    await prisma.package.upsert({
      where: { slug: pkg.slug },
      update: {},
      create: pkg,
    });
  }

  console.log("Database seeded successfully with Admin and Packages.");
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
