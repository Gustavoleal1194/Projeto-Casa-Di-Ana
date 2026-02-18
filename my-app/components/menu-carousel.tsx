"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export type MenuCarouselItem = {
  id: number
  name: string
  description: string
  price: string
  category: string
  image?: string
  href?: string
}

const defaultMenuItems: MenuCarouselItem[] = [
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
    category: "Bebidas",
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
]

type MenuCarouselProps = {
  items?: MenuCarouselItem[]
}

export function MenuCarousel({ items = defaultMenuItems }: MenuCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const totalItems = items.length || 1

  const handleNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % totalItems)
    setTimeout(() => setIsAnimating(false), 600)
  }, [isAnimating, totalItems])

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(timer)
  }, [handleNext])

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-casa-surface shadow-xl border border-border/50">
        {items.map((item, index) => {
          return (
            <div
              key={item.id}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-in-out",
                index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none",
              )}
            >
              <div className="absolute inset-0">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                    className="object-cover"
                    style={{ objectPosition: "center" }}
                    priority={index === currentIndex}
                  />
                ) : (
                  <div className="h-full w-full bg-casa-background flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto mb-4 bg-casa-secondary/20 rounded-full flex items-center justify-center">
                        <span className="text-4xl">🍰</span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-casa-primary/90 via-casa-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="mb-1 font-serif text-2xl md:text-3xl font-light text-balance text-white">
                    {item.name}
                  </h3>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
