"use client";

import { useParams, useRouter } from "next/navigation";
import { Header } from "@/components/layout/header";
import { BottomNav } from "@/components/layout/bottom-nav";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ItemCard } from "@/components/item-card";
import { mockUsers, mockItems, mockReviews } from "@/lib/mock-data";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  ArrowLeft,
  Star, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  MessageCircle,
  Share2
} from "lucide-react";

export default function UsuarioPage() {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"itens" | "avaliacoes">("itens");

  const user = mockUsers.find((u) => u.id === params.id);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Usuário não encontrado</h1>
          <Button className="mt-4" onClick={() => router.back()}>
            Voltar
          </Button>
        </div>
      </div>
    );
  }

  // Get user's items
  const userItems = mockItems.filter((item) => item.owner.id === user.id);
  
  // Get user's reviews
  const userReviews = mockReviews.filter((review) => 
    userItems.some((item) => review.itemTitle?.includes(item.title.split(" ")[0]))
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 pb-20 md:pb-8 md:pl-64">
        <div className="mx-auto max-w-2xl px-4 py-6 md:max-w-4xl">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="mb-4 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar</span>
          </button>

          {/* Profile Header */}
          <Card className="mb-6 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="relative">
                <Avatar 
                  src={user.avatar} 
                  alt={user.name} 
                  size="xl"
                  className="h-24 w-24"
                />
                {user.verified && (
                  <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white border-2 border-white">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-xl font-bold">{user.name}</h1>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>{user.location}</span>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-muted rounded-full">
                    <Share2 className="h-5 w-5 text-muted-foreground" />
                  </button>
                </div>
                
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-semibold">{user.rating}</span>
                    <span className="text-muted-foreground">({user.reviewCount})</span>
                  </div>
                  <Badge variant="secondary" className="gap-1">
                    <Calendar className="h-3 w-3" />
                    Desde {user.memberSince}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="mt-4 text-sm text-muted-foreground">{user.bio}</p>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-3 gap-4 border-t pt-4">
              <div className="text-center">
                <p className="text-xl font-bold">{user.itemsCount}</p>
                <p className="text-xs text-muted-foreground">Itens</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">{user.rentalsCount}</p>
                <p className="text-xs text-muted-foreground">Aluguéis</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">98%</p>
                <p className="text-xs text-muted-foreground">Resposta</p>
              </div>
            </div>

            {/* Contact Button */}
            <Button className="w-full mt-4">
              <MessageCircle className="h-4 w-4 mr-2" />
              Enviar mensagem
            </Button>
          </Card>

          {/* Tabs */}
          <div className="flex gap-4 border-b mb-6">
            <button
              onClick={() => setActiveTab("itens")}
              className={cn(
                "pb-3 text-sm font-medium border-b-2 -mb-px transition-colors",
                activeTab === "itens"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground"
              )}
            >
              Itens ({userItems.length})
            </button>
            <button
              onClick={() => setActiveTab("avaliacoes")}
              className={cn(
                "pb-3 text-sm font-medium border-b-2 -mb-px transition-colors",
                activeTab === "avaliacoes"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground"
              )}
            >
              Avaliações ({user.reviewCount})
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "itens" && (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {userItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
              {userItems.length === 0 && (
                <div className="col-span-full text-center py-8">
                  <p className="text-muted-foreground">Este usuário ainda não tem itens cadastrados</p>
                </div>
              )}
            </div>
          )}

          {activeTab === "avaliacoes" && (
            <div className="space-y-4">
              {mockReviews.slice(0, 5).map((review) => (
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
                        <p className="text-xs text-primary mt-0.5">{review.itemTitle}</p>
                      )}
                      <p className="mt-2 text-sm text-muted-foreground">{review.comment}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
