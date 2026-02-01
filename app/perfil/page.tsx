"use client";

import { Header } from "@/components/layout/header";
import { BottomNav } from "@/components/layout/bottom-nav";
import { Sidebar } from "@/components/layout/sidebar";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ItemCard } from "@/components/item-card";
import { currentUser, mockRentals, myItems, mockReviews } from "@/lib/mock-data";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { 
  Settings, 
  Star, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  ChevronRight,
  Package,
  ShoppingBag,
  Edit2,
  LogOut,
  HelpCircle,
  Bell,
  CreditCard
} from "lucide-react";

const tabs = [
  { id: "visao-geral", label: "Visão Geral" },
  { id: "alugueis", label: "Meus Aluguéis" },
  { id: "avaliacoes", label: "Avaliações" },
];

const statusColors = {
  pending: "bg-amber-100 text-amber-800",
  active: "bg-emerald-100 text-emerald-800",
  completed: "bg-gray-100 text-gray-800",
  cancelled: "bg-red-100 text-red-800",
};

const statusLabels = {
  pending: "Pendente",
  active: "Ativo",
  completed: "Concluído",
  cancelled: "Cancelado",
};

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState("visao-geral");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      
      <main className="pt-16 pb-20 md:pb-8 md:pl-64">
        <div className="mx-auto max-w-2xl px-4 py-6 md:max-w-4xl lg:max-w-6xl">
          {/* Profile Header */}
          <section className="mb-6">
            <Card className="relative overflow-hidden">
              {/* Cover */}
              <div className="h-24 bg-gradient-to-r from-primary to-emerald-600 md:h-32" />
              
              <div className="px-4 pb-4 md:px-6">
                {/* Avatar */}
                <div className="relative flex items-end justify-between">
                  <div className="flex items-end gap-4">
                    <div className="relative">
                      <Avatar 
                        src={currentUser.avatar} 
                        alt={currentUser.name} 
                        size="xl"
                        className="h-20 w-20 border-4 border-white md:h-24 md:w-24"
                      />
                      {currentUser.verified && (
                        <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white border-2 border-white">
                          <ShieldCheck className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h1 className="text-xl font-bold md:text-2xl">{currentUser.name}</h1>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{currentUser.location}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="hidden sm:flex">
                    <Edit2 className="h-4 w-4 mr-2" />
                    Editar perfil
                  </Button>
                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-3 gap-4 border-t pt-4">
                  <div className="text-center">
                    <p className="text-xl font-bold">{currentUser.itemsCount}</p>
                    <p className="text-xs text-muted-foreground">Itens</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold">{currentUser.rentalsCount}</p>
                    <p className="text-xs text-muted-foreground">Aluguéis</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <p className="text-xl font-bold">{currentUser.rating}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{currentUser.reviewCount} avaliações</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {currentUser.verified && (
                    <Badge variant="success" className="gap-1">
                      <ShieldCheck className="h-3 w-3" />
                      Verificado
                    </Badge>
                  )}
                  <Badge variant="secondary" className="gap-1">
                    <Calendar className="h-3 w-3" />
                    Membro desde {currentUser.memberSince}
                  </Badge>
                </div>
              </div>
            </Card>
          </section>

          {/* Tabs */}
          <section className="mb-6">
            <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    activeTab === tab.id
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </section>

          {/* Tab Content */}
          {activeTab === "visao-geral" && (
            <>
              {/* Bio */}
              <section className="mb-6">
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Sobre mim</h3>
                  <p className="text-sm text-muted-foreground">{currentUser.bio}</p>
                </Card>
              </section>

              {/* My Items */}
              <section className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Meus Itens</h2>
                  <Link href="/meus-itens" className="flex items-center text-sm text-primary">
                    Ver todos
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {myItems.map((item) => (
                    <ItemCard key={item.id} item={item} />
                  ))}
                </div>
              </section>

              {/* Quick Actions */}
              <section className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Configurações</h2>
                <Card className="divide-y">
                  <Link href="#" className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <Bell className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <span className="font-medium">Notificações</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                  <Link href="#" className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <CreditCard className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <span className="font-medium">Pagamentos</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                  <Link href="#" className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <ShieldCheck className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <span className="font-medium">Verificação de identidade</span>
                    </div>
                    <Badge variant="success" className="text-xs">Verificado</Badge>
                  </Link>
                  <Link href="#" className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <HelpCircle className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <span className="font-medium">Ajuda e suporte</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                  <button className="flex w-full items-center justify-between p-4 hover:bg-muted/50 transition-colors text-destructive">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
                        <LogOut className="h-5 w-5" />
                      </div>
                      <span className="font-medium">Sair da conta</span>
                    </div>
                  </button>
                </Card>
              </section>
            </>
          )}

          {activeTab === "alugueis" && (
            <section>
              <div className="space-y-4">
                {mockRentals.map((rental) => (
                  <Card key={rental.id} className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={rental.item.images[0]}
                        alt={rental.item.title}
                        className="h-20 w-20 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold line-clamp-1">{rental.item.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {rental.startDate} - {rental.endDate}
                            </p>
                          </div>
                          <Badge className={statusColors[rental.status]}>
                            {statusLabels[rental.status]}
                          </Badge>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar 
                              src={rental.item.owner.avatar} 
                              alt={rental.item.owner.name}
                              size="sm"
                            />
                            <span className="text-sm">{rental.item.owner.name}</span>
                          </div>
                          <p className="font-semibold">R$ {rental.totalPrice}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {activeTab === "avaliacoes" && (
            <section>
              <div className="space-y-4">
                {mockReviews.slice(0, 4).map((review) => (
                  <Card key={review.id} className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar src={review.user.avatar} alt={review.user.name} size="md" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{review.user.name}</p>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={cn(
                                  "h-3.5 w-3.5",
                                  i < review.rating
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-gray-300"
                                )}
                              />
                            ))}
                          </div>
                        </div>
                        {review.itemTitle && (
                          <p className="text-xs text-primary">{review.itemTitle}</p>
                        )}
                        <p className="mt-2 text-sm text-muted-foreground">{review.comment}</p>
                        <p className="mt-2 text-xs text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
