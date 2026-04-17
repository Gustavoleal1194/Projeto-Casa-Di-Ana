import type { MenuCarouselItem } from "@/components/menu-carousel"
import type { MenuSection } from "@/components/menu-grid"

export const bakeryCarouselItems: MenuCarouselItem[] = [
  {
    id: 101,
    name: "Pão Multi Grãos",
    description: "Mistura de grãos selecionados, rico em fibras e sabor único.",
    price: "Médio R$ 36,00 | Grande R$ 42,00",
    category: "Pães Artesanais",
    image: "/images/Comidas/Multigrãos.jpeg",
  },
  {
    id: 102,
    name: "Pão Rústico",
    description: "Fermentação natural, crosta dourada e miolo macio.",
    price: "R$ 30,00",
    category: "Pães Artesanais",
    image: "/images/Comidas/Rustico.jpeg",
  },
  {
    id: 103,
    name: "Ciabatta",
    description: "Textura leve e alveolos generosos, perfeito para acompanhar.",
    price: "R$ 8,00",
    category: "Pães Artesanais",
    image: "/images/Comidas/ciabata.jpeg",
  },
  {
    id: 105,
    name: "Pão de Fubá",
    description: "Pão de longa fermentação, de fubá com erva doce",
    price: "Médio R$ 30,00 | Grande R$ 40,00",
    category: "Pães Artesanais",
    image: "/images/Comidas/Fuba.jpeg",
  },
  {
    id: 104,
    name: "Pão Brioche",
    description: "Massa amanteigada e fofa, doce e delicado.",
    price: "Médio R$ 30,00 | Grande R$ 40,00",
    category: "Pães Artesanais",
    image: "/images/Comidas/BriocheDaCasa.jpeg",
  },
  {
    id: 106,
    name: "Baguete Francesa",
    description: "Baguete artesanal de fermentação natural, crocante por fora e macia por dentro.",
    price: "R$ 16,00",
    category: "Pães Artesanais",
    image: "/images/Comidas/BagueteFrancesa.jpeg",
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
        image: "/images/Comidas/Multigrãos.jpeg",
      },
      {
        id: 202,
        name: "Pão Rústico",
        description: "Fermentação natural, crosta dourada e miolo macio.",
        price: "R$ 30,00",
        image: "/images/Comidas/Rustico.jpeg",
      },
      {
        id: 203,
        name: "Ciabatta",
        description: "Textura leve e alveolos generosos, perfeito para acompanhar.",
        price: "R$ 8,00",
        image: "/images/Comidas/ciabata.jpeg",
      },
      {
        id: 205,
        name: "Pão de Fubá",
        description: "Pão de longa fermentação, de fubá com erva doce",
        price: "Médio R$ 30,00 | Grande R$ 40,00",
        image: "/images/Comidas/Fuba.jpeg",
      },
      {
        id: 204,
        name: "Pão Brioche",
        description: "Massa amanteigada e fofa, doce e delicado.",
        price: "Médio R$ 30,00 | Grande R$ 40,00",
        image: "/images/Comidas/BriocheDaCasa.jpeg",
      },
      {
        id: 206,
        name: "Baguete Francesa",
        description: "Baguete artesanal de fermentação natural, crocante por fora e macia por dentro.",
        price: "R$ 25,00",
        image: "/images/Comidas/BagueteFrancesa.jpeg",
      },
    ],
  },
]


