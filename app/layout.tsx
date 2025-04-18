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
            href="https://wa.me/905555555555"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-all md:w-16 md:h-16"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="white"
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path d="M380.9 97.1C339 36.5 274.4 0 205.1 0 92.6 0 0 92.6 0 205.1c0 36.2 9.6 71.4 27.9 102.5L0 512l210.4-55.2c29.6 8 60.3 12.1 91.4 12.1 112.5 0 205.1-92.6 205.1-205.1 0-69.3-36.5-133.9-87.1-174.7zM205.1 366.6c-27.4 0-54.4-7.3-78-21.1l-5.6-3.3-46.3 12.1 12.3-45.1-3.6-5.8c-13.4-21.5-20.5-46.3-20.5-71.7 0-75.6 61.5-137.1 137.1-137.1 36.6 0 71 14.3 96.9 40.3s40.3 60.3 40.3 96.9c0 75.6-61.5 137.1-137.1 137.1z" />
            </svg>
          </a>
        </ThemeProvider>
      </body>
    </html>
  )
}
