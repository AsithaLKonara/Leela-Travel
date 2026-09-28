import { PackageService } from "@/lib/services/package.service";
import { PackagesClient } from "./PackagesClient";

export const metadata = {
  title: "Bespoke Packages | Leela Travel",
  description: "Browse curated Sri Lankan travel packages. From mountain retreats to wildlife safaris.",
};

export default async function PackagesPage() {
  const packages = await PackageService.getPackages();

  return <PackagesClient packages={packages} />;
}
