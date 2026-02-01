"use client";

import Link from "next/link";
import { Star, MapPin, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Item } from "@/lib/mock-data";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ItemCardProps {
  item: Item;
  variant?: "default" | "horizontal";
}

export function ItemCard({ item, variant = "default" }: ItemCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  if (variant === "horizontal") {
    return (
      <Link href={`/item/${item.id}`}>
        <Card className="flex overflow-hidden hover:shadow-md transition-shadow">
          <div className="relative h-28 w-28 flex-shrink-0">
            <img
              src={item.images[0]}
              alt={item.title}
              className="h-full w-full object-cover"
            />
            {!item.available && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <Badge variant="secondary" className="text-xs">Indisponível</Badge>
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col justify-between p-3">
            <div>
              <h3 className="font-semibold text-sm line-clamp-1">{item.title}</h3>
              <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{item.distance}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span className="text-xs font-medium">{item.rating}</span>
                <span className="text-xs text-muted-foreground">({item.reviewCount})</span>
              </div>
              <p className="text-sm font-bold text-primary">
                R$ {item.pricePerDay}<span className="text-xs font-normal text-muted-foreground">/dia</span>
              </p>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/item/${item.id}`} className="block">
      <Card className="overflow-hidden hover:shadow-md transition-shadow group">
        <div className="relative aspect-[4/3]">
          <img
            src={item.images[0]}
            alt={item.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors"
          >
            <Heart 
              className={cn(
                "h-4 w-4 transition-colors",
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
              )} 
            />
          </button>

          {/* Status Badge */}
          {!item.available && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <Badge variant="secondary" className="text-sm">Indisponível</Badge>
            </div>
          )}

          {/* Distance Badge */}
          <div className="absolute bottom-2 left-2">
            <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-xs">
              <MapPin className="h-3 w-3 mr-1" />
              {item.distance}
            </Badge>
          </div>
        </div>

        <div className="p-3">
          <h3 className="font-semibold line-clamp-1 text-sm">{item.title}</h3>
          
          <div className="mt-1 flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-medium">{item.rating}</span>
            <span className="text-xs text-muted-foreground">({item.reviewCount})</span>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <p className="text-base font-bold text-primary">
              R$ {item.pricePerDay}
              <span className="text-xs font-normal text-muted-foreground">/dia</span>
            </p>
            {item.pricePerWeek && (
              <p className="text-xs text-muted-foreground">
                ou R$ {item.pricePerWeek}/sem
              </p>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
