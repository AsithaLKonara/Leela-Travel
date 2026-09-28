# Leela Travel 🌿 

A high-end, cinematic luxury travel application built for curating bespoke itineraries and managing exclusive travel packages in Sri Lanka.

## 🌟 Overview

Leela Travel is a state-of-the-art web platform engineered with a premium dark-themed aesthetic, micro-animations, and glassmorphism. It serves both as a luxurious storefront for clients to discover and book tailored journeys and as a powerful internal CRM/Admin dashboard to manage travel packages and booking requests.

### Key Features
- **Cinematic Storefront**: Stunning immersive hero sections, dynamic scrolling layouts, and rich typography using `Geist` and `Space Mono`.
- **Interactive Journey Planner**: A multi-step builder allowing clients to curate their exact travel mood, duration, and party size.
- **Dynamic Tour Packages**: Fully browseable catalog of curated packages dynamically served from the database.
- **End-to-End Booking System**: Secure booking requests linking specific packages to client contact information and special notes.
- **Admin Dashboard**: Secure internal dashboard to manage travel packages (CRUD operations) and update customer booking statuses (`PENDING` -> `CONFIRMED`).

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & Lucide Icons
- **Database**: PostgreSQL
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: JWT-based Secure API Routes & Middleware

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd Leela-Travel
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory and configure your PostgreSQL connection:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/leela_travel?schema=public"
JWT_SECRET="your-super-secret-jwt-key"
```

### 3. Database Migration & Seeding
Push the Prisma schema to your database and seed it with demo packages and the admin user:
```bash
npx prisma db push
npx prisma generate
npx prisma db seed
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🔐 Admin Credentials (Demo)

Use the following credentials to access the secure Admin Dashboard at `/auth` (which redirects to `/admin` upon success):

- **Email**: `admin@leelatravel.com`
- **Password**: `admin123`

*(Note: The database must be seeded via `npx prisma db seed` for these credentials to exist).*

---

## 📂 Project Structure Highlights

- `src/app/page.tsx`: The main cinematic landing page.
- `src/app/admin/`: Protected admin routes for managing Packages and Bookings.
- `src/app/api/`: RESTful API endpoints for authentication, packages, and bookings.
- `src/components/`: Reusable UI components (buttons, headers, models).
- `src/lib/services/`: Centralized database service classes (`booking.service.ts`, `package.service.ts`).
- `prisma/schema.prisma`: The PostgreSQL database architectural schema.
