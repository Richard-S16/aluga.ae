"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Bell, MapPin } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { currentUser } from "@/lib/mock-data";

export function Header() {
  const pathname = usePathname();
  
  // Don't show header on item detail pages
  if (pathname.startsWith("/item/")) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/95 backdrop-blur-lg safe-top">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <span className="text-lg font-bold text-white">A</span>
          </div>
          <span className="text-xl font-bold text-foreground">
            Aluga<span className="text-primary">.ae</span>
          </span>
        </Link>

        {/* Location & Actions */}
        <div className="flex items-center gap-3">
          {/* Location */}
          <button className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="max-w-[120px] truncate">Indaiatuba, SP</span>
          </button>
          
          {/* Notifications */}
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
              3
            </span>
          </button>
          
          {/* Avatar - Desktop only */}
          <Link href="/perfil" className="hidden md:block">
            <Avatar 
              src={currentUser.avatar} 
              alt={currentUser.name}
              size="md"
              className="border-2 border-transparent hover:border-primary transition-colors"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
