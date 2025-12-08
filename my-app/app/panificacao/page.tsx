import { Header } from "@/components/header"
import { MenuCarousel } from "@/components/menu-carousel"
import { MenuGrid } from "@/components/menu-grid"
import { bakeryCarouselItems, bakerySections } from "@/data/panificacao"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PanificacaoPage() {
  return (
    <>
      <Header />
      <main className="bg-casa-background min-h-screen">
        {/* Header com navegação */}
        <div className="bg-casa-surface/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-10">
          <div className="px-4 py-4 max-w-6xl mx-auto">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-casa-primary hover:text-casa-secondary">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>

        <section className="py-20 px-4 bg-casa-surface/70">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-casa-secondary">Panificação</p>
              <h1 className="font-serif text-4xl md:text-5xl text-casa-primary">Forno da Casa</h1>
              <p className="text-casa-primary/70 font-body max-w-3xl mx-auto">
                Pães, folhados e doces saindo do forno durante todo o dia, preparados com fermentação natural e ingredientes
                selecionados.
              </p>
            </div>

            <MenuCarousel items={bakeryCarouselItems} />

            <div className="space-y-6">
              <h2 className="font-serif text-3xl text-center text-casa-primary">Escolha sua categoria</h2>
              <MenuGrid sections={bakerySections} />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}


