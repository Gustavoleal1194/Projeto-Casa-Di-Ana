"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const allMenuItems = [
  {
    id: 1,
    name: "Pão Artesanal da Casa",
    description: "Pão de fermentação natural com farinha orgânica, crosta dourada e miolo macio",
    price: "R$ 12,00",
    category: "Pães Artesanais",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Torta de Maçã da Vovó",
    description: "Massa folhada caseira com maçãs caramelizadas e canela, receita de família",
    price: "R$ 18,00",
    category: "Tortas Tradicionais",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&h=600&fit=crop&crop=center",
  },
  {
    id: 3,
    name: "Café Especial da Casa",
    description: "Blend exclusivo torrado na hora, com notas de chocolate e caramelo",
    price: "R$ 8,00",
    category: "Cafés Especiais",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop&crop=center",
  },
  {
    id: 4,
    name: "Bolo de Chocolate da Ana",
    description: "Receita secreta da Ana com chocolate belga e recheio de brigadeiro",
    price: "R$ 22,00",
    category: "Bolos da Casa",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=600&fit=crop&crop=center",
  },
  {
    id: 5,
    name: "Pão de Queijo Mineiro",
    description: "Pão de queijo tradicional com queijo meia cura, servido quentinho do forno",
    price: "R$ 10,00",
    category: "Salgados da Casa",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop&crop=center",
  },
  {
    id: 6,
    name: "Sanduíche da Casa",
    description: "Pão artesanal com peito de peru, queijo brie, rúcula e geleia de figo",
    price: "R$ 24,00",
    category: "Sanduíches",
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=800&h=600&fit=crop&crop=center",
  },
  {
    id: 7,
    name: "Brownie da Ana",
    description: "Brownie úmido com chocolate belga e nozes, receita especial da casa",
    price: "R$ 14,00",
    category: "Doces da Casa",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=600&fit=crop&crop=center",
  },
  {
    id: 8,
    name: "Biscoitos da Vovó",
    description: "Biscoitos amanteigados nos sabores canela, baunilha e chocolate",
    price: "R$ 16,00",
    category: "Doces da Casa",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=600&fit=crop&crop=center",
  },
  {
    id: 9,
    name: "Café com Leite Especial",
    description: "Café da casa com leite vaporizado e toque de baunilha natural",
    price: "R$ 10,00",
    category: "Cafés Especiais",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop&crop=center",
  },
  {
    id: 10,
    name: "Quiche da Casa",
    description: "Quiche caseira com bacon, queijo e creme fresco, feita diariamente",
    price: "R$ 18,00",
    category: "Salgados da Casa",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop&crop=center",
  },
  {
    id: 11,
    name: "Éclair da Ana",
    description: "Massa choux recheada com creme de confeiteiro e chocolate meio amargo",
    price: "R$ 16,00",
    category: "Confeitaria da Casa",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=600&fit=crop&crop=center",
  },
]

export function MenuGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allMenuItems.map((item) => (
        <Card
          key={item.id}
          className="group overflow-hidden transition-all duration-300 hover:shadow-xl casa-card hover:scale-105"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className={cn(
                  "h-full w-full object-cover transition-all duration-700",
                  hoveredId === item.id ? "scale-110" : "scale-100",
                )}
              />
            ) : (
              <div className="h-full w-full bg-casa-background flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-3 bg-casa-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">
                      {item.category === "Pães Artesanais" ? "🥖" :
                        item.category === "Tortas Tradicionais" ? "🥧" :
                          item.category === "Cafés Especiais" ? "☕" :
                            item.category === "Bolos da Casa" ? "🍰" :
                              item.category === "Salgados da Casa" ? "🥐" :
                                item.category === "Sanduíches" ? "🥪" :
                                  item.category === "Doces da Casa" ? "🍪" :
                                    item.category === "Confeitaria da Casa" ? "🧁" : "🍽️"}
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-casa-primary/80 via-casa-primary/20 to-transparent transition-opacity duration-300",
                hoveredId === item.id ? "opacity-100" : "opacity-0",
              )}
            />
            <Badge
              className="absolute right-3 top-3 bg-casa-secondary/90 text-xs text-white backdrop-blur-sm font-serif"
              variant="casa"
            >
              {item.category}
            </Badge>
          </div>
          <CardContent className="p-5">
            <h3 className="mb-2 font-serif text-lg font-semibold text-balance text-casa-primary">{item.name}</h3>
            <p className="mb-3 text-pretty text-sm leading-relaxed text-casa-primary/70 font-body">{item.description}</p>
            <p className="text-lg font-serif font-semibold text-casa-secondary">{item.price}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
