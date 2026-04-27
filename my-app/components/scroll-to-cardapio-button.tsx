"use client"

import { Button } from "@/components/ui/button"

type ScrollToCardapioButtonProps = {
  className?: string
}

export function ScrollToCardapioButton({ className }: ScrollToCardapioButtonProps) {
  const handleClick = () => {
    const target = document.getElementById("cardapio-completo")
    if (!target) return

    target.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", "#cardapio-completo")
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className={className}
      onClick={handleClick}
    >
      Menu completo
    </Button>
  )
}
