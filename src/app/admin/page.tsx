import { PrismaClient } from "@prisma/client";
import { Users, CalendarCheck, Package as PackageIcon, TrendingUp } from "lucide-react";

const prisma = new PrismaClient();

export default async function AdminDashboardPage() {
  const [totalPackages, totalBookings, recentBookings] = await Promise.all([
    prisma.package.count(),
    prisma.booking.count(),
    prisma.booking.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: { package: true }
    })
  ]);

  const stats = [
    { name: "Total Packages", value: totalPackages, icon: PackageIcon },
    { name: "Total Bookings", value: totalBookings, icon: CalendarCheck },
    { name: "Active Customers", value: "124", icon: Users },
    { name: "Revenue (MTD)", value: "$45,200", icon: TrendingUp },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <div key={stat.name} className="p-6 border border-white/10 bg-[#161616] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-mono text-leela-white/60">{stat.name}</span>
              <stat.icon className="w-5 h-5 text-sea-mist" />
            </div>
            <span className="text-3xl font-bold">{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 border border-white/10 bg-[#161616] p-6">
          <h2 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Recent Bookings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs font-mono uppercase text-leela-white/50 border-b border-white/10">
                <tr>
                  <th className="px-4 py-3">Customer</th>
                  <th className="px-4 py-3">Package</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="px-4 py-4 font-medium">{booking.customerName}</td>
                    <td className="px-4 py-4 text-leela-white/70">{booking.package?.title || "Custom Itinerary"}</td>
                    <td className="px-4 py-4 font-mono text-xs">{new Date(booking.checkInDate).toLocaleDateString()}</td>
                    <td className="px-4 py-4">
                      <span className={`px-2 py-1 text-[10px] font-mono uppercase tracking-wider ${
                        booking.status === "CONFIRMED" ? "bg-sea-mist/20 text-sea-mist border border-sea-mist/30" : "bg-white/10 text-white/70"
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
