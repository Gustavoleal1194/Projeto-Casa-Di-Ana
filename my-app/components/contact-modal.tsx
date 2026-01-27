"use client"

import { useState } from "react"
import { Instagram, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type ContactModalProps = {
  whatsappUrl?: string
  instagramUrl?: string
}

export function ContactModal({
  whatsappUrl = "https://wa.me/5518996008500",
  instagramUrl = "https://www.instagram.com/casadiana_pp/",
}: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        size="lg"
        className="border-2 border-white text-white hover:bg-white hover:text-[#5e6979] shadow-sm hover:shadow-md"
        onClick={() => setIsOpen(true)}
      >
        Contato
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Contato"
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-[#5e6979] p-5 text-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-serif text-xl">Contato</h3>
              <button
                type="button"
                className="rounded-full p-1 text-white/80 hover:text-white"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3">
              <Button asChild className="w-full bg-casa-secondary hover:bg-casa-accent text-white">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>

              <Button asChild className="w-full bg-casa-secondary hover:bg-casa-accent text-white">
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
