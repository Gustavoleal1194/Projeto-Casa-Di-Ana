import type { MenuItem } from "./menu-sections"

// Produtos rotativos do Menu do Dia
// Estes produtos não estão no cardápio completo ou são servidos de forma rotativa
export const menuDoDiaItems: MenuItem[] = [
  {
    id: 1001,
    name: "Pão Especial do Chef",
    description: "Pão artesanal com ingredientes especiais do dia, preparado com fermentação natural.",
    price: "R$ 15,00",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop&crop=center",
    tag: "Especial do Dia"
  },
  {
    id: 1002,
    name: "Torta Salgada da Semana",
    description: "Torta salgada preparada especialmente para esta semana, ingredientes frescos e selecionados.",
    price: "R$ 18,00",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&h=600&fit=crop&crop=center",
    tag: "Rotativo"
  },
  {
    id: 1003,
    name: "Doce da Temporada",
    description: "Doce especial preparado com ingredientes da temporada, receita exclusiva da casa.",
    price: "R$ 22,00",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop&crop=center",
    tag: "Temporada"
  },
  {
    id: 1004,
    name: "Bebida Especial do Dia",
    description: "Bebida preparada especialmente para hoje, combinação única de sabores.",
    price: "R$ 16,00",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop&crop=center",
    tag: "Especial"
  },
  {
    id: 1005,
    name: "Lanche do Chef",
    description: "Lanche especial preparado pelo chef, ingredientes premium e combinação única.",
    price: "R$ 28,00",
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=800&h=600&fit=crop&crop=center",
    tag: "Chef"
  },
  {
    id: 1006,
    name: "Sobremesa Surpresa",
    description: "Sobremesa especial que muda diariamente, sempre uma surpresa deliciosa.",
    price: "R$ 20,00",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=600&fit=crop&crop=center",
    tag: "Surpresa"
  }
]
