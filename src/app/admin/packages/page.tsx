import { PrismaClient } from "@prisma/client";
import { PackagesAdminClient } from "./PackagesAdminClient";

const prisma = new PrismaClient();

export default async function AdminPackagesPage() {
  const packages = await prisma.package.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return <PackagesAdminClient packages={packages} />;
}
