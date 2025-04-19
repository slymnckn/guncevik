import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Briefcase, Scale, Users, Building, FileText, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-bg-yeni.jpg" alt="Hukuk Bürosu" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 text-white md:px-6">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Hukuki sorunlarınız için güvenilir çözümler
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Gün Çevik Hukuk Bürosu olarak, hukuki ihtiyaçlarınızda yanınızdayız. Profesyonel ekibimizle sizlere en iyi
            hizmeti sunmak için çalışıyoruz.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/iletisim">Bize Ulaşın</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-black hover:bg-gray-200
"
            >
              <Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-slate-900 md:text-4xl">15+</span>
              <span className="mt-2 text-sm text-slate-600">Yıllık deneyim</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-slate-900 md:text-4xl">500+</span>
              <span className="mt-2 text-sm text-slate-600">Çözülen davalar</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-slate-900 md:text-4xl">300+</span>
              <span className="mt-2 text-sm text-slate-600">Memnun müvekkil</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-slate-900 md:text-4xl">10+</span>
              <span className="mt-2 text-sm text-slate-600">Uzman avukat</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
  <div className="container px-4 md:px-6">
    <div className="grid gap-12 md:grid-cols-2">
      
      {/* ✅ Görsel solda */}
      <div className="relative h-[400px] overflow-hidden rounded-lg">
        <Image src="/images/lawyer-portrait.jpg" alt="Av. Gün Çevik" fill className="object-cover" />
      </div>

      {/* ✅ Paragraf sağda */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Av. Gün Çevik Hakkında</h2>
        <p className="mt-4 text-slate-600">
          Av. Gün Çevik, 15 yılı aşkın mesleki deneyimi ile hukuk alanında uzmanlaşmış bir avukattır. İstanbul
          Üniversitesi Hukuk Fakültesi mezunu olan Av. Çevik, kariyeri boyunca birçok karmaşık davada başarılı
          sonuçlar elde etmiştir.
        </p>
        <p className="mt-4 text-slate-600">
          Müvekkillerinin haklarını korumak ve en iyi hukuki çözümleri sunmak için titizlikle çalışan Av. Çevik,
          dürüstlük, şeffaflık ve profesyonellik ilkelerini benimsemektedir.
        </p>
        <div className="mt-8">
          <Button
            asChild
            variant="outline"
            className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
          >
            <Link href="/hakkimizda">Daha Fazla Bilgi</Link>
          </Button>
        </div>
      </div>
      
    </div>
  </div>
</section>

      
      {/* About Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Av. Gün Çevik Hakkında</h2>
              <p className="mt-4 text-slate-600">
                Av. Gün Çevik, 15 yılı aşkın mesleki deneyimi ile hukuk alanında uzmanlaşmış bir avukattır. İstanbul
                Üniversitesi Hukuk Fakültesi mezunu olan Av. Çevik, kariyeri boyunca birçok karmaşık davada başarılı
                sonuçlar elde etmiştir.
              </p>
              <p className="mt-4 text-slate-600">
                Müvekkillerinin haklarını korumak ve en iyi hukuki çözümleri sunmak için titizlikle çalışan Av. Çevik,
                dürüstlük, şeffaflık ve profesyonellik ilkelerini benimsemektedir.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                >
                  <Link href="/hakkimizda">Daha Fazla Bilgi</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image src="/images/lawyer-portrait.jpg" alt="Av. Gün Çevik" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hizmet Alanlarımız</h2>
            <p className="mt-4 text-slate-300">
              Gün Çevik Hukuk Bürosu olarak, çeşitli hukuk alanlarında uzmanlaşmış ekibimizle sizlere kapsamlı hukuki
              hizmetler sunuyoruz.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-slate-800 text-white">
              <CardContent className="p-6">
                <Scale className="h-10 w-10 text-red-500" />
                <h3 className="mt-4 text-xl font-bold">Ceza Hukuku</h3>
                <p className="mt-2 text-slate-300">
                  Ceza davalarında savunma ve müvekkil haklarının korunması konusunda uzman hukuki destek.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 text-white">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-red-500" />
                <h3 className="mt-4 text-xl font-bold">Aile Hukuku</h3>
                <p className="mt-2 text-slate-300">
                  Boşanma, velayet, nafaka ve miras gibi aile hukuku konularında profesyonel danışmanlık.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 text-white">
              <CardContent className="p-6">
                <Briefcase className="h-10 w-10 text-red-500" />
                <h3 className="mt-4 text-xl font-bold">Ticaret Hukuku</h3>
                <p className="mt-2 text-slate-300">
                  Şirket kurulumları, ticari sözleşmeler ve uyuşmazlıklar konusunda hukuki danışmanlık.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 text-white">
              <CardContent className="p-6">
                <FileText className="h-10 w-10 text-red-500" />
                <h3 className="mt-4 text-xl font-bold">İş Hukuku</h3>
                <p className="mt-2 text-slate-300">
                  İşçi-işveren ilişkileri, iş sözleşmeleri ve iş davalarında uzman hukuki destek.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 text-white">
              <CardContent className="p-6">
                <Building className="h-10 w-10 text-red-500" />
                <h3 className="mt-4 text-xl font-bold">Gayrimenkul Hukuku</h3>
                <p className="mt-2 text-slate-300">
                  Taşınmaz alım-satım, kira sözleşmeleri ve imar hukuku konularında danışmanlık.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 text-white">
              <CardContent className="p-6">
                <Phone className="h-10 w-10 text-red-500" />
                <h3 className="mt-4 text-xl font-bold">Danışmanlık</h3>
                <p className="mt-2 text-slate-300">
                  Bireysel ve kurumsal müvekkiller için özel hukuki danışmanlık hizmetleri.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/hizmetlerimiz">Tüm Hizmetlerimiz</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Son Yayınlar</h2>
            <p className="mt-4 text-slate-600">
              Hukuki gelişmeler ve bilgilendirici makaleler için blog yazılarımızı takip edin.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image src="/images/blog-1.jpg" alt="Blog Görseli" fill className="object-cover" />
                </div>
                <div className="mt-4">
                  <p className="text-sm text-slate-500">12 Nisan 2023</p>
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
                  <p className="text-sm text-slate-500">5 Mart 2023</p>
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
                  <p className="text-sm text-slate-500">18 Şubat 2023</p>
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
          </div>
          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
            >
              <Link href="/blog">Tüm Yazılar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-100 py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Bize Ulaşın</h2>
              <p className="mt-4 text-slate-600">
                Hukuki danışmanlık için bizimle iletişime geçin. En kısa sürede size dönüş yapacağız.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900">Adres</h3>
                    <p className="mt-1 text-slate-600">Konak Mahallesi 895. Sokak No:5 D:101 Konak İzmir</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5">
  <path d="M511.1 387.1c-.3-8.5-6.7-16.2-14.9-19.4l-115.6-44.2c-7.8-3-16.7-.9-22.5 5.2l-50.1 52.5c-73.7-38.8-135.1-100.2-173.9-173.9l52.5-50.1c6.1-5.8 8.2-14.7 5.2-22.5L143.5 16.2C140.3 8 132.6 1.6 124.1 1.9 46.2 5 0 58.5 0 131.2 0 300.3 211.7 512 380.8 512c72.7 0 126.2-46.2 129.3-124.1z"/>
</svg>

                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900">Telefon</h3>
                    <p className="mt-1 text-slate-600">+90 542 825 0639</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900">E-posta</h3>
                    <p className="mt-1 text-slate-600">guncevikhukuk@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <div className="relative h-[400px] w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md">
  <Image
    src="/images/contact-visual.jpg"
    alt="İletişim Görseli"
    fill
    className="object-cover"
  />
</div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
