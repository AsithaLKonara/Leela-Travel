export interface DestinationPackage {
  slug: string;
  number: string;
  name: string;
  region: string;
  tagline: string;
  price: string;
  duration: string;
  image: string;
  category: string;
}

export const DESTINATIONS_DATA: DestinationPackage[] = [
  {
    slug: "ella",
    number: "01",
    name: "Ella Cloud Forest",
    region: "Central Highlands",
    tagline: "Mist-covered tea peaks, Nine Arch Viaduct train journeys & Ravana Falls",
    price: "$1,450",
    duration: "7 Days",
    image: "/images/hero/ella.jpg",
    category: "Highland & Railways",
  },
  {
    slug: "sigiriya",
    number: "02",
    name: "Sigiriya Citadel",
    region: "Cultural Triangle",
    tagline: "5th-century royal rock fortress rising above emerald jungle canopy",
    price: "$1,280",
    duration: "5 Days",
    image: "/images/hero/sigiriya.jpg",
    category: "UNESCO Heritage",
  },
  {
    slug: "kandy",
    number: "03",
    name: "Kandy Sacred Realm",
    region: "Central Hills",
    tagline: "Temple of the Tooth, royal botanical sanctuaries & traditional dance",
    price: "$1,150",
    duration: "4 Days",
    image: "/images/hero/kandy.jpg",
    category: "Sacred Culture",
  },
  {
    slug: "nuwara-eliya",
    number: "04",
    name: "Nuwara Eliya Little England",
    region: "Tea Country",
    tagline: "High-altitude tea estates, colonial bungalows & cool mountain lakes",
    price: "$1,390",
    duration: "5 Days",
    image: "/images/hero/beautiful-ramboda-waterfall-sri-lanka-island.jpg",
    category: "Tea Estates",
  },
  {
    slug: "galle",
    number: "05",
    name: "Galle Dutch Fort",
    region: "Southern Coast",
    tagline: "17th-century ramparts, cobblestone alleys & oceanfront boutique villas",
    price: "$1,620",
    duration: "6 Days",
    image: "/images/hero/traditional-stilt-fishermen-sri-lanka.jpg",
    category: "Colonial Coast",
  },
  {
    slug: "mirissa",
    number: "06",
    name: "Mirissa Whales & Coast",
    region: "Deep South",
    tagline: "Blue whale charters, Coconut Tree Hill & pristine palm-fringed bays",
    price: "$1,550",
    duration: "5 Days",
    image: "/images/hero/surf.jpg",
    category: "Ocean & Wildlife",
  },
  {
    slug: "yala",
    number: "07",
    name: "Yala Wilderness Safari",
    region: "South East Sanctuaries",
    tagline: "World-highest leopard density, wild elephants & luxury safari tents",
    price: "$1,850",
    duration: "5 Days",
    image: "/images/destinations/yala.jpg",
    category: "Wildlife Safari",
  },
  {
    slug: "bentota",
    number: "08",
    name: "Bentota Riviera",
    region: "South West Coast",
    tagline: "Luxury river cruises, Geoffrey Bawa architecture & golden sands",
    price: "$1,420",
    duration: "5 Days",
    image: "/images/hero/traditional-stilt-fishermen-sri-lanka.jpg",
    category: "River & Beach",
  },
  {
    slug: "trincomalee",
    number: "09",
    name: "Trincomalee Deep Blue",
    region: "North East Coast",
    tagline: "Nilaveli coral reef diving, Marble Beach & ancient Koneswaram temple",
    price: "$1,780",
    duration: "6 Days",
    image: "/images/hero/surf.jpg",
    category: "Coral Coast",
  },
  {
    slug: "arugam-bay",
    number: "10",
    name: "Arugam Bay Surf Retreat",
    region: "East Coast",
    tagline: "World-class point breaks, lagoon wildlife safaris & boho luxury",
    price: "$1,350",
    duration: "5 Days",
    image: "/images/hero/ella.jpg",
    category: "Ocean & Surf",
  },
];
