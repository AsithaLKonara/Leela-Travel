import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const PackageService = {
  /**
   * Fetch all packages
   */
  async getPackages() {
    return prisma.package.findMany({
      orderBy: { createdAt: "desc" },
    });
  },

  /**
   * Fetch a single package by its slug
   */
  async getPackageBySlug(slug: string) {
    return prisma.package.findUnique({
      where: { slug },
    });
  },

  /**
   * Fetch a single package by its ID
   */
  async getPackageById(id: string) {
    return prisma.package.findUnique({
      where: { id },
    });
  },

  /**
   * Create a new package
   */
  async createPackage(data: Omit<Prisma.PackageCreateInput, "id" | "createdAt" | "updatedAt">) {
    return prisma.package.create({
      data,
    });
  },

  /**
   * Update an existing package
   */
  async updatePackage(id: string, data: Partial<Omit<Prisma.PackageUpdateInput, "id" | "createdAt" | "updatedAt">>) {
    return prisma.package.update({
      where: { id },
      data,
    });
  },

  /**
   * Delete a package
   */
  async deletePackage(id: string) {
    return prisma.package.delete({
      where: { id },
    });
  },
};
