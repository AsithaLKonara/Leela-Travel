import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const BookingService = {
  /**
   * Fetch all bookings
   */
  async getBookings() {
    return prisma.booking.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        package: true,
      },
    });
  },

  /**
   * Fetch a single booking by its ID
   */
  async getBookingById(id: string) {
    return prisma.booking.findUnique({
      where: { id },
      include: {
        package: true,
      },
    });
  },

  /**
   * Create a new booking
   */
  async createBooking(data: Omit<Prisma.BookingUncheckedCreateInput, "id" | "createdAt" | "updatedAt">) {
    return prisma.booking.create({
      data,
    });
  },

  /**
   * Update booking status or fields
   */
  async updateBooking(id: string, data: Partial<Omit<Prisma.BookingUncheckedUpdateInput, "id" | "createdAt" | "updatedAt">>) {
    return prisma.booking.update({
      where: { id },
      data,
    });
  },

  /**
   * Delete a booking
   */
  async deleteBooking(id: string) {
    return prisma.booking.delete({
      where: { id },
    });
  },
};
