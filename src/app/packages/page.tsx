import { PrismaClient } from "@prisma/client";
import { PackagesClient } from "./PackagesClient";

const prisma = new PrismaClient();

export const metadata = {
  title: "Bespoke Packages | Leela Travel",
  description: "Browse curated Sri Lankan travel packages. From mountain retreats to wildlife safaris.",
};

export default async function PackagesPage() {
  const packages = await prisma.package.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return <PackagesClient packages={packages} />;
}
