"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
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

  const handleHashClick = useCallback((event: React.MouseEvent, href?: string) => {
    if (!href || !href.startsWith("#")) return
    event.preventDefault()
    const target = document.getElementById(href.slice(1))
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    if (window.location.hash !== href) {
      window.history.replaceState(null, "", href)
    }
  }, [])

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

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-casa-surface shadow-xl border border-border/50">
        {items.map((item, index) => {
          const isHashLink = item.href?.startsWith("#")
          const Wrapper = item.href ? (isHashLink ? "a" : Link) : "div"
          const wrapperProps = item.href ? { href: item.href } : {}

          return (
            <div
              key={item.id}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-in-out",
                index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none",
              )}
            >
              <Wrapper
                {...wrapperProps}
                className={cn(
                  "absolute inset-0",
                  item.href ? "cursor-pointer" : ""
                )}
                onClick={(event: React.MouseEvent) => handleHashClick(event, item.href)}
              >
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
                    <span className="text-4xl">
                      {item.category === "Pães Artesanais" ? "🥖" :
                        item.category === "Tortas Tradicionais" ? "🥧" :
                          item.category === "Bebidas" ? "☕" : "🍰"}
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
              </Wrapper>
            </div>
          )
        })}
      </div>

      <Button
        variant="casa-outline"
        size="icon"
        className="absolute left-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white text-[#5e6979] hover:text-[#5e6979] border-white shadow-md"
        onClick={handlePrev}
        disabled={isAnimating}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Item anterior</span>
      </Button>

      <Button
        variant="casa-outline"
        size="icon"
        className="absolute right-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white text-[#5e6979] hover:text-[#5e6979] border-white shadow-md"
        onClick={handleNext}
        disabled={isAnimating}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Próximo item</span>
      </Button>

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
