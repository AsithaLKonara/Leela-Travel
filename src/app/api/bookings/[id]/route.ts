import { NextResponse } from "next/server";
import { BookingService } from "@/lib/services/booking.service";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();

    const updatedBooking = await BookingService.updateBooking(id, {
      status: body.status,
    });

    return NextResponse.json(updatedBooking);
  } catch (error: any) {
    console.error("Failed to update booking:", error);
    return NextResponse.json({ error: "Failed to update booking", details: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await BookingService.deleteBooking(id);
    return NextResponse.json({ message: "Booking deleted successfully" });
  } catch (error: any) {
    console.error("Failed to delete booking:", error);
    return NextResponse.json({ error: "Failed to delete booking", details: error.message }, { status: 500 });
  }
}
