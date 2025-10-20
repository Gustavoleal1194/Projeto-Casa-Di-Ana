"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const menuItems = [
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
    "name": "Torta de Maçã da Vovó",
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
]

export function MenuCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(timer)
  }, [currentIndex])

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % menuItems.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 600)
  }

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-casa-surface shadow-xl border border-border/50">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "absolute inset-0 transition-all duration-700 ease-in-out",
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none",
            )}
          >
            {item.image ? (
              <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-casa-background flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-casa-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-4xl">
                      {item.category === "Pães Artesanais" ? "🥖" :
                        item.category === "Tortas Tradicionais" ? "🥧" :
                          item.category === "Cafés Especiais" ? "☕" : "🍰"}
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-casa-primary/90 via-casa-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="mb-3 inline-block rounded-full bg-casa-secondary px-3 py-1 text-xs font-serif font-medium text-white">
                {item.category}
              </span>
              <h3 className="mb-3 font-serif text-2xl md:text-3xl font-light text-balance text-white">{item.name}</h3>
              <p className="mb-4 text-pretty text-sm md:text-base leading-relaxed text-white/90 font-body max-w-2xl">{item.description}</p>
              <p className="text-2xl md:text-3xl font-serif font-semibold text-white">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="casa-outline"
        size="icon"
        className="absolute left-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-casa-surface/90 backdrop-blur-sm hover:bg-casa-secondary hover:text-white border-casa-secondary"
        onClick={handlePrev}
        disabled={isAnimating}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Item anterior</span>
      </Button>

      <Button
        variant="casa-outline"
        size="icon"
        className="absolute right-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-casa-surface/90 backdrop-blur-sm hover:bg-casa-secondary hover:text-white border-casa-secondary"
        onClick={handleNext}
        disabled={isAnimating}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Próximo item</span>
      </Button>

      <div className="mt-6 flex justify-center gap-2">
        {menuItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === currentIndex ? "w-8 bg-casa-secondary" : "w-2 bg-border hover:bg-casa-secondary/50",
            )}
            aria-label={`Ir para item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
