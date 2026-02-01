import Link from "next/link";
import { cn } from "@/lib/utils";
import { 
  Drill, 
  Scissors, 
  CircleDot, 
  ArrowUpFromLine, 
  Droplets, 
  Leaf, 
  Wind, 
  Flame,
  LucideIcon
} from "lucide-react";
import type { Category } from "@/lib/mock-data";

const iconMap: Record<string, LucideIcon> = {
  drill: Drill,
  saw: Scissors,
  sander: CircleDot,
  ladder: ArrowUpFromLine,
  droplets: Droplets,
  leaf: Leaf,
  wind: Wind,
  flame: Flame,
};

const colorMap: Record<string, string> = {
  drill: "bg-blue-100 text-blue-600",
  saw: "bg-orange-100 text-orange-600",
  sander: "bg-purple-100 text-purple-600",
  ladder: "bg-yellow-100 text-yellow-700",
  droplets: "bg-cyan-100 text-cyan-600",
  leaf: "bg-green-100 text-green-600",
  wind: "bg-slate-100 text-slate-600",
  flame: "bg-red-100 text-red-600",
};

interface CategoryCardProps {
  category: Category;
  size?: "sm" | "md";
}

export function CategoryCard({ category, size = "md" }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Drill;
  const colorClass = colorMap[category.icon] || "bg-gray-100 text-gray-600";

  return (
    <Link
      href={`/explorar?categoria=${category.slug}`}
      className={cn(
        "flex flex-col items-center gap-2 transition-transform hover:scale-105",
        size === "sm" ? "w-16" : "w-20"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-2xl transition-shadow hover:shadow-md",
          colorClass,
          size === "sm" ? "h-14 w-14" : "h-16 w-16"
        )}
      >
        <Icon className={size === "sm" ? "h-6 w-6" : "h-7 w-7"} />
      </div>
      <span className={cn(
        "text-center font-medium text-foreground",
        size === "sm" ? "text-xs" : "text-xs"
      )}>
        {category.name}
      </span>
    </Link>
  );
}
