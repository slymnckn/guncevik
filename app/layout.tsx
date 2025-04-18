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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
<a
  href="https://wa.me/905555555555"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-all md:w-16 md:h-16"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    viewBox="0 0 448 512"
    className="w-6 h-6 md:w-8 md:h-8"
  >
    <path d="M380.9 97.1C339 ... (uzun path buraya gelecek)" />
  </svg>
</a>
