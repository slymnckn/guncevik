import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gün Çevik Hukuk | Profesyonel Hukuk Hizmetleri",
  description:
    "Av. Gün Çevik Hukuk Bürosu - Ceza, Aile, Ticaret, İş ve Gayrimenkul Hukuku alanlarında profesyonel hukuki danışmanlık ve avukatlık hizmetleri.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>

          {/* ✅ WhatsApp Butonu */}
          <a
             href="https://wa.me/905428250639"
             target="_blank"
             rel="noopener noreferrer"
             className="fixed bottom-5 right-5 z-50"
           >
             <img
               src="/images/whatsapp-icon.png"
               alt="WhatsApp"
               className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg hover:scale-105 transition-transform"
             />
          </a>
        </ThemeProvider>
      </body>
    </html>
  )
}
