"use client"

import { ContactModal } from "@/components/contact-modal"

export function SiteFooter() {
  return (
    <footer className="mt-20 px-4 pb-10 bg-[#5e6979]">
      <div className="max-w-6xl mx-auto">
        <div className="py-12 bg-white/10 backdrop-blur-sm rounded-2xl text-center border border-white/20">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="font-serif text-2xl text-white">Venha nos visitar</h3>
            <p className="text-white/90 font-body">
              Rua Vereador francisco lopes, 299 | Aberto de terça a sabado das 8h até 19h domingos e feriados das 8h até
              17h
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <ContactModal />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

