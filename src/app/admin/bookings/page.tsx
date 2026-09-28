import { BookingService } from "@/lib/services/booking.service";
import { BookingsClient } from "./BookingsClient";

export default async function BookingsPage() {
  const bookings = await BookingService.getBookings();

  return <BookingsClient bookings={bookings} />;
}
