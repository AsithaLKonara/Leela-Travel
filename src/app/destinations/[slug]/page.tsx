import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Footer from "@/components/layout/Footer";
import { DESTINATIONS_DATA } from "@/data/destinations";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export interface PackageDetail {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  price: string;
  duration: string;
  category: string;
  image: string;
  elevation: string;
  bestSeason: string;
  description: string;
  itinerary: { day: string; title: string; desc: string }[];
  inclusions: string[];
}

export const PACKAGE_DETAILS: Record<string, PackageDetail> = {
  ella: {
    slug: "ella",
    name: "Ella Cloud Forest & Railways",
    region: "Central Highlands",
    tagline: "Experience the iconic blue highland train journey across Nine Arch Viaduct into Ella Gap",
    price: "$1,450",
    duration: "7 Days / 6 Nights",
    category: "Highland & Railways",
    image: "/images/hero/ella.jpeg",
    elevation: "1,041m Altitude",
    bestSeason: "December — May",
    description: "Ella is Sri Lanka's high-altitude paradise. Traverse misty cloud forests, hike to Little Adam's Peak at sunrise, marvel at the 19th-century Demodara Nine Arch Viaduct, and stay in restored luxury tea planter villas.",
    itinerary: [
      { day: "Day 01", title: "Arrival in Colombo & Luxury Transfer to Kandy", desc: "Private chauffeur transfer to your mountain heritage hotel." },
      { day: "Day 02", title: "Observation Carriage Train to Ella", desc: "Board the world-famous blue train through tea estates and mist-covered ravines." },
      { day: "Day 03", title: "Nine Arch Viaduct & Secret Waterfalls", desc: "Morning photography at Nine Arch Bridge followed by a picnic at Ravana Falls." },
      { day: "Day 04", title: "Little Adam's Peak & Zip-Line Adventure", desc: "Sunrise ridge trek with panoramic views across Ella Gap." },
      { day: "Day 05", title: "Ceylon Tea Estate & Factory Masterclass", desc: "Private tour of high-altitude tea plucking and artisanal tasting." },
      { day: "Day 06", title: "Highland Sunset Concierge Dinner", desc: "5-course farm-to-table dining overlooking mountain valleys." },
      { day: "Day 07", title: "Departure or Southern Beach Extension", desc: "Private transfer to Colombo airport or southern beach villa." },
    ],
    inclusions: [
      "First-Class Observation Train Tickets",
      "Private Chauffeur & Luxury SUV (7 Days)",
      "5-Star Tea Estate Boutique Villa Accommodation",
      "Daily Gourmet Breakfast & High Tea",
      "All National Park & Waterfall VIP Entry Fees",
    ],
  },
  sigiriya: {
    slug: "sigiriya",
    name: "Sigiriya Citadel & Ancient Kingdoms",
    region: "Cultural Triangle",
    tagline: "Ascend 5th-century royal rock citadel fortress rising above emerald jungle canopy",
    price: "$1,280",
    duration: "5 Days / 4 Nights",
    category: "UNESCO Heritage",
    image: "/images/hero/sigiriya.jpeg",
    elevation: "370m Rock Citadel",
    bestSeason: "Year-Round",
    description: "Sigiriya is King Kashyapa's 5th-century masterpiece in the sky. Climb ancient rock stairways past world-famous frescoes, explore ancient water gardens, and watch the sun rise over Pidurangala Rock.",
    itinerary: [
      { day: "Day 01", title: "Colombo Arrival to Sigiriya Jungle Lodge", desc: "Check in to luxury eco-lodge surrounded by wild peacock gardens." },
      { day: "Day 02", title: "Sigiriya Rock Citadel Sunrise Climb", desc: "Guided VIP access to the summit palace ruins and mirror wall." },
      { day: "Day 03", title: "Pidurangala Rock Sunrise & Minneriya Elephant Safari", desc: "Panoramas of Sigiriya Rock followed by wild elephant gathering safari." },
      { day: "Day 04", title: "Polonnaruwa Ancient Kingdom Cycling Tour", desc: "Private bicycle tour of 11th-century royal stupas and stone Buddhas." },
      { day: "Day 05", title: "Dambulla Cave Temple & Transfer to Airport", desc: "Explore cave temple mural art before private transfer." },
    ],
    inclusions: [
      "Private Fast-Track Sigiriya Entrance",
      "Exclusive Minneriya Elephant Jeep Safari",
      "5-Star Eco-Lodge Villa Stay",
      "Private Historian Guide & Chauffeur",
      "Daily Breakfast & Traditional Banquet Dinners",
    ],
  },
  kandy: {
    slug: "kandy",
    name: "Kandy Sacred Valleys & Temples",
    region: "Central Province",
    tagline: "Discover the sacred Temple of the Tooth Relic, mountain lakes, and royal botanical gardens",
    price: "$1,150",
    duration: "4 Days / 3 Nights",
    category: "Kingdom & Relics",
    image: "/images/hero/kandy.jpeg",
    elevation: "500m Valley",
    bestSeason: "December — April",
    description: "Kandy was Ceylon's last royal capital. Enveloped by misty mountain peaks and Kandy Lake, experience sacred evening ceremonies, royal botanical gardens, and traditional Kandyan drumming.",
    itinerary: [
      { day: "Day 01", title: "Transfer to Kandy Lake Heritage Hotel", desc: "Scenic drive into central highlands with luxury hotel check-in." },
      { day: "Day 02", title: "Temple of the Tooth Relic VIP Evening Ceremony", desc: "Private access to the sacred inner temple chamber during evening rituals." },
      { day: "Day 03", title: "Peradeniya Royal Botanical Gardens & Artisan Tour", desc: "Explore 147 acres of orchid houses and meets local wood carving artisans." },
      { day: "Day 04", title: "Highland Spice Garden & Departure", desc: "Private culinary spice masterclass before transfer." },
    ],
    inclusions: [
      "VIP Temple Access & Ceremony Tickets",
      "Private Chauffeur & Vehicle",
      "Heritage Lakefront Hotel Accommodation",
      "Daily Gourmet Breakfast & High Tea",
      "Royal Botanical Garden Guided Tour",
    ],
  },
  "nuwara-eliya": {
    slug: "nuwara-eliya",
    name: "Nuwara Eliya Tea Estates",
    region: "Little England",
    tagline: "Highland tea gardens, colonial planter bungalows, and cool mountain air",
    price: "$1,320",
    duration: "5 Days / 4 Nights",
    category: "Ceylon Tea Estates",
    image: "/images/hero/nuwara-eliya.jpeg",
    elevation: "1,868m Mountain City",
    bestSeason: "February — May",
    description: "Nuwara Eliya is Ceylon's highest city. Crisp mountain air, manicured golf courses, colonial architecture, and world-famous Ceylon Black Tea gardens.",
    itinerary: [
      { day: "Day 01", title: "Highland Train Arrival & Planter Villa Check-In", desc: "Arrive at restored 19th-century colonial planter bungalow." },
      { day: "Day 02", title: "Pedro Tea Estate Private Harvest & Factory Tour", desc: "Private plucking experience with master tea blender." },
      { day: "Day 03", title: "Horton Plains & World's End Precipice Hike", desc: "Early morning trek to 880m sheer drop overlook." },
      { day: "Day 04", title: "Gregory Lake Boating & Golf Club High Tea", desc: "Relaxed afternoon in colonial club gardens." },
      { day: "Day 05", title: "Scenic Departure to Colombo or Ella", desc: "Private chauffeur transfer." },
    ],
    inclusions: [
      "Colonial Planter Bungalow Accommodation",
      "Horton Plains National Park Guide & Permits",
      "Master Tea Tasting Experience",
      "Private Chauffeur & SUV",
      "Daily Breakfast & 4-Course Dinners",
    ],
  },
  galle: {
    slug: "galle",
    name: "Galle Fort Ramparts & Colonial Luxury",
    region: "Southern Coast",
    tagline: "17th-century Dutch ramparts, artisan boutiques & ocean lighthouse walks",
    price: "$1,550",
    duration: "6 Days / 5 Nights",
    category: "Colonial Luxury",
    image: "/images/hero/galle.jpeg",
    elevation: "Sea Level Bastion",
    bestSeason: "October — April",
    description: "Galle Fort is South Asia's best-preserved Dutch colonial fortress. Walk historic cobblestone lanes, dine at world-class fusion restaurants, and watch sunset over the Indian Ocean from the lighthouse ramparts.",
    itinerary: [
      { day: "Day 01", title: "Arrival at Galle Fort Merchant Villa", desc: "Check in to luxury restored Dutch merchant mansion." },
      { day: "Day 02", title: "Private Architect-Guided Fort Rampart Tour", desc: "Discover 400 years of Portuguese, Dutch, and British naval history." },
      { day: "Day 03", title: "Geoffrey Bawa Estate & Lunuganga Garden Tour", desc: "Visit tropical modernist architect's country residence." },
      { day: "Day 04", title: "Sunset Rampart Champagne & Seafood Feast", desc: "Private sunset table on the fort wall." },
      { day: "Day 05", title: "Unawatuna & Jungle Beach Coastal Relax", desc: "Day trip to secluded beach coves." },
      { day: "Day 06", title: "Private Transfer to Airport", desc: "Chauffeur transfer along southern expressway." },
    ],
    inclusions: [
      "Dutch Merchant Mansion Boutique Villa Stay",
      "Architect-Guided Fort Historical Walking Tour",
      "Lunuganga Bawa Garden Entry & Tour",
      "Private Sunset Rampart Dinner & Wine",
      "Private SUV Chauffeur",
    ],
  },
  mirissa: {
    slug: "mirissa",
    name: "Mirissa Ocean & Blue Whale Voyage",
    region: "Indian Ocean",
    tagline: "Pristine golden sands, turquoise ocean, and catamaran whale watching",
    price: "$1,250",
    duration: "5 Days / 4 Nights",
    category: "Ocean & Whales",
    image: "/images/hero/mirissa.jpeg",
    elevation: "Coastal Waters",
    bestSeason: "November — April",
    description: "Mirissa is Sri Lanka's ocean capital for blue whale expeditions, coconut palm groves, and fresh seafood beach dining.",
    itinerary: [
      { day: "Day 01", title: "Arrival at Oceanfront Luxury Resort", desc: "Check in to cliffside suite overlooking Mirissa bay." },
      { day: "Day 02", title: "Private Catamaran Blue Whale Expedition", desc: "Set sail at dawn to spot blue whales, sperm whales, and dolphins." },
      { day: "Day 03", title: "Coconut Tree Hill Sunset & Secret Beach", desc: "Photography session at iconic palm mound." },
      { day: "Day 04", title: "Weligama Bay Surf Lesson & Spa Treatment", desc: "Private surf instruction followed by Ayurvedic massage." },
      { day: "Day 05", title: "Coastal Transfer", desc: "Chauffeur transfer." },
    ],
    inclusions: [
      "Private Catamaran Whale Watching Charter",
      "Oceanfront Luxury Villa Suite",
      "Coconut Tree Hill Guided Session",
      "Ayurvedic Spa Package",
      "Private Chauffeur",
    ],
  },
  yala: {
    slug: "yala",
    name: "Yala Leopard Safari & Wild Dunes",
    region: "Southern Wilderness",
    tagline: "World's highest leopard density & oceanfront safari glamping camps",
    price: "$1,680",
    duration: "6 Days / 5 Nights",
    category: "Leopard Safari",
    image: "/images/hero/yala.jpeg",
    elevation: "Coastal Sanctuary",
    bestSeason: "February — July",
    description: "Yala National Park is home to the dense population of Sri Lankan leopards, sloth bears, wild elephants, and coastal dunes.",
    itinerary: [
      { day: "Day 01", title: "Arrival at Luxury Safari Camp", desc: "Check in to luxury air-conditioned safari tent." },
      { day: "Day 02", title: "Dawn Leopard Game Drive", desc: "Private 4x4 jeep safari with expert wildlife naturalist." },
      { day: "Day 03", title: "Dusk Elephant & Sloth Bear Safari", desc: "Explore Block 1 & 5 waterholes." },
      { day: "Day 04", title: "Bundala Bird Sanctuary & Bush Dinner", desc: "Spot migratory flamingos and enjoy candlelit dinner under the stars." },
      { day: "Day 05", title: "Oceanfront Dune Walk & Relaxation", desc: "Unwind by the Indian Ocean." },
      { day: "Day 06", title: "Transfer to Airport", desc: "Private SUV transfer." },
    ],
    inclusions: [
      "Luxury Safari Tent Camp Accommodation",
      "2 Private 4x4 Jeep Game Drives per Day",
      "Expert Wildlife Naturalist Guide",
      "Bush Dinners & All Meals Included",
      "Park Entry & Conservation Permits",
    ],
  },
  bentota: {
    slug: "bentota",
    name: "Bentota Golden Coast & Waterways",
    region: "South-West Coast",
    tagline: "Luxury Bawa beach villas, water sports, and sea turtle hatcheries",
    price: "$1,100",
    duration: "4 Days / 3 Nights",
    category: "Boutique Beach",
    image: "/images/destinations/galle.png",
    elevation: "Sea Level",
    bestSeason: "October — April",
    description: "Bentota features wide golden beaches, tranquil Madu River mangrove lagoons, and world-class tropical architecture.",
    itinerary: [
      { day: "Day 01", title: "Arrival at Beach Villa", desc: "Check in to private oceanfront villa." },
      { day: "Day 02", title: "Madu River Mangrove Safari & Cinnamon Island", desc: "Boat safari through mangrove tunnels." },
      { day: "Day 03", title: "Sea Turtle Conservation Center & Water Sports", desc: "Visit hatcheries and enjoy jet-skiing." },
      { day: "Day 04", title: "Departure", desc: "Transfer to Colombo airport." },
    ],
    inclusions: [
      "Oceanfront Luxury Villa Accommodation",
      "Madu River Boat Safari",
      "Turtle Sanctuary Admission",
      "Private Chauffeur",
      "Daily Breakfast & Seafood Dinner",
    ],
  },
  trincomalee: {
    slug: "trincomalee",
    name: "Trincomalee Secret Bays & Coral Reefs",
    region: "Eastern Province",
    tagline: "Pigeon Island coral snorkeling, Kovil cliffs & white sand beaches",
    price: "$1,420",
    duration: "6 Days / 5 Nights",
    category: "Coral & Temples",
    image: "/images/hero/mirissa.jpeg",
    elevation: "Coastal Bay",
    bestSeason: "May — October",
    description: "Trincomalee offers deep natural harbors, ancient Koneswaram Hindu cliff temples, and Pigeon Island marine coral reefs.",
    itinerary: [
      { day: "Day 01", title: "Arrival in Trincomalee Beach Resort", desc: "Check in to luxury bay resort." },
      { day: "Day 02", title: "Pigeon Island Marine National Park Snorkeling", desc: "Swim with reef sharks and sea turtles." },
      { day: "Day 03", title: "Koneswaram Temple Swami Rock Cliff Visit", desc: "Visit dramatic cliff temple over Swami Rock." },
      { day: "Day 04", title: "Nilaveli Beach Relaxation", desc: "Unwind on white sand beaches." },
      { day: "Day 05", title: "Seven Hot Springs Visit", desc: "Explore Kanniya geothermal wells." },
      { day: "Day 06", title: "Departure", desc: "Private transfer." },
    ],
    inclusions: [
      "Luxury Beachfront Resort Stay",
      "Pigeon Island Boat & Snorkel Charter",
      "Temple Tour Guide",
      "Private SUV Chauffeur",
      "Daily Breakfast",
    ],
  },
  "arugam-bay": {
    slug: "arugam-bay",
    name: "Arugam Bay Surf & Lagoon Safari",
    region: "Wild East Coast",
    tagline: "World-class surf point breaks, lagoon safaris & beachfront dining",
    price: "$1,380",
    duration: "5 Days / 4 Nights",
    category: "Surf & Wildlife",
    image: "/images/hero/wilpattu.jpeg",
    elevation: "Coastal Dunes",
    bestSeason: "May — September",
    description: "Arugam Bay is famous for right-hand point break waves, relaxed beach culture, and Kumana elephant lagoon safaris.",
    itinerary: [
      { day: "Day 01", title: "Arrival at Surf Lodge", desc: "Check in to luxury boutique surf resort." },
      { day: "Day 02", title: "Main Point Private Surf Instruction", desc: "Catch waves with expert surf coaches." },
      { day: "Day 03", title: "Kottukal Lagoon Boat Safari", desc: "Spot crocodiles, sea eagles, and wild elephants." },
      { day: "Day 04", title: "Pottuvil Point & Sunset Beach Bonfire", desc: "Sunset beach barbecue." },
      { day: "Day 05", title: "Departure", desc: "Private transfer." },
    ],
    inclusions: [
      "Boutique Beach Resort Accommodation",
      "Private Surf Lessons & Board Rental",
      "Lagoon Safari Charter",
      "Private Chauffeur",
      "Daily Breakfast & Beach Dinners",
    ],
  },
};

export function generateStaticParams() {
  return DESTINATIONS_DATA.map((dest) => ({
    slug: dest.slug,
  }));
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const pkg = PACKAGE_DETAILS[resolvedParams.slug];

  if (!pkg) {
    notFound();
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-obsidian text-leela-white selection:bg-sea-mist/20 rounded-none font-sans">
      {/* Hero Banner */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden bg-obsidian flex flex-col justify-end p-8 sm:p-16">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          priority
          className="object-cover filter brightness-[0.6] contrast-[1.05]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-4">
          <Link
            href="/#destinations"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sea-mist hover:text-aqua transition-colors w-fit mb-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Packages
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="sea" dot={false}>
              {pkg.category}
            </Badge>
            <Badge variant="glass" dot={false}>
              {pkg.elevation}
            </Badge>
            <Badge variant="muted" dot={false}>
              Best: {pkg.bestSeason}
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-leela-white font-sans leading-tight">
            {pkg.name}
          </h1>

          <p className="text-base sm:text-xl text-leela-white/90 max-w-2xl font-sans font-light">
            {pkg.tagline}
          </p>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Itinerary & Description (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-leela-white font-sans">
                Package Overview
              </h2>
              <p className="text-sm text-leela-muted leading-relaxed font-sans">
                {pkg.description}
              </p>
            </div>

            {/* Daily Itinerary Timeline */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-leela-white font-sans border-b border-white/10 pb-4">
                Curated Daily Itinerary
              </h2>

              <div className="flex flex-col gap-6">
                {pkg.itinerary.map((item) => (
                  <div
                    key={item.day}
                    className="p-6 border border-white/15 bg-obsidian/90 flex flex-col gap-2 rounded-none hover:border-sea-mist/50 transition-all"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-sea-mist font-bold">
                      <span>{item.day}</span>
                    </div>
                    <h3 className="text-lg font-bold text-leela-white font-sans">
                      {item.title}
                    </h3>
                    <p className="text-xs text-leela-muted leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Pricing & Booking Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 border border-white/15 bg-obsidian/95 p-8 flex flex-col gap-6 rounded-none shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-leela-muted uppercase tracking-widest">
                  Starting Rate
                </span>
                <span className="text-3xl font-bold font-sans text-sea-mist">
                  {pkg.price} <span className="text-xs text-leela-muted font-normal">/ person</span>
                </span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-leela-white">
                <span>Duration</span>
                <span className="text-sea-mist font-bold">{pkg.duration}</span>
              </div>

              {/* Inclusions List */}
              <div className="flex flex-col gap-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-sea-mist font-bold">
                  Bespoke Inclusions
                </span>
                {pkg.inclusions.map((inc) => (
                  <div key={inc} className="flex items-start gap-2.5 text-xs text-leela-white font-sans">
                    <CheckCircle2 className="w-4 h-4 text-sea-mist shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>

              {/* Booking CTA */}
              <div className="pt-4 flex flex-col gap-3">
                <Link href="/#planner" className="w-full">
                  <Button variant="primary" size="lg" className="w-full rounded-none">
                    Customise This Package →
                  </Button>
                </Link>
                <p className="text-[11px] text-center text-leela-muted font-mono">
                  24/7 Ceylon Private Travel Concierge Included
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
