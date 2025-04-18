import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Briefcase, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <div className="absolute inset-0">
          <Image src="/images/about-hero.jpg" alt="Hakkımızda" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Hakkımızda</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Gün Çevik Hukuk Bürosu olarak, müvekkillerimize en iyi hukuki hizmeti sunmak için çalışıyoruz.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <Image src="/images/lawyer-office.jpg" alt="Hukuk Bürosu" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Gün Çevik Hukuk Bürosu</h2>
              <p className="mt-4 text-slate-600">
                2008 yılında Av. Gün Çevik tarafından kurulan hukuk büromuz, kurulduğu günden bu yana müvekkillerine en
                yüksek kalitede hukuki hizmet sunmayı ilke edinmiştir.
              </p>
              <p className="mt-4 text-slate-600">
                Büromuz, ceza hukuku, aile hukuku, ticaret hukuku, iş hukuku ve gayrimenkul hukuku gibi çeşitli
                alanlarda uzmanlaşmış avukatlardan oluşan deneyimli bir ekibe sahiptir.
              </p>
              <p className="mt-4 text-slate-600">
                Müvekkillerimizin hukuki sorunlarına çözüm üretirken, her davanın kendine özgü koşullarını dikkate
                alarak, kişiye özel stratejiler geliştiriyoruz. Amacımız, müvekkillerimizin haklarını en iyi şekilde
                korumak ve onlar için en uygun hukuki çözümleri sunmaktır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lawyer Profile */}
      <section className="bg-slate-100 py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Av. Gün Çevik</h2>
            <p className="mt-4 text-slate-600">Kurucu Ortak</p>
          </div>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div className="relative mx-auto h-[400px] w-[300px] overflow-hidden rounded-lg">
              <Image src="/images/lawyer-portrait.jpg" alt="Av. Gün Çevik" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-900">Eğitim</h3>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• İstanbul Üniversitesi Hukuk Fakültesi (2005)</li>
                <li>• Galatasaray Lisesi (2000)</li>
              </ul>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">Mesleki Deneyim</h3>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• Gün Çevik Hukuk Bürosu, Kurucu Ortak (2008 - Günümüz)</li>
                <li>• ABC Hukuk Bürosu, Kıdemli Avukat (2005 - 2008)</li>
              </ul>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">Uzmanlık Alanları</h3>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• Ceza Hukuku</li>
                <li>• Ticaret Hukuku</li>
                <li>• Aile Hukuku</li>
                <li>• İş Hukuku</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Ekibimiz</h2>
            <p className="mt-4 text-slate-600">
              Alanında uzman avukatlardan oluşan ekibimizle sizlere en iyi hukuki hizmeti sunuyoruz.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full">
                <Image src="/images/team-1.jpg" alt="Takım Üyesi" fill className="object-cover" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">Av. Ayşe Yılmaz</h3>
              <p className="mt-2 text-slate-600">Ortak, Aile Hukuku Uzmanı</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full">
                <Image src="/images/team-2.jpg" alt="Takım Üyesi" fill className="object-cover" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">Av. Mehmet Kaya</h3>
              <p className="mt-2 text-slate-600">Ortak, Ticaret Hukuku Uzmanı</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full">
                <Image src="/images/team-3.jpg" alt="Takım Üyesi" fill className="object-cover" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">Av. Zeynep Demir</h3>
              <p className="mt-2 text-slate-600">Kıdemli Avukat, İş Hukuku Uzmanı</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Değerlerimiz</h2>
            <p className="mt-4 text-slate-300">Hukuk büromuzun temel değerleri ve çalışma prensipleri.</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-slate-800 text-white">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Award className="h-12 w-12 text-red-500" />
                <h3 className="mt-4 text-xl font-bold">Profesyonellik</h3>
                <p className="mt-2 text-slate-300">Her davada en yüksek profesyonellik standartlarını koruyoruz.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 text-white">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Users className="h-12 w-12 text-red-500" />
                <h3 className="mt-4 text-xl font-bold">Müvekkil Odaklılık</h3>
                <p className="mt-2 text-slate-300">
                  Müvekkillerimizin ihtiyaçlarını ve menfaatlerini her zaman ön planda tutuyoruz.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 text-white">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Briefcase className="h-12 w-12 text-red-500" />
                <h3 className="mt-4 text-xl font-bold">Uzmanlık</h3>
                <p className="mt-2 text-slate-300">
                  Her hukuk alanında derin bilgi ve deneyime sahip uzman avukatlarla çalışıyoruz.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 text-white">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <BookOpen className="h-12 w-12 text-red-500" />
                <h3 className="mt-4 text-xl font-bold">Şeffaflık</h3>
                <p className="mt-2 text-slate-300">
                  Müvekkillerimizle açık ve dürüst iletişim kurarak güven inşa ediyoruz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Misyonumuz</h2>
              <p className="mt-4 text-slate-600">
                Gün Çevik Hukuk Bürosu olarak misyonumuz, müvekkillerimize en yüksek kalitede hukuki hizmet sunarak,
                karşılaştıkları hukuki sorunlara etkili ve kalıcı çözümler üretmektir. Her müvekkilimizin davasını kendi
                davamız gibi benimseyerek, onların haklarını korumak ve adaletin tecellisi için var gücümüzle
                çalışmaktayız.
              </p>
              <p className="mt-4 text-slate-600">
                Hukuki süreçlerde müvekkillerimizi bilgilendirmek, onlara rehberlik etmek ve hukuki haklarını en iyi
                şekilde savunmak temel görevimizdir. Bu misyon doğrultusunda, her zaman etik değerlere bağlı kalarak,
                dürüstlük ve şeffaflık ilkelerinden taviz vermeden çalışmalarımızı sürdürmekteyiz.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Vizyonumuz</h2>
              <p className="mt-4 text-slate-600">
                Vizyonumuz, Türkiye'nin önde gelen hukuk bürolarından biri olarak, hukuki hizmetlerde mükemmelliği
                temsil etmek ve müvekkillerimize sunduğumuz çözümlerle fark yaratmaktır. Hukuk alanındaki gelişmeleri
                yakından takip ederek, yenilikçi yaklaşımlar geliştirmek ve müvekkillerimize en güncel hukuki bilgi ve
                deneyimi sunmak için sürekli kendimizi geliştirmeyi hedefliyoruz.
              </p>
              <p className="mt-4 text-slate-600">
                Uzun vadede, ulusal ve uluslararası alanda tanınan, güvenilir ve saygın bir hukuk bürosu olarak,
                müvekkillerimizin hukuki ihtiyaçlarına cevap vermeye ve toplumda hukuk bilincinin gelişmesine katkıda
                bulunmaya devam edeceğiz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
