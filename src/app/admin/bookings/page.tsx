import { PrismaClient } from "@prisma/client";
import { BookingsClient } from "./BookingsClient";

const prisma = new PrismaClient();

export default async function BookingsPage() {
  const bookings = await prisma.booking.findMany({
    orderBy: { createdAt: 'desc' },
    include: { package: true }
  });

  return <BookingsClient bookings={bookings} />;
}
