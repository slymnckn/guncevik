import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <div className="absolute inset-0">
          <Image src="/images/faq-hero.jpg" alt="Sıkça Sorulan Sorular" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Sıkça Sorulan Sorular</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Müvekkillerimiz tarafından en sık sorulan soruların yanıtlarını burada bulabilirsiniz.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-medium">
                  İlk görüşme için ücret ödenir mi?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  İlk tanışma görüşmesi için genellikle ücret talep edilmemektedir. Bu görüşmede hukuki sorununuzu
                  dinliyor ve size nasıl yardımcı olabileceğimizi değerlendiriyoruz. Ancak, detaylı hukuki danışmanlık
                  hizmeti verilmesi durumunda ücret talep edilebilir.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Avukatlık ücretleri nasıl belirlenir?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Avukatlık ücretleri, davanın türü, karmaşıklığı, tahmini süresi ve gerektirdiği iş yüküne göre
                  belirlenir. Bazı davalarda sabit ücret, bazılarında ise sonuca bağlı başarı primi şeklinde
                  ücretlendirme yapılabilir. Her durumda, ücret konusu ilk görüşmede netleştirilir ve yazılı bir
                  sözleşme ile belirlenir.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Dava açmadan önce nelere dikkat etmeliyim?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Dava açmadan önce, hukuki sorununuzla ilgili tüm belgeleri toplamanız, olayın detaylarını kronolojik
                  olarak not etmeniz ve varsa tanıkların iletişim bilgilerini hazırlamanız önemlidir. Ayrıca, bazı dava
                  türlerinde dava açmadan önce arabuluculuk gibi alternatif çözüm yollarına başvurulması zorunludur. Bu
                  konuda avukatınız size rehberlik edecektir.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Boşanma davası ne kadar sürer?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Boşanma davalarının süresi, anlaşmalı veya çekişmeli olmasına, mal paylaşımı ve velayet gibi konularda
                  anlaşmazlık olup olmamasına göre değişir. Anlaşmalı boşanma davaları genellikle 1-3 ay içinde
                  sonuçlanırken, çekişmeli boşanma davaları 1-2 yıl veya daha uzun sürebilir.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-lg font-medium">
                  İş davalarında zamanaşımı süresi nedir?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  İş davalarında zamanaşımı süresi, talep edilen hakka göre değişiklik gösterir. İşçilik alacakları
                  (fazla mesai, yıllık izin ücreti, kıdem tazminatı vb.) için genel zamanaşımı süresi 5 yıldır. İşe iade
                  davaları için ise işten çıkarılma tarihinden itibaren 1 ay içinde arabulucuya başvurulması,
                  arabuluculuk sürecinin anlaşmazlıkla sonuçlanması halinde ise 2 hafta içinde dava açılması
                  gerekmektedir.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Ceza davalarında müdafi (avukat) bulundurma zorunlu mudur?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Türk Ceza Kanunu'na göre, bazı ağır suçlarda ve özel durumlar dışında müdafi bulundurma zorunluluğu
                  yoktur. Ancak, hukuki süreçlerin karmaşıklığı ve teknik bilgi gerektirmesi nedeniyle, haklarınızın
                  korunması için bir avukat tarafından temsil edilmeniz her zaman önerilir. Maddi durumu yetersiz olan
                  kişiler için Baro tarafından ücretsiz avukat (müdafi) görevlendirilebilir.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Şirket kurulumu için hangi belgelere ihtiyaç vardır?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Şirket kurulumu için gerekli belgeler şirket türüne göre değişiklik gösterir. Genel olarak,
                  kurucuların kimlik bilgileri, şirket ana sözleşmesi, şirket sermayesinin ödendiğine dair banka
                  dekontu, şirket merkezinin kira sözleşmesi veya tapu örneği, imza beyannameleri ve vergi dairesine
                  başvuru için gerekli formlar hazırlanmalıdır. Şirket kurulumu sürecinde bir avukattan destek almanız,
                  işlemlerin hızlı ve doğru şekilde tamamlanmasını sağlayacaktır.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Gayrimenkul alım-satımında dikkat edilmesi gereken hususlar nelerdir?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Gayrimenkul alım-satımında, taşınmazın tapu kaydının incelenmesi, üzerinde ipotek, haciz, şerh gibi
                  kısıtlamaların olup olmadığının kontrol edilmesi, imar durumunun öğrenilmesi, belediye ve tapu
                  dairesindeki kayıtların incelenmesi önemlidir. Ayrıca, alım-satım sözleşmesinin detaylı şekilde
                  hazırlanması, ödeme planının ve tapu devir şartlarının açıkça belirtilmesi gerekir. Bu süreçte bir
                  avukattan destek almanız, olası riskleri minimize etmenize yardımcı olacaktır.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Velayet davalarında hangi kriterler göz önünde bulundurulur?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Velayet davalarında mahkemeler, çocuğun üstün yararını göz önünde bulundurarak karar verir. Bu
                  kapsamda, ebeveynlerin ekonomik durumu, çocuğun bakım ve eğitim ihtiyaçlarını karşılama kapasitesi,
                  çocukla olan duygusal bağ, çocuğun yaşı ve tercihi (belirli bir yaştan sonra), ebeveynlerin ahlaki
                  değerleri ve yaşam tarzı gibi faktörler değerlendirilir. Mahkeme, gerekli gördüğü durumlarda sosyal
                  inceleme raporu ve pedagog raporu da talep edebilir.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Hukuki süreçler hakkında nasıl bilgi alabilirim?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Hukuki süreçler hakkında bilgi almak için avukatınızla düzenli iletişim halinde olmanız önemlidir.
                  Büromuz, müvekkillerimize dava süreçleri hakkında düzenli bilgilendirme yapar ve gelişmelerden
                  haberdar eder. Ayrıca, e-Devlet üzerinden de dava dosyanızın durumunu takip edebilirsiniz. Herhangi
                  bir sorunuz olduğunda, ofisimizi telefonla arayabilir veya e-posta gönderebilirsiniz.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-600">Sorunuzun cevabını bulamadınız mı? Bizimle iletişime geçin.</p>
            <Button asChild className="mt-4 bg-red-600 hover:bg-red-700">
              <Link href="/iletisim">Bize Ulaşın</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
