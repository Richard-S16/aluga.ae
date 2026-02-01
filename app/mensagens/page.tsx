"use client";

import { Header } from "@/components/layout/header";
import { BottomNav } from "@/components/layout/bottom-nav";
import { Sidebar } from "@/components/layout/sidebar";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { mockMessages } from "@/lib/mock-data";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, MoreVertical, Check, CheckCheck } from "lucide-react";

export default function MensagensPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const filteredMessages = mockMessages.filter(
    (m) =>
      m.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.itemTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      
      <main className="pt-16 pb-20 md:pb-8 md:pl-64">
        <div className="mx-auto max-w-2xl md:max-w-4xl lg:max-w-6xl">
          {/* Mobile View */}
          <div className="md:hidden">
            {/* Header */}
            <div className="sticky top-16 z-10 bg-background border-b px-4 py-4">
              <h1 className="text-xl font-bold mb-4">Mensagens</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar conversas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border-0 bg-muted py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Chat List */}
            <div className="divide-y">
              {filteredMessages.length > 0 ? (
                filteredMessages.map((message) => (
                  <button
                    key={message.id}
                    onClick={() => setSelectedChat(message.id)}
                    className={cn(
                      "w-full flex items-start gap-3 p-4 text-left hover:bg-muted/50 transition-colors",
                      message.unread && "bg-primary/5"
                    )}
                  >
                    <div className="relative">
                      <Avatar src={message.user.avatar} alt={message.user.name} size="lg" />
                      {message.unread && (
                        <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-primary border-2 border-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className={cn("font-semibold truncate", message.unread && "text-foreground")}>
                          {message.user.name}
                        </p>
                        <span className="text-xs text-muted-foreground flex-shrink-0">
                          {message.timestamp}
                        </span>
                      </div>
                      <p className="text-xs text-primary truncate mt-0.5">
                        {message.itemTitle}
                      </p>
                      <p className={cn(
                        "text-sm truncate mt-1",
                        message.unread ? "text-foreground font-medium" : "text-muted-foreground"
                      )}>
                        {message.lastMessage}
                      </p>
                    </div>
                    <img
                      src={message.itemImage}
                      alt={message.itemTitle}
                      className="h-12 w-12 rounded-lg object-cover flex-shrink-0"
                    />
                  </button>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-lg font-semibold">Nenhuma mensagem</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Suas conversas aparecerão aqui
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Desktop View - Split Layout */}
          <div className="hidden md:flex h-[calc(100vh-4rem)]">
            {/* Sidebar - Chat List */}
            <div className="w-80 border-r flex flex-col">
              <div className="p-4 border-b">
                <h1 className="text-xl font-bold mb-4">Mensagens</h1>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Buscar conversas..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-xl border-0 bg-muted py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                {filteredMessages.map((message) => (
                  <button
                    key={message.id}
                    onClick={() => setSelectedChat(message.id)}
                    className={cn(
                      "w-full flex items-start gap-3 p-4 text-left hover:bg-muted/50 transition-colors border-b",
                      message.unread && "bg-primary/5",
                      selectedChat === message.id && "bg-muted"
                    )}
                  >
                    <div className="relative">
                      <Avatar src={message.user.avatar} alt={message.user.name} size="md" />
                      {message.unread && (
                        <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-primary border-2 border-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-medium truncate text-sm">{message.user.name}</p>
                        <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                      </div>
                      <p className="text-xs text-primary truncate">{message.itemTitle}</p>
                      <p className="text-sm text-muted-foreground truncate mt-0.5">
                        {message.lastMessage}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Content */}
            <div className="flex-1 flex flex-col">
              {selectedChat ? (
                <>
                  {/* Chat Header */}
                  {(() => {
                    const chat = mockMessages.find((m) => m.id === selectedChat);
                    if (!chat) return null;
                    return (
                      <div className="flex items-center justify-between border-b p-4">
                        <div className="flex items-center gap-3">
                          <Avatar src={chat.user.avatar} alt={chat.user.name} size="md" />
                          <div>
                            <p className="font-semibold">{chat.user.name}</p>
                            <p className="text-xs text-primary">{chat.itemTitle}</p>
                          </div>
                        </div>
                        <button className="p-2 hover:bg-muted rounded-full">
                          <MoreVertical className="h-5 w-5 text-muted-foreground" />
                        </button>
                      </div>
                    );
                  })()}

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {/* Mock conversation */}
                    <div className="flex justify-start">
                      <div className="max-w-xs bg-muted rounded-2xl rounded-bl-md px-4 py-2">
                        <p className="text-sm">Olá! Vi que você tem a furadeira disponível. Ainda está disponível para esse fim de semana?</p>
                        <p className="text-xs text-muted-foreground mt-1">10:30</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="max-w-xs bg-primary text-white rounded-2xl rounded-br-md px-4 py-2">
                        <p className="text-sm">Oi! Sim, está disponível! Pode retirar sábado de manhã se quiser.</p>
                        <div className="flex items-center justify-end gap-1 mt-1">
                          <p className="text-xs text-white/70">10:35</p>
                          <CheckCheck className="h-3 w-3 text-white/70" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="max-w-xs bg-muted rounded-2xl rounded-bl-md px-4 py-2">
                        <p className="text-sm">Perfeito! Pode retirar amanhã às 9h</p>
                        <p className="text-xs text-muted-foreground mt-1">10:40</p>
                      </div>
                    </div>
                  </div>

                  {/* Input */}
                  <div className="border-t p-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Digite sua mensagem..."
                        className="flex-1 rounded-xl border-0 bg-muted px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white hover:bg-primary/90">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted mx-auto">
                      <span className="text-2xl">💬</span>
                    </div>
                    <h3 className="text-lg font-semibold">Selecione uma conversa</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Escolha uma conversa para ver as mensagens
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
