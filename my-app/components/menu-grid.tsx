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
                  ? "bg-white text-[#5e6979] border-white shadow-md"
                  : "bg-white/20 text-white border-white/40 hover:bg-white/30",
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
            <h3 className="font-serif text-3xl text-white">{currentSection.title}</h3>
            <p className="text-white/90 font-body max-w-2xl mx-auto">{currentSection.description}</p>
          </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentSection.items.map((item) => (
        <Card
          key={item.id}
          className="group overflow-hidden transition-all duration-300 hover:shadow-xl bg-white hover:scale-105"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
                <div className="relative w-full h-64 overflow-hidden rounded-xl bg-casa-background">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover blur-2xl scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    aria-hidden="true"
                  />
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain w-full h-full transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-[#5e6979]/80 via-[#5e6979]/20 to-transparent transition-opacity duration-300",
                      hoveredId === item.id ? "opacity-100" : "opacity-0"
                    )}
                  />

                  {item.tag && (
                    <Badge className="absolute left-3 top-3 bg-white/90 text-[#5e6979] font-serif border-white" variant="casa-outline">
                      {item.tag}
            </Badge>
                  )}
          </div>

          <CardContent className="p-5">
                  <h4 className="mb-2 font-serif text-lg font-semibold text-balance text-[#5e6979]">{item.name}</h4>
                  <p className="mb-3 text-pretty text-sm leading-relaxed text-[#5e6979]/70 font-body">
                    {item.description}
                  </p>
            <p className="text-lg font-serif font-semibold text-[#5e6979]">{item.price}</p>
          </CardContent>
        </Card>
      ))}
          </div>
        </section>
      )}
    </div>
  )
}
