import { NextResponse } from "next/server";
import { PackageService } from "@/lib/services/package.service";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const data = await req.json();

    const updatedPackage = await PackageService.updatePackage(id, {
      title: data.title,
      slug: data.slug,
      description: data.description,
      price: data.price ? Number(data.price) : undefined,
      duration: data.duration ? Number(data.duration) : undefined,
      mood: data.mood,
      image: data.image,
      highlights: data.highlights,
      included: data.included,
    });

    return NextResponse.json(updatedPackage);
  } catch (error: any) {
    console.error("PUT Package Error:", error);
    if (error.code === 'P2002') {
       return NextResponse.json({ message: "A package with this slug already exists." }, { status: 400 });
    }
    return NextResponse.json({ message: "Failed to update package", error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await PackageService.deletePackage(id);
    return NextResponse.json({ message: "Package deleted successfully" });
  } catch (error: any) {
    console.error("DELETE Package Error:", error);
    return NextResponse.json({ message: "Failed to delete package", error: error.message }, { status: 500 });
  }
}
