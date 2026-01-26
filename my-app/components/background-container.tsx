"use client"

import Image from "next/image"

export function BackgroundContainer() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      <div className="relative w-full h-full">
        {/* Mobile Image */}
        <div className="md:hidden relative w-full h-full">
          <Image
            src="/images/Fachada.jpg"
            alt="Casa di Ana - Fachada"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
            style={{
              objectFit: "cover",
              objectPosition: "center 30%",
            }}
          />
        </div>
        
        {/* Desktop Image */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="/images/Fachada.jpg"
            alt="Casa di Ana - Fachada"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
            style={{
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        </div>
      </div>
    </div>
  )
}
