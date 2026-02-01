"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  showFilters?: boolean;
}

export function SearchBar({ 
  placeholder = "Buscar ferramentas...", 
  onSearch,
  showFilters = true 
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch?.(e.target.value);
          }}
          className="pl-12 bg-muted/50 border-0 focus-visible:ring-primary"
        />
      </div>
      {showFilters && (
        <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors">
          <SlidersHorizontal className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
