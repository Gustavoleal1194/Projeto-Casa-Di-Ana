import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins, Inter, Caveat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
})

export const metadata: Metadata = {
  title: "Casa di Ana | Sabores que acolhem memórias",
  description: "Uma padaria artesanal onde cada sabor conta uma história. Descubra nossos pães, doces e cafés especiais feitos com carinho e tradição.",
  generator: "v0.app",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  icons: {
    icon: [
      { url: "/images/headerpronto.png", type: "image/png" },
    ],
    apple: "/images/headerpronto.png",
    shortcut: "/images/headerpronto.png",
  },
  openGraph: {
    title: "Casa di Ana | Sabores que acolhem memórias",
    description: "Uma padaria artesanal onde cada sabor conta uma história. Descubra nossos pães, doces e cafés especiais feitos com carinho e tradição.",
    images: [
      {
        url: "/images/headerpronto.png",
        width: 1200,
        height: 630,
        alt: "Casa di Ana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa di Ana | Sabores que acolhem memórias",
    description: "Uma padaria artesanal onde cada sabor conta uma história. Descubra nossos pães, doces e cafés especiais feitos com carinho e tradição.",
    images: ["/images/headerpronto.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable} ${caveat.variable} font-body antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
