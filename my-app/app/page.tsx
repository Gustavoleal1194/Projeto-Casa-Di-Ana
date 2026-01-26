import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { BackgroundContainer } from "@/components/background-container"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative bg-[#5e6979]">
        <BackgroundContainer />
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 md:py-0">
          {/* Overlay com 10% de opacidade para melhorar legibilidade */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Background decorativo com texturas artesanais */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-1/4 h-48 w-48 md:h-96 md:w-96 rounded-full bg-casa-secondary/10 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 h-40 w-40 md:h-80 md:w-80 rounded-full bg-casa-accent/8 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 md:h-64 md:w-64 rounded-full bg-casa-primary/5 blur-2xl"></div>
          </div>

          <div className="w-full max-w-4xl text-center relative z-10">
            <div className="space-y-6 md:space-y-8">
              {/* Subtítulo */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center justify-center gap-2 md:gap-4">
                  <span className="h-px w-8 md:w-16 bg-casa-secondary/60"></span>
                  <p className="font-script text-2xl sm:text-3xl md:text-4xl text-white font-bold px-2">
                    Sabores que acolhem memórias
                  </p>
                  <span className="h-px w-8 md:w-16 bg-casa-secondary/60"></span>
                </div>
              </div>

              {/* Descrição principal */}
              <div className="max-w-2xl mx-auto space-y-3 md:space-y-4 px-4">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white font-body font-semibold">
                  Uma padaria artesanal onde cada sabor conta uma história. Descubra nossos pães, doces e bebidas especiais
                  feitos com carinho e tradição, criando momentos únicos de aconchego e memória.
                </p>
              </div>

              {/* Botões de ação */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4 md:pt-6 relative z-20 px-4">
                <Link href="/menu" className="block relative z-20 w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-base md:text-lg relative z-20 bg-casa-accent hover:bg-casa-accent/90 text-white border-casa-accent">
                    Ver Menu do Dia
                  </Button>
                </Link>
                <Link href="#historia" className="block w-full sm:w-auto relative z-20">
                  <Button size="lg" variant="casa" className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                    Nossa História
                  </Button>
                </Link>
              </div>

              {/* Informações de funcionamento */}
              <div className="pt-8 md:pt-12 text-sm sm:text-base text-white font-body font-semibold px-4">
                <p>Aberto de terça a sabado das 8h até 20h</p>
                <p className="mt-1">Rua Vereador francisco lopes, 299</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de destaques */}
        <section className="py-12 sm:py-16 md:py-20 px-4 relative">
          {/* Overlay com 10% de opacidade para melhorar legibilidade */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white mb-3 md:mb-4 font-black">
                Nossos Destaques
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 font-body max-w-2xl mx-auto font-semibold px-4">
                Produtos selecionados com ingredientes frescos e técnicas artesanais
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Card 1 */}
              <Link href="/panificacao" className="block">
                <Card className="bg-white/90 backdrop-blur-sm border-casa-secondary/30 group hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer">
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                    <div className="relative w-full h-32 sm:h-40 md:h-32 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop&crop=center"
                        alt="Pães Artesanais"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-casa-primary mb-2 sm:mb-3">Pães Artesanais</h3>
                    <p className="text-sm sm:text-base text-casa-primary/80 font-body">
                      Feitos diariamente com fermentação natural e ingredientes selecionados
                    </p>
                  </CardContent>
                </Card>
              </Link>

              {/* Card 2 */}
              <Link href="/menu#menu-cardapio" className="block">
                <Card className="bg-white/90 backdrop-blur-sm border-casa-accent/30 group hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer">
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                    <div className="relative w-full h-32 sm:h-40 md:h-32 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&crop=center"
                        alt="Bebidas artesanais"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-casa-primary mb-2 sm:mb-3">Cardapio Casa Di Ana</h3>
                    <p className="text-sm sm:text-base text-casa-primary/80 font-body">
                      Cardápio completo com cafés quentes, cafés gelados e lanches
                    </p>
                  </CardContent>
                </Card>
              </Link>

              {/* Card 3 */}
              <Link href="/menu#menu-cardapio" className="block sm:col-span-2 md:col-span-1">
                <Card className="bg-white/90 backdrop-blur-sm border-casa-secondary/30 group hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer">
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                    <div className="relative w-full h-32 sm:h-40 md:h-32 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop&crop=center"
                        alt="Doces Tradicionais"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-casa-primary mb-2 sm:mb-3">Especiais do dia</h3>
                    <p className="text-sm sm:text-base text-casa-primary/80 font-body">
                      Receitas de família que passam de geração em geração
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Nossa História */}
        <section id="historia" className="py-12 sm:py-16 md:py-20 px-4 bg-casa-surface/80">
          <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-casa-primary px-4">Nossa história</h2>
            <p className="text-base sm:text-lg text-casa-primary/80 font-body leading-relaxed px-4">
              A Casa Di Ana nasceu do sonho de resgatar memórias afetivas por meio de sabores artesanais.
              Selecionamos ingredientes frescos, respeitamos o tempo de cada receita e celebramos a hospitalidade
              em cada detalhe para oferecer momentos de aconchego e carinho.
            </p>
            <p className="text-sm sm:text-base text-casa-primary/70 font-body px-4">
              Venha nos visitar e conhecer de perto o nosso forno, nossos cafés especiais e a equipe que faz essa
              história acontecer todos os dias.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
