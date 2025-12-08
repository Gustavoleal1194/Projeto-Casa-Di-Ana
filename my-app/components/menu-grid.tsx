"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { defaultMenuSections, type MenuItem, type MenuSection } from "@/data/menu-sections"

// Re-exportar tipos para compatibilidade
export type { MenuItem, MenuSection }

// Dados movidos para @/data/menu-sections.ts

type MenuGridProps = {
  sections?: MenuSection[]
}

export function MenuGrid({ sections = defaultMenuSections }: MenuGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [activeSectionId, setActiveSectionId] = useState(sections[0]?.id ?? "")

  const currentSection = sections.find((section) => section.id === activeSectionId) ?? sections[0]

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pb-2">
        {sections.map((section) => {
          const isActive = section.id === activeSectionId
          return (
            <button
              key={section.id}
              onClick={() => setActiveSectionId(section.id)}
              className={cn(
                "whitespace-nowrap px-3 py-1.5 rounded-full border transition-colors font-serif text-xs md:text-sm",
                isActive
                  ? "bg-casa-secondary text-white border-casa-secondary shadow-md"
                  : "bg-white/80 text-casa-primary border-border hover:bg-casa-secondary/20",
              )}
            >
              {section.title}
            </button>
          )
        })}
      </div>

      {currentSection && (
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h3 className="font-serif text-3xl text-casa-primary">{currentSection.title}</h3>
            <p className="text-casa-primary/70 font-body max-w-2xl mx-auto">{currentSection.description}</p>
          </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentSection.items.map((item) => (
        <Card
          key={item.id}
          className="group overflow-hidden transition-all duration-300 hover:shadow-xl casa-card hover:scale-105"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
                <div className="relative w-full h-64 overflow-hidden rounded-xl">
                  <Image
                src={item.image}
                alt={item.name}
                    fill
                className={cn(
                      "object-cover transition-all duration-700",
                      hoveredId === item.id ? "scale-105" : "scale-100"
                    )}
                  />

            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-casa-primary/80 via-casa-primary/20 to-transparent transition-opacity duration-300",
                      hoveredId === item.id ? "opacity-100" : "opacity-0"
                    )}
                  />

                  {item.tag && (
                    <Badge className="absolute left-3 top-3 bg-casa-secondary/90 text-white font-serif" variant="casa">
                      {item.tag}
            </Badge>
                  )}
          </div>

          <CardContent className="p-5">
                  <h4 className="mb-2 font-serif text-lg font-semibold text-balance text-casa-primary">{item.name}</h4>
                  <p className="mb-3 text-pretty text-sm leading-relaxed text-casa-primary/70 font-body">
                    {item.description}
                  </p>
            <p className="text-lg font-serif font-semibold text-casa-secondary">{item.price}</p>
          </CardContent>
        </Card>
      ))}
          </div>
        </section>
      )}
    </div>
  )
}
