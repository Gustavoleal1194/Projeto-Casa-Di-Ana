import { MenuCarousel, type MenuCarouselItem } from "@/components/menu-carousel"
import { MenuGrid } from "@/components/menu-grid"
import { defaultMenuSections } from "@/data/menu-sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin } from "lucide-react"

// Função para pegar um item de cada grupo para o carrossel
function getCarouselItemsFromSections(): MenuCarouselItem[] {
  const carouselItems: MenuCarouselItem[] = []

  // Pega um item de cada seção (Cafés Quentes, Cafés Gelados, Lanches Artesanais)
  defaultMenuSections.forEach((section) => {
    if (section.items.length > 0) {
      // Pega o primeiro item de cada seção (ou pode ser aleatório)
      const item = section.items[0]
      carouselItems.push({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        category: section.title,
        image: item.image,
      })
    }
  })

  return carouselItems
}

export default function MenuPage() {
  const carouselItems = getCarouselItemsFromSections()
  return (
    <>
      <Header />
      <main className="min-h-screen bg-casa-background">
        {/* Header com navegação */}
        <div className="bg-casa-surface/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-10">
          <div className="px-4 py-4 max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-casa-primary hover:text-casa-secondary">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>

              <div className="flex items-center gap-4 text-sm text-casa-primary/70">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Aberto de terça a sabado das 8h até 20h</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Rua Vereador francisco lopes, 299</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-8">
          {/* Hero do Menu */}
          <header className="mb-12 text-center max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="font-serif text-5xl md:text-6xl font-light tracking-tight text-casa-primary">
                  Menu do Dia
                </h1>
                <div className="flex items-center justify-center gap-4">
                  <span className="h-px w-12 bg-casa-secondary/60"></span>
                  <p className="font-script text-xl md:text-2xl text-casa-secondary">
                    Delícias artesanais
                  </p>
                  <span className="h-px w-12 bg-casa-secondary/60"></span>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-casa-primary/80 font-body max-w-2xl mx-auto">
                Preparadas diariamente com ingredientes selecionados e muito carinho na Casa di Ana
              </p>

              {/* Data e badges */}
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-sm text-casa-primary/60">
                  <span className="h-px w-8 bg-border"></span>
                  <time dateTime="2025-01-20" className="font-body">
                    20 de Janeiro, 2025
                  </time>
                  <span className="h-px w-8 bg-border"></span>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="casa" className="text-xs">
                    Fresco do Dia
                  </Badge>
                  <Badge variant="casa-outline" className="text-xs">
                    Artesanal
                  </Badge>
                  <Badge variant="casa" className="text-xs">
                    Ingredientes Selecionados
                  </Badge>
                </div>
              </div>
            </div>
          </header>

          {/* Carousel de destaques */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl md:text-4xl text-casa-primary mb-3">
                Destaques do Dia
              </h2>
              <p className="text-casa-primary/70 font-body">
                Nossas especialidades preparadas especialmente para hoje
              </p>
            </div>
            <MenuCarousel items={carouselItems} />
          </div>

          {/* Grid completo do menu */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-casa-primary mb-3">
                Cardápio Completo
              </h2>
              <p className="text-casa-primary/70 font-body max-w-2xl mx-auto">
                Explore todos os nossos sabores artesanais, cuidadosamente preparados para você
              </p>
            </div>
            <MenuGrid />
          </div>

          {/* Footer do menu */}
          <div className="mt-20 py-12 bg-casa-surface/30 rounded-2xl text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="font-serif text-2xl text-casa-primary">
                Venha nos visitar
              </h3>
              <p className="text-casa-primary/70 font-body">
                Rua das Flores, 123 - Centro | Aberto diariamente das 7h às 20h
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Button variant="casa" size="lg">
                  Fazer Pedido
                </Button>
                <Button variant="casa-outline" size="lg">
                  Contato
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
