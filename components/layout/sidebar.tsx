"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Search, PlusCircle, MessageCircle, User, Wrench, Settings, LogOut } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { currentUser } from "@/lib/mock-data";

const mainNavItems = [
  { href: "/", icon: Home, label: "Início" },
  { href: "/explorar", icon: Search, label: "Explorar" },
  { href: "/meus-itens", icon: Wrench, label: "Meus Itens" },
  { href: "/mensagens", icon: MessageCircle, label: "Mensagens" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex fixed left-0 top-16 bottom-0 w-64 flex-col border-r bg-white p-4">
      {/* User Info */}
      <div className="mb-6 flex items-center gap-3 rounded-xl bg-muted/50 p-3">
        <Avatar src={currentUser.avatar} alt={currentUser.name} size="lg" />
        <div className="flex-1 min-w-0">
          <p className="font-semibold truncate">{currentUser.name}</p>
          <p className="text-sm text-muted-foreground truncate">{currentUser.location}</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {mainNavItems.map((item) => {
          const isActive = pathname === item.href || 
            (item.href !== "/" && pathname.startsWith(item.href));
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                isActive 
                  ? "bg-primary text-white" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
        
        {/* Anunciar Button */}
        <Link
          href="/anunciar"
          className="flex items-center gap-3 rounded-xl bg-accent px-4 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/80 transition-colors mt-4"
        >
          <PlusCircle className="h-5 w-5" />
          Anunciar Item
        </Link>
      </nav>

      {/* Bottom Actions */}
      <div className="border-t pt-4 space-y-1">
        <Link
          href="/perfil"
          className={cn(
            "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
            pathname === "/perfil"
              ? "bg-primary text-white"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          <User className="h-5 w-5" />
          Meu Perfil
        </Link>
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
          <Settings className="h-5 w-5" />
          Configurações
        </button>
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors">
          <LogOut className="h-5 w-5" />
          Sair
        </button>
      </div>
    </aside>
  );
}
