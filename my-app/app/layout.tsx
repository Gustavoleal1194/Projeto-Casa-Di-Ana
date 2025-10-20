import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display, Lora, Dancing_Script } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-body",
})
const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
})

export const metadata: Metadata = {
  title: "Casa di Ana | Sabores que acolhem memórias",
  description: "Uma padaria artesanal onde cada sabor conta uma história. Descubra nossos pães, doces e cafés especiais feitos com carinho e tradição.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} ${geistMono.variable} ${playfair.variable} ${lora.variable} ${dancing.variable} font-body antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
