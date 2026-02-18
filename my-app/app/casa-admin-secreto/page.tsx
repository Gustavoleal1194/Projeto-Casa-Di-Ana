import { Header } from "@/components/header"
import { AdminMenuPanel } from "@/components/admin-menu-panel"

export default function AdminSecretPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#5e6979] px-4 py-10">
        <div className="max-w-6xl mx-auto space-y-6 text-white">
          <header className="space-y-3">
            <h1 className="font-serif text-3xl md:text-4xl">Painel interno de menu</h1>
            <p className="text-sm text-white/80">
              Página oculta para você controlar a visibilidade dos itens e cadastrar novos itens
              apenas neste navegador. Não existe autenticação real nem banco de dados.
            </p>
          </header>

          <AdminMenuPanel />
        </div>
      </main>
    </>
  )
}

