"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { MenuItem } from "@/data/menu-sections"

type MenuDoDiaGridProps = {
  items: MenuItem[]
}

export function MenuDoDiaGrid({ items }: MenuDoDiaGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card
          key={item.id}
          id={`menu-do-dia-item-${item.id}`}
          className="group overflow-hidden transition-all duration-300 hover:shadow-xl bg-white hover:scale-105"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="relative w-full h-64 overflow-hidden rounded-xl bg-casa-background">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className={cn(
                "object-contain transition-all duration-700",
                hoveredId === item.id ? "scale-105" : "scale-100"
              )}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-[#5e6979]/80 via-[#5e6979]/20 to-transparent transition-opacity duration-300",
                hoveredId === item.id ? "opacity-100" : "opacity-0"
              )}
            />

            {item.tag && (
              <Badge 
                className="absolute left-3 top-3 bg-white/90 text-[#5e6979] font-serif border-white" 
                variant="casa-outline"
              >
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
  )
}
