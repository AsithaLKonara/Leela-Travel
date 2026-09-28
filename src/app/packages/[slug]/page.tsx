import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Clock, MapPin, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PackageBookingForm } from "./PackageBookingForm";

const prisma = new PrismaClient();

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = await prisma.package.findUnique({
    where: { slug },
  });

  if (!pkg) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-obsidian text-leela-white pb-24">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto">
          <span className="px-3 py-1 bg-obsidian/80 backdrop-blur-md border border-white/10 text-xs font-mono tracking-widest text-sea-mist uppercase mb-6 inline-block">
            {pkg.mood}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-4">
            {pkg.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-leela-white/80">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-sea-mist" /> {pkg.duration} Days
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sea-mist" /> {pkg.highlights.length} Key Stops
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sea-mist" /> From ${pkg.price} USD
            </span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7 flex flex-col gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">The Experience</h2>
            <p className="text-leela-muted leading-relaxed text-lg">
              {pkg.description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pkg.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white/5 p-4 border border-white/10">
                  <span className="text-sea-mist font-mono text-xs">0{idx + 1}</span>
                  <span className="text-sm font-medium">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">What's Included</h2>
            <ul className="space-y-3">
              {pkg.included.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-leela-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-sea-mist" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-32">
            <div className="bg-obsidian/80 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
              <SectionHeader
                title="Reserve Your"
                titleHighlight="Journey"
                description="Secure your bespoke itinerary today. Our travel curators will reach out to finalize the details."
              />
              <div className="mt-8">
                <PackageBookingForm packageId={pkg.id} packageTitle={pkg.title} price={pkg.price} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
