"use client";

import { Header } from "@/components/layout/header";
import { BottomNav } from "@/components/layout/bottom-nav";
import { Sidebar } from "@/components/layout/sidebar";
import { SearchBar } from "@/components/search-bar";
import { CategoryCard } from "@/components/category-card";
import { ItemCard } from "@/components/item-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockItems, categories } from "@/lib/mock-data";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { X, ChevronDown } from "lucide-react";

const sortOptions = [
  { id: "relevancia", label: "Relevância" },
  { id: "menor-preco", label: "Menor preço" },
  { id: "maior-preco", label: "Maior preço" },
  { id: "distancia", label: "Mais próximo" },
  { id: "avaliacao", label: "Melhor avaliado" },
];

const priceRanges = [
  { id: "all", label: "Todos" },
  { id: "0-30", label: "Até R$ 30" },
  { id: "30-60", label: "R$ 30 - R$ 60" },
  { id: "60-100", label: "R$ 60 - R$ 100" },
  { id: "100+", label: "Acima de R$ 100" },
];

export default function ExplorarPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState("relevancia");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Filter items based on category
  const filteredItems = selectedCategory
    ? mockItems.filter((item) => item.categorySlug === selectedCategory)
    : mockItems;

  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (selectedSort) {
      case "menor-preco":
        return a.pricePerDay - b.pricePerDay;
      case "maior-preco":
        return b.pricePerDay - a.pricePerDay;
      case "distancia":
        return parseFloat(a.distance) - parseFloat(b.distance);
      case "avaliacao":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  // Filter by price
  const finalItems = sortedItems.filter((item) => {
    switch (selectedPrice) {
      case "0-30":
        return item.pricePerDay <= 30;
      case "30-60":
        return item.pricePerDay > 30 && item.pricePerDay <= 60;
      case "60-100":
        return item.pricePerDay > 60 && item.pricePerDay <= 100;
      case "100+":
        return item.pricePerDay > 100;
      default:
        return true;
    }
  });

  const activeFiltersCount = [
    selectedCategory,
    selectedPrice !== "all" ? selectedPrice : null,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      
      <main className="pt-16 pb-20 md:pb-8 md:pl-64">
        <div className="mx-auto max-w-2xl px-4 py-6 md:max-w-4xl lg:max-w-6xl">
          {/* Search */}
          <section className="mb-6">
            <SearchBar 
              placeholder="O que você procura?" 
              showFilters={true}
            />
          </section>

          {/* Categories Scroll */}
          <section className="mb-6">
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4">
              <button
                onClick={() => setSelectedCategory(null)}
                className={cn(
                  "flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  !selectedCategory
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(
                    selectedCategory === category.slug ? null : category.slug
                  )}
                  className={cn(
                    "flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    selectedCategory === category.slug
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </section>

          {/* Filters & Sort */}
          <section className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant={showFilters ? "default" : "outline"}
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="relative"
              >
                Filtros
                {activeFiltersCount > 0 && (
                  <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-primary">
                    {activeFiltersCount}
                  </span>
                )}
              </Button>
              
              {selectedCategory && (
                <Badge 
                  variant="secondary" 
                  className="cursor-pointer hover:bg-secondary/80"
                  onClick={() => setSelectedCategory(null)}
                >
                  {categories.find(c => c.slug === selectedCategory)?.name}
                  <X className="ml-1 h-3 w-3" />
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground hidden sm:inline">
                {finalItems.length} itens
              </span>
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="h-9 rounded-lg border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </section>

          {/* Filter Panel */}
          {showFilters && (
            <section className="mb-6 rounded-2xl border bg-card p-4">
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-sm font-medium">Faixa de preço</h3>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.id}
                        onClick={() => setSelectedPrice(range.id)}
                        className={cn(
                          "rounded-full px-3 py-1.5 text-sm transition-colors",
                          selectedPrice === range.id
                            ? "bg-primary text-white"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        )}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setSelectedPrice("all");
                    }}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Limpar filtros
                  </button>
                  <Button size="sm" onClick={() => setShowFilters(false)}>
                    Aplicar
                  </Button>
                </div>
              </div>
            </section>
          )}

          {/* Results */}
          <section>
            {finalItems.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {finalItems.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-lg font-semibold">Nenhum item encontrado</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tente ajustar os filtros ou buscar por outro termo
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedPrice("all");
                  }}
                >
                  Limpar filtros
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
