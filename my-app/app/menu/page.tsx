import { MenuCarousel, type MenuCarouselItem } from "@/components/menu-carousel"
import { MenuGrid } from "@/components/menu-grid"
import { MenuDoDiaGrid } from "@/components/menu-do-dia-grid"
import { defaultMenuSections } from "@/data/menu-sections"
import { menuDoDiaItems } from "@/data/menu-do-dia"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin } from "lucide-react"

// Função para converter itens do Menu do Dia para o formato do carrossel
function getCarouselItemsFromMenuDoDia(items: typeof menuDoDiaItems): MenuCarouselItem[] {
  return items.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    price: item.price,
    category: item.tag || "Especial do Dia",
    image: item.image,
  }))
}

export default function MenuPage() {
  const carouselItems = getCarouselItemsFromMenuDoDia(menuDoDiaItems)
  
  // Função para obter o dia e mês atual por extenso
  const getCurrentDate = () => {
    const today = new Date()
    const day = today.getDate()
    const monthNames = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ]
    const month = monthNames[today.getMonth()]
    return `${day} de ${month}`
  }
  
  const currentDate = getCurrentDate()
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#5e6979]">
        {/* Header com navegação */}
        <div className="bg-[#5e6979]/90 backdrop-blur-sm border-b border-white/20 sticky top-0 z-10">
          <div className="px-4 py-4 max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-white hover:text-white/80">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>

              <div className="flex items-center gap-4 text-sm text-white/90">
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
                <h1 className="font-serif text-5xl md:text-6xl font-light tracking-tight text-white">
                  Menu do Dia
                </h1>
                <div className="flex items-center justify-center gap-4">
                  <span className="h-px w-12 bg-white/60"></span>
                  <p className="font-script text-xl md:text-2xl text-white">
                    Delícias artesanais
                  </p>
                  <span className="h-px w-12 bg-white/60"></span>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-white/90 font-body max-w-2xl mx-auto">
                Preparadas diariamente com ingredientes selecionados e muito carinho na Casa di Ana
              </p>

              {/* Data */}
              <div className="flex items-center justify-center gap-3 text-sm text-white">
                <span className="h-px w-8 bg-white/40"></span>
                <time dateTime={new Date().toISOString()} className="font-body text-white">
                  {currentDate}
                </time>
                <span className="h-px w-8 bg-white/40"></span>
              </div>
            </div>
          </header>

          {/* Carousel de destaques */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
                Destaques do Dia
              </h2>
              <p className="text-white/90 font-body">
                Nossas especialidades preparadas especialmente para hoje
              </p>
            </div>
            <MenuCarousel items={carouselItems} />
          </div>

          {/* Seção Menu do Dia */}
          <div className="mb-20 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
                Menu do Dia
              </h2>
              <p className="text-white/90 font-body max-w-2xl mx-auto">
                Produtos especiais e rotativos preparados especialmente para hoje. Estes itens não estão no cardápio completo e mudam regularmente.
              </p>
            </div>
            <MenuDoDiaGrid items={menuDoDiaItems} />
          </div>

          {/* Seção Cardápio Completo */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
                Cardápio Completo
              </h2>
              <p className="text-white/90 font-body max-w-2xl mx-auto">
                Explore todos os nossos sabores artesanais, cuidadosamente preparados para você
              </p>
            </div>
            <MenuGrid />
          </div>

          {/* Footer do menu */}
          <div className="mt-20 py-12 bg-white/10 backdrop-blur-sm rounded-2xl text-center border border-white/20">
            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="font-serif text-2xl text-white">
                Venha nos visitar
              </h3>
              <p className="text-white/90 font-body">
                Rua Vereador francisco lopes, 299 | Aberto de terça a sabado das 8h até 20h domingos e feriados das 8h até 17h
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Button 
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#5e6979] shadow-sm hover:shadow-md"
                >
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
