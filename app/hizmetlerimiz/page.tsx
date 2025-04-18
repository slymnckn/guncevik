import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Scale, Users, Building, FileText, Phone, Shield, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <div className="absolute inset-0">
          <Image src="/images/services-hero.jpg" alt="Hizmetlerimiz" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Hizmetlerimiz</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Gün Çevik Hukuk Bürosu olarak, çeşitli hukuk alanlarında uzman kadromuzla yanınızdayız.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Hukuki Uzmanlık Alanlarımız
            </h2>
            <p className="mt-4 text-slate-600">
              Gün Çevik Hukuk Bürosu olarak, aşağıdaki alanlarda uzmanlaşmış kadromuzla hizmet vermekteyiz.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <Scale className="h-10 w-10 text-red-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">Ceza Hukuku</h3>
                <p className="mt-2 text-slate-600">
                  Ceza davalarında savunma ve müvekkil haklarının korunması konusunda uzman hukuki destek sunuyoruz.
                </p>
                <Button asChild variant="link" className="mt-4 p-0 text-red-600 hover:text-red-700">
                  <Link href="/hizmetlerimiz/ceza-hukuku">Detaylı Bilgi</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-red-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">Aile Hukuku</h3>
                <p className="mt-2 text-slate-600">
                  Boşanma, velayet, nafaka ve miras gibi aile hukuku konularında profesyonel danışmanlık hizmetleri
                  veriyoruz.
                </p>
                <Button asChild variant="link" className="mt-4 p-0 text-red-600 hover:text-red-700">
                  <Link href="/hizmetlerimiz/aile-hukuku">Detaylı Bilgi</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Briefcase className="h-10 w-10 text-red-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">Ticaret Hukuku</h3>
                <p className="mt-2 text-slate-600">
                  Şirket kurulumları, ticari sözleşmeler ve uyuşmazlıklar konusunda hukuki danışmanlık hizmetleri
                  sunuyoruz.
                </p>
                <Button asChild variant="link" className="mt-4 p-0 text-red-600 hover:text-red-700">
                  <Link href="/hizmetlerimiz/ticaret-hukuku">Detaylı Bilgi</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <FileText className="h-10 w-10 text-red-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">İş Hukuku</h3>
                <p className="mt-2 text-slate-600">
                  İşçi-işveren ilişkileri, iş sözleşmeleri ve iş davalarında uzman hukuki destek sağlıyoruz.
                </p>
                <Button asChild variant="link" className="mt-4 p-0 text-red-600 hover:text-red-700">
                  <Link href="/hizmetlerimiz/is-hukuku">Detaylı Bilgi</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Building className="h-10 w-10 text-red-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">Gayrimenkul Hukuku</h3>
                <p className="mt-2 text-slate-600">
                  Taşınmaz alım-satım, kira sözleşmeleri ve imar hukuku konularında danışmanlık hizmetleri veriyoruz.
                </p>
                <Button asChild variant="link" className="mt-4 p-0 text-red-600 hover:text-red-700">
                  <Link href="/hizmetlerimiz/gayrimenkul-hukuku">Detaylı Bilgi</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Shield className="h-10 w-10 text-red-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">Sigorta Hukuku</h3>
                <p className="mt-2 text-slate-600">
                  Sigorta poliçeleri, tazminat talepleri ve sigorta uyuşmazlıkları konularında hukuki destek sunuyoruz.
                </p>
                <Button asChild variant="link" className="mt-4 p-0 text-red-600 hover:text-red-700">
                  <Link href="/hizmetlerimiz/sigorta-hukuku">Detaylı Bilgi</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Globe className="h-10 w-10 text-red-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">Uluslararası Hukuk</h3>
                <p className="mt-2 text-slate-600">
                  Uluslararası ticaret, yabancı yatırımlar ve sınır ötesi hukuki işlemler konusunda danışmanlık
                  hizmetleri veriyoruz.
                </p>
                <Button asChild variant="link" className="mt-4 p-0 text-red-600 hover:text-red-700">
                  <Link href="/hizmetlerimiz/uluslararasi-hukuk">Detaylı Bilgi</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Phone className="h-10 w-10 text-red-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">Hukuki Danışmanlık</h3>
                <p className="mt-2 text-slate-600">
                  Bireysel ve kurumsal müvekkiller için özel hukuki danışmanlık hizmetleri sunuyoruz.
                </p>
                <Button asChild variant="link" className="mt-4 p-0 text-red-600 hover:text-red-700">
                  <Link href="/hizmetlerimiz/hukuki-danismanlik">Detaylı Bilgi</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="bg-slate-100 py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Ceza Hukuku</h2>
              <p className="mt-4 text-slate-600">
                Ceza hukuku alanında uzmanlaşmış ekibimizle, müvekkillerimize kapsamlı hukuki destek sunuyoruz.
                Soruşturma aşamasından yargılama sürecine kadar, her adımda yanınızda olarak haklarınızı koruyoruz.
              </p>
              <ul className="mt-6 space-y-2 text-slate-600">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-red-600"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Ağır Ceza Davaları
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-red-600"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Ekonomik Suçlar
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-red-600"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Bilişim Suçları
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-red-600"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Trafik Suçları
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-red-600"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  İtiraz ve Temyiz Başvuruları
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link href="/hizmetlerimiz/ceza-hukuku">Detaylı Bilgi</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image src="/images/criminal-law.jpg" alt="Ceza Hukuku" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Çalışma Sürecimiz</h2>
            <p className="mt-4 text-slate-600">
              Gün Çevik Hukuk Bürosu olarak, müvekkillerimize sunduğumuz hizmetlerde izlediğimiz süreç.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">İlk Görüşme</h3>
                <p className="mt-2 text-slate-600">
                  Hukuki sorununuzu dinliyor, detaylı bilgi alıyor ve ön değerlendirme yapıyoruz.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">Strateji Geliştirme</h3>
                <p className="mt-2 text-slate-600">Hukuki durumunuza özel strateji geliştiriyor ve size sunuyoruz.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">Uygulama</h3>
                <p className="mt-2 text-slate-600">Belirlenen stratejiyi uygulayarak hukuki süreçleri yönetiyoruz.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">Sonuç ve Takip</h3>
                <p className="mt-2 text-slate-600">
                  Davanızın sonucunu takip ediyor ve gerekli hukuki işlemleri tamamlıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hukuki Danışmanlık İçin Bize Ulaşın</h2>
              <p className="mt-4 text-slate-300">
                Hukuki sorunlarınız için profesyonel destek almak ister misiniz? Hemen bize ulaşın, size en kısa sürede
                dönüş yapalım.
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="/iletisim">Bize Ulaşın</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
