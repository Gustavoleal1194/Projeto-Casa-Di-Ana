import type { MenuCarouselItem } from "@/components/menu-carousel"
import type { MenuSection } from "@/components/menu-grid"

export const bakeryCarouselItems: MenuCarouselItem[] = [
  {
    id: 101,
    name: "Pão Multi Grãos",
    description: "Mistura de grãos selecionados, rico em fibras e sabor único.",
    price: "Médio R$ 36,00 | Grande R$ 42,00",
    category: "Pães Artesanais",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=1200&h=800&fit=crop&crop=center",
  },
  {
    id: 102,
    name: "Pão Rústico",
    description: "Fermentação natural, crosta dourada e miolo macio.",
    price: "R$ 30,00",
    category: "Pães Artesanais",
    image: "https://www.receitasedicasdochef.com.br/wp-content/uploads/2021/10/Pao-Rustico-de-Azeitonas.webp",
  },
  {
    id: 103,
    name: "Ciabatta",
    description: "Textura leve e alveolos generosos, perfeito para acompanhar.",
    price: "R$ 8,00",
    category: "Pães Artesanais",
    image: "https://www.comidaereceitas.com.br/wp-content/uploads/2014/02/Ciabatta-pao-branco-italiano1-780x519.jpg",
  },
  {
    id: 104,
    name: "Pão Brioche",
    description: "Massa amanteigada e fofa, doce e delicado.",
    price: "Médio R$ 30,00 | Grande R$ 36,00",
    category: "Pães Artesanais",
    image: "https://cknj.com.br/teste/wp-content/uploads/2022/09/Pao-Brioche-01-1920x1442.jpg",
  },
]

export const bakerySections: MenuSection[] = [
  {
    id: "paes-artesanais",
    title: "Pães Artesanais",
    description: "Produção diária com fermentação natural e ingredientes selecionados.",
    items: [
      {
        id: 201,
        name: "Pão Multi Grãos",
        description: "Mistura de grãos selecionados, rico em fibras e sabor único.",
        price: "Médio R$ 36,00 | Grande R$ 42,00",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=900&h=600&fit=crop&crop=center",
      },
      {
        id: 202,
        name: "Pão Rústico",
        description: "Fermentação natural, crosta dourada e miolo macio.",
        price: "R$ 30,00",
        image: "https://www.receitasedicasdochef.com.br/wp-content/uploads/2021/10/Pao-Rustico-de-Azeitonas.webp",
      },
      {
        id: 203,
        name: "Ciabatta",
        description: "Textura leve e alveolos generosos, perfeito para acompanhar.",
        price: "R$ 8,00",
        image: "https://www.comidaereceitas.com.br/wp-content/uploads/2014/02/Ciabatta-pao-branco-italiano1-780x519.jpg",
      },
      {
        id: 204,
        name: "Pão Brioche",
        description: "Massa amanteigada e fofa, doce e delicado.",
        price: "Médio R$ 30,00 | Grande R$ 36,00",
        image: "https://cknj.com.br/teste/wp-content/uploads/2022/09/Pao-Brioche-01-1920x1442.jpg",
      },
    ],
  },
]


