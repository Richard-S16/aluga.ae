"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { BottomNav } from "@/components/layout/bottom-nav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { mockItems, mockReviews } from "@/lib/mock-data";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  Star, 
  MapPin, 
  Shield, 
  CheckCircle2, 
  Calendar,
  MessageCircle,
  ChevronRight,
  Clock,
  Info
} from "lucide-react";

export default function ItemDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const item = mockItems.find((i) => i.id === params.id);

  if (!item) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Item não encontrado</h1>
          <Button className="mt-4" onClick={() => router.back()}>
            Voltar
          </Button>
        </div>
      </div>
    );
  }

  const itemReviews = mockReviews.filter((r) => r.itemTitle?.includes(item.title.split(" ")[0]));
  
  // Calculate total
  const calculateDays = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  const days = calculateDays();
  const subtotal = days * item.pricePerDay;
  const serviceFee = Math.round(subtotal * 0.05);
  const total = subtotal + serviceFee;

  return (
    <div className="min-h-screen bg-background pb-32 md:pb-8">
      {/* Image Gallery */}
      <div className="relative">
        <div className="aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-muted">
          <img
            src={item.images[selectedImageIndex]}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        {/* Actions */}
        <div className="absolute right-4 top-4 flex gap-2">
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
          >
            <Heart className={cn("h-5 w-5", isFavorite && "fill-red-500 text-red-500")} />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white transition-colors">
            <Share2 className="h-5 w-5" />
          </button>
        </div>

        {/* Image Indicators */}
        {item.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
            {item.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  idx === selectedImageIndex
                    ? "bg-white w-4"
                    : "bg-white/60 hover:bg-white/80"
                )}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mx-auto max-w-4xl lg:flex lg:gap-8">
        {/* Content */}
        <div className="flex-1 px-4 py-6">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Badge variant="secondary" className="mb-2">
                  {item.category}
                </Badge>
                <h1 className="text-xl font-bold md:text-2xl">{item.title}</h1>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">
                  R$ {item.pricePerDay}
                </p>
                <p className="text-sm text-muted-foreground">por dia</p>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-medium">{item.rating}</span>
                <span className="text-muted-foreground">({item.reviewCount} avaliações)</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{item.distance}</span>
              </div>
            </div>
          </div>

          {/* Owner Card */}
          <Card className="mb-6 p-4">
            <div className="flex items-center justify-between">
              <Link href={`/usuario/${item.owner.id}`} className="flex items-center gap-3">
                <Avatar src={item.owner.avatar} alt={item.owner.name} size="lg" />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{item.owner.name}</p>
                    {item.owner.verified && (
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span>{item.owner.rating}</span>
                    <span>·</span>
                    <span>{item.owner.reviewCount} avaliações</span>
                  </div>
                </div>
              </Link>
              <Button variant="outline" size="sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat
              </Button>
            </div>
          </Card>

          {/* Description */}
          <section className="mb-6">
            <h2 className="mb-3 text-lg font-semibold">Sobre o item</h2>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </section>

          {/* Features */}
          <section className="mb-6">
            <h2 className="mb-3 text-lg font-semibold">Características</h2>
            <div className="grid grid-cols-2 gap-2">
              {item.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Rules */}
          <section className="mb-6">
            <h2 className="mb-3 text-lg font-semibold">Regras de uso</h2>
            <div className="space-y-2">
              {item.rules.map((rule, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Info className="h-4 w-4 text-amber-500" />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Reviews */}
          <section className="mb-6">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Avaliações</h2>
              <Link href="#" className="flex items-center text-sm text-primary">
                Ver todas
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="space-y-4">
              {mockReviews.slice(0, 2).map((review) => (
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
                                "h-3 w-3",
                                i < review.rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-gray-300"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{review.comment}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Location */}
          <section className="mb-6">
            <h2 className="mb-3 text-lg font-semibold">Localização</h2>
            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">{item.location}</p>
                  <p className="text-xs text-muted-foreground">Localização aproximada</p>
                </div>
              </div>
            </Card>
          </section>
        </div>

        {/* Booking Card - Desktop */}
        <div className="hidden lg:block lg:w-96 lg:p-6">
          <Card className="sticky top-24 p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">R$ {item.pricePerDay}</p>
                <p className="text-sm text-muted-foreground">por dia</p>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-medium">{item.rating}</span>
              </div>
            </div>

            <div className="mb-4 space-y-3">
              <div>
                <label className="mb-1 block text-sm font-medium">Data de retirada</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Data de devolução</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {days > 0 && (
              <div className="mb-4 space-y-2 border-t pt-4">
                <div className="flex justify-between text-sm">
                  <span>R$ {item.pricePerDay} x {days} dias</span>
                  <span>R$ {subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Taxa de serviço</span>
                  <span>R$ {serviceFee}</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <span>Total</span>
                  <span>R$ {total}</span>
                </div>
              </div>
            )}

            <Button className="w-full" size="lg" disabled={!item.available || days === 0}>
              {item.available ? "Solicitar aluguel" : "Indisponível"}
            </Button>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>Pagamento seguro via Aluga.ae</span>
            </div>
          </Card>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-white p-4 md:hidden safe-bottom">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-lg font-bold">R$ {item.pricePerDay}<span className="text-sm font-normal text-muted-foreground">/dia</span></p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span>{item.rating} ({item.reviewCount})</span>
            </div>
          </div>
          <Button size="lg" disabled={!item.available} className="px-8">
            {item.available ? "Alugar" : "Indisponível"}
          </Button>
        </div>
      </div>

      <div className="hidden md:block">
        <BottomNav />
      </div>
    </div>
  );
}
