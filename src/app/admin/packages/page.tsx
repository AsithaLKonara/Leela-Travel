import { PackageService } from "@/lib/services/package.service";
import { PackagesAdminClient } from "./PackagesAdminClient";

export default async function AdminPackagesPage() {
  const packages = await PackageService.getPackages();

  return <PackagesAdminClient packages={packages} />;
}
