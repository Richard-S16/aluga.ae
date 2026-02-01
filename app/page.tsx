import { Header } from "@/components/layout/header";
import { BottomNav } from "@/components/layout/bottom-nav";
import { Sidebar } from "@/components/layout/sidebar";
import { SearchBar } from "@/components/search-bar";
import { CategoryCard } from "@/components/category-card";
import { ItemCard } from "@/components/item-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { mockItems, categories, mockUsers } from "@/lib/mock-data";
import { ChevronRight, Sparkles, TrendingUp, MapPin } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const featuredItems = mockItems.slice(0, 4);
  const nearbyItems = mockItems.filter(item => parseFloat(item.distance) < 5);
  const topOwners = mockUsers.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      
      <main className="pt-16 pb-20 md:pb-8 md:pl-64">
        <div className="mx-auto max-w-2xl px-4 py-6 md:max-w-4xl lg:max-w-6xl">
          {/* Hero Section */}
          <section className="mb-8">
            <div className="mb-6">
              <h1 className="text-2xl font-bold md:text-3xl">
                Olá, <span className="text-primary">João</span> 👋
              </h1>
              <p className="mt-1 text-muted-foreground">
                O que você precisa alugar hoje?
              </p>
            </div>
            
            <SearchBar placeholder="Buscar ferramentas, equipamentos..." />
          </section>

          {/* Location Banner */}
          <section className="mb-8">
            <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-primary/10 to-emerald-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Sua localização</p>
                  <p className="text-xs text-muted-foreground">Indaiatuba, SP</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-primary">
                Alterar
              </Button>
            </div>
          </section>

          {/* Categories */}
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Categorias</h2>
              <Link 
                href="/explorar" 
                className="flex items-center text-sm text-primary hover:underline"
              >
                Ver todas
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </section>

          {/* Featured Items */}
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-500" />
                <h2 className="text-lg font-semibold">Destaques</h2>
              </div>
              <Link 
                href="/explorar" 
                className="flex items-center text-sm text-primary hover:underline"
              >
                Ver mais
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {featuredItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          {/* Nearby Items */}
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">Perto de você</h2>
              </div>
              <Link 
                href="/explorar?ordenar=distancia" 
                className="flex items-center text-sm text-primary hover:underline"
              >
                Ver mais
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="space-y-3">
              {nearbyItems.slice(0, 3).map((item) => (
                <ItemCard key={item.id} item={item} variant="horizontal" />
              ))}
            </div>
          </section>

          {/* Top Owners */}
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">Locadores em destaque</h2>
              </div>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4">
              {topOwners.map((owner) => (
                <Link
                  key={owner.id}
                  href={`/usuario/${owner.id}`}
                  className="flex flex-col items-center gap-2 min-w-[100px]"
                >
                  <div className="relative">
                    <Avatar src={owner.avatar} alt={owner.name} size="xl" />
                    {owner.verified && (
                      <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium line-clamp-1">{owner.name.split(' ')[0]}</p>
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-xs text-amber-500">★</span>
                      <span className="text-xs text-muted-foreground">{owner.rating}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA Banner */}
          <section className="mb-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-emerald-600 p-6 text-white">
              <div className="relative z-10">
                <Badge className="bg-white/20 text-white border-0 mb-3">
                  Ganhe dinheiro extra
                </Badge>
                <h3 className="text-xl font-bold mb-2">
                  Tem ferramentas paradas?
                </h3>
                <p className="text-sm text-white/80 mb-4 max-w-xs">
                  Anuncie seus itens e comece a ganhar dinheiro com o que você já tem!
                </p>
                <Link href="/anunciar">
                  <Button className="bg-white text-primary hover:bg-white/90">
                    Anunciar agora
                  </Button>
                </Link>
              </div>
              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-white/10" />
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/10" />
            </div>
          </section>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
