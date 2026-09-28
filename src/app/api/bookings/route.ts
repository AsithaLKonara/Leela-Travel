import { NextResponse } from "next/server";
import { BookingService } from "@/lib/services/booking.service";

export async function GET() {
  try {
    const bookings = await BookingService.getBookings();
    return NextResponse.json(bookings);
  } catch (error: any) {
    console.error("Failed to fetch bookings:", error);
    return NextResponse.json({ error: "Failed to fetch bookings", details: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, country, travelMood, notes, packageId, guests, checkInDate } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Name, email, and phone are required" }, { status: 400 });
    }

    const booking = await BookingService.createBooking({
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      country: country || null,
      travelMood: travelMood || null,
      specialNotes: notes || null,
      packageId: packageId || null,
      guests: guests ? Number(guests) : 1,
      checkInDate: checkInDate ? new Date(checkInDate) : new Date(),
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error: any) {
    console.error("Failed to create booking:", error);
    return NextResponse.json({ error: "Failed to create booking", details: error.message }, { status: 500 });
  }
}
