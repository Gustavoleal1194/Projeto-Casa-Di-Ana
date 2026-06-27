import { MenuCarousel, type MenuCarouselItem } from "@/components/menu-carousel"
import { MenuGrid } from "@/components/menu-grid"
import { MenuDoDiaGrid } from "@/components/menu-do-dia-grid"
import { defaultMenuSections, type MenuItem } from "@/data/menu-sections"
import { menuDoDiaItems } from "@/data/menu-do-dia"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { ScrollToCardapioButton } from "@/components/scroll-to-cardapio-button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// Função para converter itens do Menu do Dia / novidades para o formato do carrossel
function getCarouselItemsFromMenuDoDia(items: MenuItem[]): MenuCarouselItem[] {
  return items.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    price: item.price,
    category: item.tag || "Especial do Dia",
    image: item.image,
    href: `#menu-do-dia-item-${item.id}`,
  }))
}

const novidadesForaDoCardapioItems: MenuItem[] = [
  {
    id: 3001,
    name: "Henrique",
    description:
      "Croissant, maionese de limão siciliano, tomate fresco, salada de alface, queijo suíço, picles de cebola roxa, raspas de limão e salame.",
    price: "R$ 45,00",
    image: "/images/Comidas/Henrique.jpeg",
  },
  {
    id: 3002,
    name: "Cissy – Croissant Casquinha",
    description: "Croissant com requeijão tostado.",
    price: "R$ 28,00",
    image: "/images/Dodia/CroissantCas.jpg",
  },
  {
    id: 3003,
    name: "Murillo - Baguete Francesa com Salmão e Ovo",
    description: "Coalhada com rapas de limão, cebola roxa, alcaparras, tomate caqui, sal, pimenta, azeite na baguete.",
    price: "R$ 58,00",
    image: "/images/Comidas/Lanche_salmao_ovo.jpeg",
  },
  {
    id: 3004,
    name: "Chá Giovanna",
    description: "Chá matte gelado, calda de cana e rapadura, toque de limão siciliano.",
    price: "R$ 22,00",
    image: "/images/bebidas/cha_gi.jpeg",
  },
  {
    id: 3005,
    name: "Soda de Maçã Verde",
    description: "Soda italiana de maçã verde.",
    price: "R$ 20,00",
    image: "/images/bebidas/SodaMaca.jpeg",
  },
  {
    id: 3006,
    name: "Soda Pink Limonade",
    description: "Soda Italiana de pink limonade com suco de limão siciliano.",
    price: "R$ 20,00",
    image: "/images/bebidas/SodaPink.jpeg",
  },
  {
    id: 3007,
    name: "Latte Gelado",
    description: "Leite gelado, com Xarope de baunilha, e espresso.",
    price: "R$ 22,00",
    image: "/images/bebidas/latteGelato.jpeg",
  },
   {
    id: 3008,
    name: "Milena - Chocolate Nobre",
    description: "Chocolate quente feito com ganashe de chocolate nobre 40% cacau, noz moscada , flor de sal e marshmellow",
    price: "R$ 30,00",
    image: "/images/bebidas/MilenaChocolateNobre.jpeg",
  },{
    id: 3013,
    name: "Julieta - Chocolate Nobre",
    description: "Chocolate quente feito com ganashe de chocolate nobre 70% cacau, noz moscada , flor de sal e marshmellow",
    price: "R$ 35,00",
    image: "/images/bebidas/MilenaChocolateNobre.jpeg",
  },  {
    id: 3009,
    name: "Shake doce de leite com café ",
    description: "Feito de sorvete de doce de leite a base de whey com café e doce de leite",
    price: "R$ 35,00",
    image: "/images/bebidas/Shakes.jpeg",
  },
    {
    id: 3010,
    name: "Shake ovomaltine ",
    description: "Feito de sorvete protéico de ninho a base de whey, com 20 gramas de proteína e ovomaltine",
    price: "R$ 32,00",
    image: "/images/bebidas/Shakes.jpeg",
  },
    {
    id: 3011,
    name: "Shake Morango ",
    description: "Feito de sorvete protéico a base de whey de  ninho com 20 gramas de proteína e morango",
    price: "R$ 32,00",
    image: "/images/bebidas/Shakes.jpeg",
  }
]

export default function MenuPage() {
  const availableMenuDoDiaItems = menuDoDiaItems.filter((item) => item.available !== false)
  const prioritySectionIds = ["nossos-lanches", "classicos-padaria", "especialidades-cafe"]
  const prioritizedSections = [
    ...prioritySectionIds
      .map((id) => defaultMenuSections.find((section) => section.id === id))
      .filter((section): section is NonNullable<typeof section> => Boolean(section)),
    ...defaultMenuSections.filter((section) => !prioritySectionIds.includes(section.id)),
  ]
  const carouselItems = getCarouselItemsFromMenuDoDia([
    ...novidadesForaDoCardapioItems,
    ...availableMenuDoDiaItems,
  ])
  
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

              <ScrollToCardapioButton className="text-white border-white/50 bg-white/10 hover:bg-white/20" />
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
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="#cardapio-completo">
                <Badge className="cursor-pointer px-5 py-2 text-base font-semibold bg-white/15 text-white hover:bg-white/25 border border-white/30">
                  Cardápio Completo
                </Badge>
              </Link>
            </div>
          </div>

          {/* Seção Novidades fora do cardápio */}
          <div className="mb-20 max-w-6xl mx-auto scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
                Novidades fora do cardápio
              </h2>
              <p className="text-white/90 font-body max-w-2xl mx-auto">
                Novidades que ainda não estão no cardapio
              </p>
            </div>
            <MenuDoDiaGrid items={novidadesForaDoCardapioItems} />
          </div>

          {/* Seção Menu do Dia */}
          <div id="menu-do-dia" className="mb-20 max-w-6xl mx-auto scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
                Menu do Dia
              </h2>
              <p className="text-white/90 font-body max-w-2xl mx-auto">
                Produtos especiais e rotativos preparados especialmente para hoje. Estes itens não estão no cardápio completo e mudam regularmente.
              </p>
            </div>
            <MenuDoDiaGrid items={availableMenuDoDiaItems} />
          </div>

          {/* Seção Cardápio Completo */}
          <div id="cardapio-completo" className="max-w-6xl mx-auto scroll-mt-24">
            <div className="text-center mb-12">
              <div className="mb-4 flex justify-center">
                <Link href="#menu-do-dia">
                  <Badge className="cursor-pointer bg-white/15 text-white hover:bg-white/25 border border-white/30">
                    Menu do Dia
                  </Badge>
                </Link>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
                Cardápio Completo
              </h2>
              <p className="text-white/90 font-body max-w-2xl mx-auto">
                Explore todos os nossos sabores artesanais, cuidadosamente preparados para você
              </p>
            </div>
            <MenuGrid sections={prioritizedSections} />
          </div>
        </div>
      </main>
    </>
  )
}
