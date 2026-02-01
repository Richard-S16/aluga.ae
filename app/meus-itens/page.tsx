"use client";

import { Header } from "@/components/layout/header";
import { BottomNav } from "@/components/layout/bottom-nav";
import { Sidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ItemCard } from "@/components/item-card";
import { myItems } from "@/lib/mock-data";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { 
  Plus, 
  MoreVertical, 
  Eye, 
  Edit2, 
  Pause, 
  Trash2,
  TrendingUp,
  DollarSign,
  Package,
  Calendar
} from "lucide-react";

const tabs = [
  { id: "ativos", label: "Ativos", count: 2 },
  { id: "pausados", label: "Pausados", count: 0 },
  { id: "inativos", label: "Inativos", count: 1 },
];

export default function MeusItensPage() {
  const [activeTab, setActiveTab] = useState("ativos");
  const [showMenu, setShowMenu] = useState<string | null>(null);

  // Stats mockados
  const stats = {
    totalEarnings: 1250,
    activeItems: 2,
    totalRentals: 12,
    avgRating: 4.6,
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      
      <main className="pt-16 pb-20 md:pb-8 md:pl-64">
        <div className="mx-auto max-w-2xl px-4 py-6 md:max-w-4xl lg:max-w-6xl">
          {/* Header */}
          <section className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Meus Itens</h1>
                <p className="text-muted-foreground">Gerencie seus itens para aluguel</p>
              </div>
              <Link href="/anunciar">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Item
                </Button>
              </Link>
            </div>
          </section>

          {/* Stats Cards */}
          <section className="mb-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
                    <DollarSign className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">R$ {stats.totalEarnings}</p>
                    <p className="text-xs text-muted-foreground">Total ganhos</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                    <Package className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stats.activeItems}</p>
                    <p className="text-xs text-muted-foreground">Itens ativos</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stats.totalRentals}</p>
                    <p className="text-xs text-muted-foreground">Aluguéis</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100">
                    <TrendingUp className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stats.avgRating}</p>
                    <p className="text-xs text-muted-foreground">Avaliação média</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Tabs */}
          <section className="mb-6">
            <div className="flex gap-2 overflow-x-auto no-scrollbar border-b">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors -mb-px",
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab.label}
                  {tab.count > 0 && (
                    <span className={cn(
                      "flex h-5 w-5 items-center justify-center rounded-full text-xs",
                      activeTab === tab.id
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground"
                    )}>
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* Items List */}
          <section>
            {activeTab === "ativos" && (
              <div className="space-y-4">
                {myItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative aspect-video sm:aspect-square sm:w-40">
                        <img
                          src={item.images[0]}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                        <Badge 
                          variant="success" 
                          className="absolute top-2 left-2"
                        >
                          Ativo
                        </Badge>
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.category}</p>
                          </div>
                          <div className="relative">
                            <button
                              onClick={() => setShowMenu(showMenu === item.id ? null : item.id)}
                              className="p-2 hover:bg-muted rounded-full"
                            >
                              <MoreVertical className="h-5 w-5 text-muted-foreground" />
                            </button>
                            {showMenu === item.id && (
                              <div className="absolute right-0 top-full z-10 mt-1 w-48 rounded-xl border bg-white shadow-lg">
                                <button className="flex w-full items-center gap-2 px-4 py-3 text-sm hover:bg-muted">
                                  <Eye className="h-4 w-4" />
                                  Ver anúncio
                                </button>
                                <button className="flex w-full items-center gap-2 px-4 py-3 text-sm hover:bg-muted">
                                  <Edit2 className="h-4 w-4" />
                                  Editar
                                </button>
                                <button className="flex w-full items-center gap-2 px-4 py-3 text-sm hover:bg-muted">
                                  <Pause className="h-4 w-4" />
                                  Pausar
                                </button>
                                <button className="flex w-full items-center gap-2 px-4 py-3 text-sm text-destructive hover:bg-muted">
                                  <Trash2 className="h-4 w-4" />
                                  Excluir
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="mt-auto pt-4 flex items-center justify-between border-t">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              42 visualizações
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {item.reviewCount} aluguéis
                            </span>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-primary">R$ {item.pricePerDay}</p>
                            <p className="text-xs text-muted-foreground">por dia</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "pausados" && (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <Pause className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Nenhum item pausado</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Itens pausados não aparecem nas buscas
                </p>
              </div>
            )}

            {activeTab === "inativos" && (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <Package className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Nenhum item inativo</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Itens excluídos ou arquivados aparecerão aqui
                </p>
              </div>
            )}
          </section>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
