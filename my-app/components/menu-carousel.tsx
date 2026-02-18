"use client"

import { useState, useEffect, useCallback, useRef } from "react"
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
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const totalItems = items.length || 1

  const handleNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % totalItems)
    setTimeout(() => setIsAnimating(false), 600)
  }, [isAnimating, totalItems])

  const handlePrev = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems)
    setTimeout(() => setIsAnimating(false), 600)
  }, [isAnimating, totalItems])

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === currentIndex) return
      setIsAnimating(true)
      setCurrentIndex(index)
      setTimeout(() => setIsAnimating(false), 600)
    },
    [currentIndex, isAnimating],
  )

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(timer)
  }, [handleNext])

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null
    touchEndX.current = null
  }

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = event.changedTouches[0]?.clientX ?? null
  }

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return

    const swipeDistance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 40

    if (Math.abs(swipeDistance) < minSwipeDistance) return

    if (swipeDistance > 0) {
      handleNext()
    } else {
      handlePrev()
    }
  }

  const onTapCarousel = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const tapX = event.clientX - rect.left
    const isLeftSide = tapX < rect.width / 2

    // Regra solicitada: esquerda = próxima, direita = anterior
    if (isLeftSide) {
      handleNext()
    } else {
      handlePrev()
    }
  }

  return (
    <div className="relative mx-auto max-w-sm md:max-w-md lg:max-w-lg">
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-casa-surface shadow-xl border border-border/50"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onClick={onTapCarousel}
      >
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
                  <>
                    <div className="absolute inset-0 bg-black/10" />
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                      className="object-cover"
                      style={{ objectPosition: "center" }}
                      priority={index === currentIndex}
                    />
                  </>
                ) : (
                  <div className="h-full w-full bg-casa-background flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto mb-4 bg-casa-secondary/20 rounded-full flex items-center justify-center">
                        <span className="text-4xl">🍰</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60",
            )}
            aria-label={`Ir para item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
