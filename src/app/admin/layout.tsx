"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Package, CalendarCheck, Settings, LogOut, LayoutDashboard } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Packages", href: "/admin/packages", icon: Package },
    { label: "Bookings", href: "/admin/bookings", icon: CalendarCheck },
  ];

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-leela-white font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex flex-col border-r border-white/10 bg-[#111111]">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold tracking-tight text-sea-mist">Leela Admin</h2>
        </div>
        
        <nav className="flex-1 py-6 px-4 flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                  isActive 
                    ? "bg-sea-mist/10 text-sea-mist border-l-2 border-sea-mist" 
                    : "text-leela-white/70 hover:text-leela-white hover:bg-white/5 border-l-2 border-transparent"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-leela-white/70 hover:text-white hover:bg-white/5 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Back to Site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
        {children}
      </main>
    </div>
  );
}
