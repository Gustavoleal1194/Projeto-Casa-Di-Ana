"use client"

import { useEffect, useState } from "react"
import type { MenuItem } from "@/data/menu-sections"
import { menuDoDiaItems } from "@/data/menu-do-dia"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const HIDDEN_KEY = "cda_hidden_menu_items_v1"
const EXTRA_KEY = "cda_extra_menu_items_v1"

type ExtraMenuItem = MenuItem

type NewItemForm = {
  name: string
  description: string
  price: string
  image: string
  tag: string
}

export function AdminMenuPanel() {
  const [hiddenIds, setHiddenIds] = useState<number[]>([])
  const [extraItems, setExtraItems] = useState<ExtraMenuItem[]>([])
  const [form, setForm] = useState<NewItemForm>({
    name: "",
    description: "",
    price: "",
    image: "",
    tag: "",
  })

  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      const storedHidden = window.localStorage.getItem(HIDDEN_KEY)
      if (storedHidden) {
        setHiddenIds(JSON.parse(storedHidden))
      }
    } catch {
      // ignore parse errors
    }

    try {
      const storedExtra = window.localStorage.getItem(EXTRA_KEY)
      if (storedExtra) {
        setExtraItems(JSON.parse(storedExtra))
      }
    } catch {
      // ignore parse errors
    }
  }, [])

  const allItemsForIdGeneration: MenuItem[] = [...menuDoDiaItems, ...extraItems]

  const toggleVisibility = (id: number) => {
    setHiddenIds((current) => {
      const exists = current.includes(id)
      const next = exists ? current.filter((itemId) => itemId !== id) : [...current, id]
      if (typeof window !== "undefined") {
        window.localStorage.setItem(HIDDEN_KEY, JSON.stringify(next))
      }
      return next
    })
  }

  const handleFormChange = (field: keyof NewItemForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleCreateItem = () => {
    if (!form.name.trim() || !form.price.trim() || !form.image.trim()) {
      alert("Preencha pelo menos nome, preço e imagem.")
      return
    }

    const maxId = allItemsForIdGeneration.reduce((max, item) => (item.id > max ? item.id : max), 0)
    const newId = maxId + 1

    const newItem: ExtraMenuItem = {
      id: newId,
      name: form.name.trim(),
      description: form.description.trim() || "Item do dia.",
      price: form.price.trim(),
      image: form.image.trim(),
      tag: form.tag.trim() || undefined,
    }

    setExtraItems((current) => {
      const next = [...current, newItem]
      if (typeof window !== "undefined") {
        window.localStorage.setItem(EXTRA_KEY, JSON.stringify(next))
      }
      return next
    })

    setForm({
      name: "",
      description: "",
      price: "",
      image: "",
      tag: "",
    })

    alert("Item criado. Atualize a página do menu para ver o novo item do dia.")
  }

  const isHidden = (id: number) => hiddenIds.includes(id)

  const allMenuDoDiaItems: MenuItem[] = [...menuDoDiaItems, ...extraItems]

  return (
    <div className="space-y-10 text-white">
      <section className="space-y-4">
        <h2 className="font-serif text-2xl">Controle do Menu do Dia</h2>
        <p className="text-sm text-white/80">
          Esta página controla apenas os itens rotativos do <strong>Menu do Dia</strong>. Tudo é
          salvo somente neste navegador usando{" "}
          <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded">localStorage</span>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-serif text-xl flex items-center gap-2">
          Visibilidade dos itens do dia
          <Badge className="bg-white/10 border-white/30 text-[11px] font-normal">
            {allMenuDoDiaItems.length} itens (base + extras)
          </Badge>
        </h3>

        <div className="grid gap-3 md:grid-cols-2">
          {allMenuDoDiaItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-3 rounded-md bg-white/5 px-3 py-2"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-white truncate">{item.name}</p>
                <p className="text-xs text-white/70">
                  ID {item.id} • {item.price}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-white/70 hidden sm:inline">
                  {isHidden(item.id) ? "Invisível" : "Visível"}
                </span>
                <label className="inline-flex cursor-pointer items-center gap-2 text-xs">
                  <span>Mostrar</span>
                  <input
                    type="checkbox"
                    checked={!isHidden(item.id)}
                    onChange={() => toggleVisibility(item.id)}
                    className="h-4 w-4 rounded border-white/40 bg-transparent"
                  />
                </label>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-serif text-xl">Adicionar novo item ao Menu do Dia</h3>
        <p className="text-sm text-white/80">
          O item será salvo apenas neste navegador e aparecerá junto com os outros itens do dia
          depois de você atualizar a página do menu.
        </p>

        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-4 space-y-4">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-white/80">Nome do item</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleFormChange("name", e.target.value)}
                  className="w-full rounded-md border border-white/20 bg-[#5e6979]/60 px-3 py-2 text-sm text-white placeholder:text-white/40"
                  placeholder="Ex: Bolo especial do dia"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-white/80">Preço</label>
                <input
                  type="text"
                  value={form.price}
                  onChange={(e) => handleFormChange("price", e.target.value)}
                  className="w-full rounded-md border border-white/20 bg-[#5e6979]/60 px-3 py-2 text-sm text-white placeholder:text-white/40"
                  placeholder="Ex: R$ 25,00 ou Sob consulta"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-white/80">Descrição</label>
              <textarea
                value={form.description}
                onChange={(e) => handleFormChange("description", e.target.value)}
                rows={3}
                className="w-full rounded-md border border-white/20 bg-[#5e6979]/60 px-3 py-2 text-sm text-white placeholder:text-white/40"
                placeholder="Descrição do item (opcional)"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-white/80">URL da imagem</label>
              <input
                type="text"
                value={form.image}
                onChange={(e) => handleFormChange("image", e.target.value)}
                className="w-full rounded-md border border-white/20 bg-[#5e6979]/60 px-3 py-2 text-sm text-white placeholder:text-white/40"
                placeholder="Ex: /images/Dodia/novo-bolo.jpeg ou URL externa"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-white/80">Tag (opcional)</label>
              <input
                type="text"
                value={form.tag}
                onChange={(e) => handleFormChange("tag", e.target.value)}
                className="w-full rounded-md border border-white/20 bg-[#5e6979]/60 px-3 py-2 text-sm text-white placeholder:text-white/40"
                placeholder="Ex: Novo, Especial, Limitado"
              />
            </div>

            <div className="pt-2">
              <Button
                type="button"
                onClick={handleCreateItem}
                className="bg-white text-[#5e6979] hover:bg-white/90"
              >
                Salvar item do dia no navegador
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

