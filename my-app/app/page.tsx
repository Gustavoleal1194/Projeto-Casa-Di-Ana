import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-casa-background">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden casa-hero px-4">
          {/* Background decorativo com texturas artesanais */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-casa-secondary/20 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-casa-accent/15 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-casa-primary/10 blur-2xl"></div>
          </div>

          <div className="w-full max-w-4xl text-center">
            <div className="space-y-8">
              {/* Subtítulo */}
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <span className="h-px w-16 bg-casa-secondary/60"></span>
                  <p className="font-script text-2xl md:text-3xl text-casa-secondary">
                    Sabores que acolhem memórias
                  </p>
                  <span className="h-px w-16 bg-casa-secondary/60"></span>
                </div>
              </div>

              {/* Descrição principal */}
              <div className="max-w-2xl mx-auto space-y-4">
                <p className="text-lg md:text-xl leading-relaxed text-casa-primary/80 font-body">
                  Uma padaria artesanal onde cada sabor conta uma história. Descubra nossos pães, doces e cafés especiais
                  feitos com carinho e tradição, criando momentos únicos de aconchego e memória.
                </p>

                {/* Badges de destaque */}
                <div className="flex flex-wrap justify-center gap-3 pt-4">
                  <Badge variant="casa" className="text-sm px-4 py-2">
                    Pães Artesanais
                  </Badge>
                  <Badge variant="casa" className="text-sm px-4 py-2">
                    Cafés Especiais
                  </Badge>
                  <Badge variant="casa" className="text-sm px-4 py-2">
                    Doces Tradicionais
                  </Badge>
                </div>
              </div>

              {/* Botões de ação */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link href="/menu" className="block">
                  <Button size="lg" variant="casa" className="w-full sm:w-auto px-8 py-4 text-lg">
                    Ver Menu do Dia
                  </Button>
                </Link>
                <Button size="lg" variant="casa-outline" className="w-full sm:w-auto px-8 py-4 text-lg">
                  Nossa História
                </Button>
              </div>

              {/* Informações de funcionamento */}
              <div className="pt-12 text-sm text-casa-primary/60 font-body">
                <p>Aberto diariamente das 7h às 20h</p>
                <p className="mt-1">Rua das Flores, 123 - Centro</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de destaques */}
        <section className="py-20 px-4 bg-casa-surface/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-casa-primary mb-4">
                Nossos Destaques
              </h2>
              <p className="text-lg text-casa-primary/70 font-body max-w-2xl mx-auto">
                Produtos selecionados com ingredientes frescos e técnicas artesanais
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Card className="casa-card group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-casa-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🥖</span>
                  </div>
                  <h3 className="font-serif text-2xl text-casa-primary mb-3">Pães Artesanais</h3>
                  <p className="text-casa-primary/70 font-body">
                    Feitos diariamente com fermentação natural e ingredientes selecionados
                  </p>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="casa-card group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-casa-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">☕</span>
                  </div>
                  <h3 className="font-serif text-2xl text-casa-primary mb-3">Cafés Especiais</h3>
                  <p className="text-casa-primary/70 font-body">
                    Grãos selecionados e torrados especialmente para nossa casa
                  </p>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="casa-card group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-casa-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🍰</span>
                  </div>
                  <h3 className="font-serif text-2xl text-casa-primary mb-3">Doces Tradicionais</h3>
                  <p className="text-casa-primary/70 font-body">
                    Receitas de família que passam de geração em geração
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
