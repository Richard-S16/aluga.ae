// Mock data for Aluga.ae demo

export interface User {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  location: string;
  memberSince: string;
  verified: boolean;
  bio: string;
  itemsCount: number;
  rentalsCount: number;
}

export interface Item {
  id: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  pricePerDay: number;
  pricePerWeek?: number;
  images: string[];
  owner: User;
  rating: number;
  reviewCount: number;
  location: string;
  distance: string;
  available: boolean;
  features: string[];
  rules: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  itemCount: number;
}

export interface Review {
  id: string;
  user: User;
  rating: number;
  comment: string;
  date: string;
  itemTitle?: string;
}

export interface Message {
  id: string;
  user: User;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  itemTitle: string;
  itemImage: string;
}

export interface Rental {
  id: string;
  item: Item;
  status: "pending" | "active" | "completed" | "cancelled";
  startDate: string;
  endDate: string;
  totalPrice: number;
}

// Mock Users
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Carlos Silva",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 4.9,
    reviewCount: 47,
    location: "Indaiatuba, SP",
    memberSince: "Março 2024",
    verified: true,
    bio: "Engenheiro civil apaixonado por ferramentas. Tenho diversas ferramentas profissionais que ficam paradas na garagem.",
    itemsCount: 12,
    rentalsCount: 89,
  },
  {
    id: "2",
    name: "Ana Oliveira",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 4.8,
    reviewCount: 32,
    location: "Campinas, SP",
    memberSince: "Janeiro 2024",
    verified: true,
    bio: "DIY lover! Adoro fazer projetos em casa e compartilhar minhas ferramentas.",
    itemsCount: 8,
    rentalsCount: 56,
  },
  {
    id: "3",
    name: "Roberto Mendes",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5.0,
    reviewCount: 28,
    location: "Indaiatuba, SP",
    memberSince: "Fevereiro 2024",
    verified: true,
    bio: "Marceneiro aposentado com ferramentas de qualidade para compartilhar.",
    itemsCount: 15,
    rentalsCount: 73,
  },
  {
    id: "4",
    name: "Mariana Costa",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 4.7,
    reviewCount: 19,
    location: "Salto, SP",
    memberSince: "Abril 2024",
    verified: true,
    bio: "Arquiteta com paixão por reformas e projetos residenciais.",
    itemsCount: 6,
    rentalsCount: 41,
  },
];

// Current user (logged in)
export const currentUser: User = {
  id: "current",
  name: "João Pedro",
  avatar: "https://freesvg.org/img/Male-Avatar.png",
  rating: 4.6,
  reviewCount: 8,
  location: "Indaiatuba, SP",
  memberSince: "Dezembro 2025",
  verified: true,
  bio: "Morador do centro de Indaiatuba, procurando ferramentas para pequenos projetos em casa.",
  itemsCount: 3,
  rentalsCount: 12,
};

// Mock Categories
export const categories: Category[] = [
  { id: "1", name: "Furadeiras", slug: "furadeiras", icon: "drill", itemCount: 45 },
  { id: "2", name: "Serras", slug: "serras", icon: "saw", itemCount: 32 },
  { id: "3", name: "Lixadeiras", slug: "lixadeiras", icon: "sander", itemCount: 28 },
  { id: "4", name: "Escadas", slug: "escadas", icon: "ladder", itemCount: 24 },
  { id: "5", name: "Lavadoras", slug: "lavadoras", icon: "droplets", itemCount: 19 },
  { id: "6", name: "Jardim", slug: "jardim", icon: "leaf", itemCount: 37 },
  { id: "7", name: "Compressores", slug: "compressores", icon: "wind", itemCount: 15 },
  { id: "8", name: "Soldas", slug: "soldas", icon: "flame", itemCount: 12 },
];

// Mock Items
export const mockItems: Item[] = [
  {
    id: "1",
    title: "Furadeira Bosch Professional GSB 13 RE",
    description: "Furadeira de impacto profissional Bosch com 650W de potência. Ideal para furar concreto, madeira e metal. Acompanha maleta e jogo de brocas. Equipamento em excelente estado, revisado recentemente.",
    category: "Furadeiras",
    categorySlug: "furadeiras",
    pricePerDay: 35,
    pricePerWeek: 180,
    images: [
      "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/lojaciau/catalog/citel-empresas/furadeira-de-impacto-1-2-pol-1100w-220v-gsb-24-2re-bosch-casa-do-soldador-01.jpg",
    ],
    owner: mockUsers[0],
    rating: 4.9,
    reviewCount: 23,
    location: "Centro, Indaiatuba",
    distance: "1.2 km",
    available: true,
    features: ["650W de potência", "Maleta incluída", "Jogo de brocas", "Cabo de 3m"],
    rules: ["Devolver limpa", "Não usar em chuva", "Devolver no prazo"],
  },
  {
    id: "2",
    title: "Serra Circular Makita 7¼\" 1800W",
    description: "Serra circular profissional Makita com disco de 7¼ polegadas e motor de 1800W. Corte preciso em madeira e derivados. Acompanha disco novo e guia de corte.",
    category: "Serras",
    categorySlug: "serras",
    pricePerDay: 55,
    pricePerWeek: 280,
    images: [
      "https://images.thdstatic.com/productImages/20d6a167-7d4a-4773-80a0-65dfe10d2aa4/svn/makita-circular-saws-5007f-64_600.jpg",
    ],
    owner: mockUsers[2],
    rating: 5.0,
    reviewCount: 18,
    location: "Jd. Paulista, Indaiatuba",
    distance: "2.5 km",
    available: true,
    features: ["1800W", "Disco 7¼\"", "Guia de corte", "Trava de segurança"],
    rules: ["Uso com EPI obrigatório", "Devolver limpa", "Cuidado com o disco"],
  },
  {
    id: "3",
    title: "Escada Extensível Alumínio 3x9 Degraus",
    description: "Escada extensível profissional em alumínio com 3 lances de 9 degraus cada. Alcança até 7 metros de altura. Leve e resistente, ideal para pinturas e manutenções em altura.",
    category: "Escadas",
    categorySlug: "escadas",
    pricePerDay: 40,
    pricePerWeek: 200,
    images: [
      "https://cdn.dooca.store/5/products/5926-2_620x620+fill_ffffff.jpg?v=1644406064&webp=0",
    ],
    owner: mockUsers[1],
    rating: 4.8,
    reviewCount: 31,
    location: "Campinas, SP",
    distance: "15 km",
    available: true,
    features: ["Alumínio leve", "Até 7m altura", "3 lances", "150kg capacidade"],
    rules: ["Não usar em superfície molhada", "Verificar travas", "Transporte amarrado"],
  },
  {
    id: "4",
    title: "Lavadora Alta Pressão Karcher K5",
    description: "Lavadora de alta pressão Karcher K5 Premium. 2100 PSI de pressão, ideal para lavar carros, pisos, muros e calçadas. Acompanha mangueira de 8m e bico regulável.",
    category: "Lavadoras",
    categorySlug: "lavadoras",
    pricePerDay: 60,
    pricePerWeek: 300,
    images: [
      "https://lojassommer.cdn.magazord.com.br/img/2023/12/produto/968/lav2000-principal.png?ims=fit-in/600x600/filters:fill(white)",
    ],
    owner: mockUsers[0],
    rating: 4.7,
    reviewCount: 42,
    location: "Centro, Indaiatuba",
    distance: "0.8 km",
    available: true,
    features: ["2100 PSI", "Mangueira 8m", "Bico regulável", "Reservatório detergente"],
    rules: ["Não usar água quente", "Esvaziar após uso", "Devolver seca"],
  },
  {
    id: "5",
    title: "Lixadeira Orbital DeWalt 1/4\"",
    description: "Lixadeira orbital profissional DeWalt com sistema de coleta de pó. Motor de 300W, ideal para acabamentos em madeira e preparação de superfícies para pintura.",
    category: "Lixadeiras",
    categorySlug: "lixadeiras",
    pricePerDay: 30,
    pricePerWeek: 150,
    images: [
      "https://valflex.vteximg.com.br/arquivos/ids/747182-1000-1000/00000346_1.jpg?v=638506970068830000",
    ],
    owner: mockUsers[3],
    rating: 4.6,
    reviewCount: 15,
    location: "Salto, SP",
    distance: "8 km",
    available: true,
    features: ["300W", "Coletor de pó", "Orbital", "Lixas inclusas"],
    rules: ["Usar máscara", "Não molhar", "Limpar coletor"],
  },
  {
    id: "6",
    title: "Cortador de Grama a Gasolina Honda",
    description: "Cortador de grama profissional Honda com motor a gasolina 4 tempos. Corte de 53cm, ideal para jardins médios e grandes. Fácil de operar e manter.",
    category: "Jardim",
    categorySlug: "jardim",
    pricePerDay: 70,
    pricePerWeek: 350,
    images: [
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop",
    ],
    owner: mockUsers[2],
    rating: 4.9,
    reviewCount: 27,
    location: "Jd. Paulista, Indaiatuba",
    distance: "2.8 km",
    available: false,
    features: ["Motor Honda 4T", "Corte 53cm", "Recolhedor", "Auto-propelido"],
    rules: ["Devolver com tanque cheio", "Limpar após uso", "Verificar óleo"],
  },
  {
    id: "7",
    title: "Compressor de Ar Schulz 100L",
    description: "Compressor de ar Schulz Pratic Air com tanque de 100 litros. 2HP de potência, ideal para pintura com pistola, calibrar pneus e uso geral em oficinas.",
    category: "Compressores",
    categorySlug: "compressores",
    pricePerDay: 80,
    pricePerWeek: 400,
    images: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop",
    ],
    owner: mockUsers[0],
    rating: 4.8,
    reviewCount: 19,
    location: "Centro, Indaiatuba",
    distance: "1.5 km",
    available: true,
    features: ["100 litros", "2HP", "Bivolt", "Pistola inclusa"],
    rules: ["Drenar água após uso", "Não exceder pressão", "Verificar óleo"],
  },
  {
    id: "8",
    title: "Parafusadeira a Bateria Makita 18V",
    description: "Parafusadeira/furadeira sem fio Makita com bateria de 18V e 3Ah. Duas baterias inclusas com carregador rápido. Ideal para montagem de móveis e pequenos reparos.",
    category: "Furadeiras",
    categorySlug: "furadeiras",
    pricePerDay: 45,
    pricePerWeek: 220,
    images: [
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=600&fit=crop",
    ],
    owner: mockUsers[1],
    rating: 4.9,
    reviewCount: 35,
    location: "Campinas, SP",
    distance: "12 km",
    available: true,
    features: ["18V", "2 baterias", "Carregador rápido", "Maleta"],
    rules: ["Carregar antes de devolver", "Não molhar", "Cuidado com quedas"],
  },
];

// Mock Reviews
export const mockReviews: Review[] = [
  {
    id: "1",
    user: mockUsers[1],
    rating: 5,
    comment: "Ferramenta em perfeito estado! Carlos foi muito atencioso e a furadeira funcionou perfeitamente. Super recomendo!",
    date: "25 Jan 2026",
    itemTitle: "Furadeira Bosch Professional",
  },
  {
    id: "2",
    user: mockUsers[3],
    rating: 5,
    comment: "Excelente experiência! A serra estava afiada e cortou tudo que precisei. Roberto é muito profissional.",
    date: "20 Jan 2026",
    itemTitle: "Serra Circular Makita",
  },
  {
    id: "3",
    user: mockUsers[0],
    rating: 4,
    comment: "Escada muito boa, chegou na hora combinada. Só achei um pouco pesada para carregar sozinho.",
    date: "15 Jan 2026",
    itemTitle: "Escada Extensível",
  },
  {
    id: "4",
    user: mockUsers[2],
    rating: 5,
    comment: "A lavadora é potente demais! Lavei toda a garagem e o carro em uma tarde. Vou alugar de novo com certeza.",
    date: "10 Jan 2026",
    itemTitle: "Lavadora Karcher K5",
  },
];

// Mock Messages
export const mockMessages: Message[] = [
  {
    id: "1",
    user: mockUsers[0],
    lastMessage: "Perfeito! Pode retirar amanhã às 9h",
    timestamp: "Há 2 horas",
    unread: true,
    itemTitle: "Furadeira Bosch Professional",
    itemImage: "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/lojaciau/catalog/citel-empresas/furadeira-de-impacto-1-2-pol-1100w-220v-gsb-24-2re-bosch-casa-do-soldador-01.jpg",
  },
  {
    id: "2",
    user: mockUsers[2],
    lastMessage: "A serra está disponível na próxima semana",
    timestamp: "Ontem",
    unread: false,
    itemTitle: "Serra Circular Makita",
    itemImage: "https://images.thdstatic.com/productImages/20d6a167-7d4a-4773-80a0-65dfe10d2aa4/svn/makita-circular-saws-5007f-64_600.jpg",
  },
  {
    id: "3",
    user: mockUsers[1],
    lastMessage: "Obrigado pela avaliação! 😊",
    timestamp: "3 dias atrás",
    unread: false,
    itemTitle: "Escada Extensível",
    itemImage: "https://cdn.dooca.store/5/products/5926-2_620x620+fill_ffffff.jpg?v=1644406064&webp=0",
  },
];

// Mock Rentals for current user
export const mockRentals: Rental[] = [
  {
    id: "1",
    item: mockItems[0],
    status: "active",
    startDate: "01 Fev 2026",
    endDate: "03 Fev 2026",
    totalPrice: 105,
  },
  {
    id: "2",
    item: mockItems[3],
    status: "completed",
    startDate: "20 Jan 2026",
    endDate: "21 Jan 2026",
    totalPrice: 60,
  },
  {
    id: "3",
    item: mockItems[2],
    status: "completed",
    startDate: "10 Jan 2026",
    endDate: "12 Jan 2026",
    totalPrice: 120,
  },
];

// Current user's items (as owner)
export const myItems: Item[] = [
  {
    id: "my1",
    title: "Furadeira Black & Decker 550W",
    description: "Furadeira de impacto Black & Decker para uso doméstico. Ótima para pequenos trabalhos.",
    category: "Furadeiras",
    categorySlug: "furadeiras",
    pricePerDay: 25,
    pricePerWeek: 120,
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop",
    ],
    owner: currentUser,
    rating: 4.5,
    reviewCount: 5,
    location: "Centro, Indaiatuba",
    distance: "0 km",
    available: true,
    features: ["550W", "Maleta incluída"],
    rules: ["Devolver limpa"],
  },
  {
    id: "my2",
    title: "Escada 5 Degraus Alumínio",
    description: "Escada doméstica de alumínio com 5 degraus. Perfeita para uso interno.",
    category: "Escadas",
    categorySlug: "escadas",
    pricePerDay: 20,
    pricePerWeek: 100,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    ],
    owner: currentUser,
    rating: 4.8,
    reviewCount: 3,
    location: "Centro, Indaiatuba",
    distance: "0 km",
    available: true,
    features: ["Alumínio", "5 degraus", "Antiderrapante"],
    rules: ["Cuidado com peso máximo 120kg"],
  },
];
