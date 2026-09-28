import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, notes, packageId, guests, checkInDate } = body;

    const booking = await prisma.booking.create({
      data: {
        customerName: name,
        customerEmail: email,
        customerPhone: phone || null,
        specialNotes: notes || null,
        packageId: packageId || null,
        guests: guests || 1,
        checkInDate: checkInDate ? new Date(checkInDate) : new Date(),
      },
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error("Failed to create booking:", error);
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}
