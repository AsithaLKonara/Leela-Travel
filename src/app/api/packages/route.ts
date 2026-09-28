import { NextResponse } from "next/server";
import { PackageService } from "@/lib/services/package.service";

export async function GET() {
  try {
    const packages = await PackageService.getPackages();
    return NextResponse.json(packages);
  } catch (error: any) {
    console.error("GET Packages Error:", error);
    return NextResponse.json({ message: "Failed to fetch packages", error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Basic Validation
    if (!data.title || !data.slug || !data.price || !data.duration || !data.image) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const newPackage = await PackageService.createPackage({
      title: data.title,
      slug: data.slug,
      description: data.description || "",
      price: Number(data.price),
      duration: Number(data.duration),
      mood: data.mood || "Leisure",
      image: data.image,
      highlights: data.highlights || [],
      included: data.included || [],
    });

    return NextResponse.json(newPackage, { status: 201 });
  } catch (error: any) {
    console.error("POST Package Error:", error);
    if (error.code === 'P2002') {
       return NextResponse.json({ message: "A package with this slug already exists." }, { status: 400 });
    }
    return NextResponse.json({ message: "Failed to create package", error: error.message }, { status: 500 });
  }
}
