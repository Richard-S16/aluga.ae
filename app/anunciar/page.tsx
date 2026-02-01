"use client";

import { Header } from "@/components/layout/header";
import { BottomNav } from "@/components/layout/bottom-nav";
import { Sidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/lib/mock-data";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Camera, 
  Plus, 
  X, 
  ChevronRight,
  Info,
  DollarSign,
  MapPin,
  Calendar,
  FileText,
  CheckCircle2
} from "lucide-react";

const steps = [
  { id: 1, title: "Fotos", icon: Camera },
  { id: 2, title: "Detalhes", icon: FileText },
  { id: 3, title: "Preço", icon: DollarSign },
  { id: 4, title: "Revisão", icon: CheckCircle2 },
];

export default function AnunciarPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [images, setImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    pricePerDay: "",
    pricePerWeek: "",
    location: "Indaiatuba, SP",
    features: [""],
    rules: [""],
  });

  // Mock image upload
  const handleAddImage = () => {
    const mockImages = [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop",
    ];
    if (images.length < 8) {
      setImages([...images, mockImages[images.length % mockImages.length]]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ""] });
  };

  const addRule = () => {
    setFormData({ ...formData, rules: [...formData.rules, ""] });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      
      <main className="pt-16 pb-20 md:pb-8 md:pl-64">
        <div className="mx-auto max-w-2xl px-4 py-6">
          {/* Header */}
          <section className="mb-6">
            <h1 className="text-2xl font-bold">Anunciar Item</h1>
            <p className="text-muted-foreground">Cadastre um novo item para aluguel</p>
          </section>

          {/* Steps Progress */}
          <section className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, idx) => (
                <div key={step.id} className="flex items-center">
                  <button
                    onClick={() => setCurrentStep(step.id)}
                    className={cn(
                      "flex flex-col items-center gap-1",
                      currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors",
                        currentStep >= step.id
                          ? "border-primary bg-primary text-white"
                          : "border-muted-foreground"
                      )}
                    >
                      <step.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-medium hidden sm:inline">{step.title}</span>
                  </button>
                  {idx < steps.length - 1 && (
                    <div
                      className={cn(
                        "h-0.5 w-8 sm:w-16 mx-2",
                        currentStep > step.id ? "bg-primary" : "bg-muted"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Step 1: Photos */}
          {currentStep === 1 && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-2">Adicione fotos do item</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Adicione até 8 fotos. A primeira será a foto principal.
              </p>

              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                {images.map((img, idx) => (
                  <div key={idx} className="relative aspect-square">
                    <img
                      src={img}
                      alt={`Foto ${idx + 1}`}
                      className="h-full w-full rounded-xl object-cover"
                    />
                    <button
                      onClick={() => handleRemoveImage(idx)}
                      className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-white"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    {idx === 0 && (
                      <Badge className="absolute bottom-2 left-2 text-xs">Principal</Badge>
                    )}
                  </div>
                ))}
                {images.length < 8 && (
                  <button
                    onClick={handleAddImage}
                    className="aspect-square rounded-xl border-2 border-dashed border-muted-foreground/50 flex flex-col items-center justify-center gap-2 hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    <Plus className="h-6 w-6 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Adicionar</span>
                  </button>
                )}
              </div>

              <div className="mt-6 flex justify-end">
                <Button onClick={() => setCurrentStep(2)} disabled={images.length === 0}>
                  Próximo
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Card>
          )}

          {/* Step 2: Details */}
          {currentStep === 2 && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6">Detalhes do item</h2>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Título do anúncio *</label>
                  <Input
                    placeholder="Ex: Furadeira Bosch Professional 650W"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Categoria *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full h-12 rounded-xl border px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecione uma categoria</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.slug}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Descrição *</label>
                  <textarea
                    placeholder="Descreva seu item em detalhes: estado de conservação, marca, modelo, o que está incluso..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Características</label>
                  <div className="space-y-2">
                    {formData.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-2">
                        <Input
                          placeholder="Ex: 650W de potência"
                          value={feature}
                          onChange={(e) => {
                            const newFeatures = [...formData.features];
                            newFeatures[idx] = e.target.value;
                            setFormData({ ...formData, features: newFeatures });
                          }}
                        />
                        {formData.features.length > 1 && (
                          <button
                            onClick={() => {
                              setFormData({
                                ...formData,
                                features: formData.features.filter((_, i) => i !== idx),
                              });
                            }}
                            className="p-3 text-muted-foreground hover:text-destructive"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        )}
                      </div>
                    ))}
                    <Button variant="outline" size="sm" onClick={addFeature}>
                      <Plus className="h-4 w-4 mr-2" />
                      Adicionar característica
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Regras de uso</label>
                  <div className="space-y-2">
                    {formData.rules.map((rule, idx) => (
                      <div key={idx} className="flex gap-2">
                        <Input
                          placeholder="Ex: Devolver limpo"
                          value={rule}
                          onChange={(e) => {
                            const newRules = [...formData.rules];
                            newRules[idx] = e.target.value;
                            setFormData({ ...formData, rules: newRules });
                          }}
                        />
                        {formData.rules.length > 1 && (
                          <button
                            onClick={() => {
                              setFormData({
                                ...formData,
                                rules: formData.rules.filter((_, i) => i !== idx),
                              });
                            }}
                            className="p-3 text-muted-foreground hover:text-destructive"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        )}
                      </div>
                    ))}
                    <Button variant="outline" size="sm" onClick={addRule}>
                      <Plus className="h-4 w-4 mr-2" />
                      Adicionar regra
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>
                  Voltar
                </Button>
                <Button onClick={() => setCurrentStep(3)} disabled={!formData.title || !formData.category}>
                  Próximo
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Card>
          )}

          {/* Step 3: Pricing */}
          {currentStep === 3 && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6">Defina o preço</h2>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Preço por dia *</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                    <Input
                      type="number"
                      placeholder="0,00"
                      value={formData.pricePerDay}
                      onChange={(e) => setFormData({ ...formData, pricePerDay: e.target.value })}
                      className="pl-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Preço por semana (opcional)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">R$</span>
                    <Input
                      type="number"
                      placeholder="0,00"
                      value={formData.pricePerWeek}
                      onChange={(e) => setFormData({ ...formData, pricePerWeek: e.target.value })}
                      className="pl-12"
                    />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Ofereça um desconto para aluguéis mais longos
                  </p>
                </div>

                <div className="rounded-xl bg-muted/50 p-4">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium">Como funciona a cobrança</p>
                      <p className="text-muted-foreground mt-1">
                        A Aluga.ae cobra uma taxa de serviço de 10% sobre o valor do aluguel. 
                        Você receberá o pagamento após a devolução confirmada do item.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Localização</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="pl-12"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(2)}>
                  Voltar
                </Button>
                <Button onClick={() => setCurrentStep(4)} disabled={!formData.pricePerDay}>
                  Próximo
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Card>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6">Revise seu anúncio</h2>

              {/* Preview */}
              <div className="space-y-6">
                {/* Images */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Fotos</h3>
                  <div className="flex gap-2 overflow-x-auto no-scrollbar">
                    {images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Foto ${idx + 1}`}
                        className="h-20 w-20 rounded-xl object-cover flex-shrink-0"
                      />
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Título</h3>
                    <p>{formData.title || "—"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Categoria</h3>
                    <p>{categories.find(c => c.slug === formData.category)?.name || "—"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Descrição</h3>
                    <p className="text-sm">{formData.description || "—"}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="rounded-xl bg-primary/10 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Preço por dia</span>
                    <span className="text-xl font-bold text-primary">
                      R$ {formData.pricePerDay || "0"}
                    </span>
                  </div>
                  {formData.pricePerWeek && (
                    <div className="flex items-center justify-between mt-2 text-sm">
                      <span>Preço por semana</span>
                      <span className="font-medium">R$ {formData.pricePerWeek}</span>
                    </div>
                  )}
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-amber-800">
                      <p className="font-medium">Seu anúncio será revisado</p>
                      <p className="mt-1">
                        Após publicar, nossa equipe irá revisar seu anúncio antes de aparecer nas buscas. 
                        Isso geralmente leva até 24 horas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(3)}>
                  Voltar
                </Button>
                <Button className="gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Publicar anúncio
                </Button>
              </div>
            </Card>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
