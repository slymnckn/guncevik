import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <Image src="/images/logo-white.png" alt="Gün Çevik Hukuk" fill className="object-contain" />
              </div>
              <span className="text-lg font-bold">GÜN ÇEVİK HUKUK</span>
            </Link>
            <p className="mt-4 text-slate-300">
              Gün Çevik Hukuk Bürosu olarak, müvekkillerimize en yüksek kalitede hukuki hizmet sunmayı ilke ediniyoruz.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Hızlı Bağlantılar</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white hover:underline">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-slate-300 hover:text-white hover:underline">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz" className="text-slate-300 hover:text-white hover:underline">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sss" className="text-slate-300 hover:text-white hover:underline">
                  SSS
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-slate-300 hover:text-white hover:underline">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Hizmetlerimiz</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/hizmetlerimiz/ceza-hukuku" className="text-slate-300 hover:text-white hover:underline">
                  Ceza Hukuku
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/aile-hukuku" className="text-slate-300 hover:text-white hover:underline">
                  Aile Hukuku
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/ticaret-hukuku" className="text-slate-300 hover:text-white hover:underline">
                  Ticaret Hukuku
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/is-hukuku" className="text-slate-300 hover:text-white hover:underline">
                  İş Hukuku
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetlerimiz/gayrimenkul-hukuku"
                  className="text-slate-300 hover:text-white hover:underline"
                >
                  Gayrimenkul Hukuku
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetlerimiz/hukuki-danismanlik"
                  className="text-slate-300 hover:text-white hover:underline"
                >
                  Hukuki Danışmanlık
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">İletişim</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-2 h-5 w-5 text-red-500"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="text-slate-300">Konak Mahallesi 895. Sokak No:5 D:101 Konak İzmir</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-2 h-5 w-5 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <span className="text-slate-300">+90 542 825 0639</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-2 h-5 w-5 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span className="text-slate-300">guncevikhukuk@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Gün Çevik Hukuk Bürosu. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
