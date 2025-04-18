import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <div className="absolute inset-0">
          <Image src="/images/blog-hero.jpg" alt="Blog" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Blog</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Hukuki gelişmeler ve bilgilendirici makaleler için blog yazılarımızı takip edin.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image src="/images/blog-1.jpg" alt="Blog Görseli" fill className="object-cover" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                      İş Hukuku
                    </span>
                    <span className="ml-2 text-sm text-slate-500">12 Nisan 2023</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">Yeni İş Kanunu Değişiklikleri ve Etkileri</h3>
                  <p className="mt-2 text-slate-600">
                    Son yasal düzenlemeler ile iş hukukunda meydana gelen değişiklikler ve çalışanlar üzerindeki
                    etkileri.
                  </p>
                  <Button asChild variant="link" className="mt-4 p-0 text-red-600 hover:text-red-700">
                    <Link href="/blog/is-kanunu-degisiklikleri">Devamını Oku</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image src="/images/blog-2.webp" alt="Blog Görseli" fill className="object-cover" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                      Aile Hukuku
                    </span>
                    <span className="ml-2 text-sm text-slate-500">5 Mart 2023</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">Boşanma Sürecinde Bilmeniz Gerekenler</h3>
                  <p className="mt-2 text-slate-600">
                    Boşanma davası açmadan önce bilmeniz gereken hukuki süreçler ve haklarınız hakkında bilgiler.
                  </p>
                  <Button asChild variant="link" className="mt-4 p-0 text-red-600 hover:text-red-700">
                    <Link href="/blog/bosanma-sureci">Devamını Oku</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image src="/images/blog-3.webp" alt="Blog Görseli" fill className="object-cover" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                      Ticaret Hukuku
                    </span>
                    <span className="ml-2 text-sm text-slate-500">18 Şubat 2023</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    Ticari Sözleşmelerde Dikkat Edilmesi Gerekenler
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Ticari sözleşmelerde karşılaşılan yaygın sorunlar ve bunlardan kaçınmak için öneriler.
                  </p>
                  <Button asChild variant="link" className="mt-4 p-0 text-red-600 hover:text-red-700">
                    <Link href="/blog/ticari-sozlesmeler">Devamını Oku</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image src="/images/blog-4.webp" alt="Blog Görseli" fill className="object-cover" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                      Ceza Hukuku
                    </span>
                    <span className="ml-2 text-sm text-slate-500">25 Ocak 2023</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">Ceza Yargılamasında Müdafi Rolü</h3>
                  <p className="mt-2 text-slate-600">
                    Ceza yargılamasında müdafinin rolü ve sanık haklarının korunmasındaki önemi.
                  </p>
                  <Button asChild variant="link" className="mt-4 p-0 text-red-600 hover:text-red-700">
                    <Link href="/blog/ceza-yargilamasinda-mudafi">Devamını Oku</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image src="/images/blog-5.webp" alt="Blog Görseli" fill className="object-cover" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                      Gayrimenkul Hukuku
                    </span>
                    <span className="ml-2 text-sm text-slate-500">10 Ocak 2023</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">Gayrimenkul Alım-Satımında Hukuki Süreç</h3>
                  <p className="mt-2 text-slate-600">
                    Gayrimenkul alım-satım işlemlerinde izlenmesi gereken hukuki süreçler ve dikkat edilmesi gerekenler.
                  </p>
                  <Button asChild variant="link" className="mt-4 p-0 text-red-600 hover:text-red-700">
                    <Link href="/blog/gayrimenkul-alim-satimi">Devamını Oku</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image src="/images/blog-6.jpg" alt="Blog Görseli" fill className="object-cover" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                      İş Hukuku
                    </span>
                    <span className="ml-2 text-sm text-slate-500">5 Ocak 2023</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">İşçi Hakları ve İş Sözleşmesi Feshi</h3>
                  <p className="mt-2 text-slate-600">
                    İş sözleşmesinin feshi durumunda işçilerin sahip olduğu haklar ve tazminat talepleri.
                  </p>
                  <Button asChild variant="link" className="mt-4 p-0 text-red-600 hover:text-red-700">
                    <Link href="/blog/isci-haklari">Devamını Oku</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
              Daha Fazla Yükle
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-slate-100 py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Kategoriler</h2>
            <p className="mt-4 text-slate-600">
              İlgilendiğiniz hukuk alanına göre blog yazılarımızı filtreleyebilirsiniz.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
              Tümü
            </Button>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
              Ceza Hukuku
            </Button>
            <Button variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
              Aile Hukuku
            </Button>
            <Button variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
              Ticaret Hukuku
            </Button>
            <Button variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
              İş Hukuku
            </Button>
            <Button variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
              Gayrimenkul Hukuku
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Bültenimize Abone Olun</h2>
            <p className="mt-4 text-slate-600">
              Hukuki gelişmeler ve yeni blog yazılarımızdan haberdar olmak için bültenimize abone olun.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 sm:max-w-xs"
              />
              <Button className="w-full bg-red-600 hover:bg-red-700 sm:w-auto">Abone Ol</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
