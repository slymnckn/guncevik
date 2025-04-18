"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <Image src="/images/logo.png" alt="Gün Çevik Hukuk" fill className="object-contain" />
          </div>
          <span className="text-lg font-bold text-slate-900">GÜN ÇEVİK HUKUK</span>
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-slate-900 transition-colors hover:text-red-600">
            Ana Sayfa
          </Link>
          <Link href="/hakkimizda" className="text-sm font-medium text-slate-900 transition-colors hover:text-red-600">
            Hakkımızda
          </Link>
          <Link
            href="/hizmetlerimiz"
            className="text-sm font-medium text-slate-900 transition-colors hover:text-red-600"
          >
            Hizmetlerimiz
          </Link>
          <Link href="/blog" className="text-sm font-medium text-slate-900 transition-colors hover:text-red-600">
            Blog
          </Link>
          <Link href="/sss" className="text-sm font-medium text-slate-900 transition-colors hover:text-red-600">
            SSS
          </Link>
          <Link href="/iletisim" className="text-sm font-medium text-slate-900 transition-colors hover:text-red-600">
            İletişim
          </Link>
        </nav>
        <div className="ml-auto md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Menüyü Aç</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <Link
                  href="/"
                  className="text-lg font-medium text-slate-900 transition-colors hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  Ana Sayfa
                </Link>
                <Link
                  href="/hakkimizda"
                  className="text-lg font-medium text-slate-900 transition-colors hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  Hakkımızda
                </Link>
                <Link
                  href="/hizmetlerimiz"
                  className="text-lg font-medium text-slate-900 transition-colors hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  Hizmetlerimiz
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-medium text-slate-900 transition-colors hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/sss"
                  className="text-lg font-medium text-slate-900 transition-colors hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  SSS
                </Link>
                <Link
                  href="/iletisim"
                  className="text-lg font-medium text-slate-900 transition-colors hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  İletişim
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <Button asChild className="ml-6 hidden bg-red-600 hover:bg-red-700 md:flex">
          <Link href="/iletisim">Bize Ulaşın</Link>
        </Button>
      </div>
    </header>
  )
}
