import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Figtree } from "next/font/google";
import bg from "../public/hero-bg.jpg";
import {
  CheckCircle,
  CheckCircle2,
  Eye,
  FileText,
  Glasses,
  LayoutDashboard,
  Pilcrow,
} from "lucide-react";
const inter = Inter({ subsets: ["latin"] });
const figtree = Figtree({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>AIKoncipient - čtení smluv pomocí umělé inteligence</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EHRPHCKZEG"
      />
      <Script src="https://cdn.volument.com/v1/volument-full.js" token="30248013af" />
      <Script id="ga" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-EHRPHCKZEG');
        `}
      </Script>
      <Script id="hotjar" strategy="afterInteractive">
        {`
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3416274,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `}
      </Script>
      <div className="antialiased">
        <header className="border-b border-b-gray-100 py-6 px-6 md:px-0">
          <div className="container mx-auto">
            <Link href="/">
              <Image
                src="./logo.svg"
                alt={"AIKoncipient logo"}
                width={160}
                height={30}
              />
            </Link>
          </div>
        </header>
        <main className={inter.className}>
          <div
            className="bg-cover bg-no-repeat bg-bottom"
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <div className="container mx-auto flex flex-col space-y-6 py-10 md:py-20 px-6 md:px-0">
              <div className="space-y-5">
                <h1
                  className={[
                    "text-4xl md:text-5xl font-bold max-w-2xl leading-tight",
                    figtree.className,
                  ].join(" ")}
                >
                  Nechte si přečíst smlouvu během několika vteřin
                </h1>
                <p className="text-xl max-w-prose leading-normal">
                  Umím během několika vteřin přečíst smlouvu a navrhnout místa
                  na které se zaměřit. Neumím však dávat právní rady.
                </p>
              </div>
              <div>
                <Link
                  href="https://app.koncipient.info"
                  className={[
                    "text-xl font-semibold bg-black text-white py-4 px-10 rounded-md block text-center transition shadow-xl",
                    "hover:bg-purple-800 hover:shadow-2xl",
                    "md:inline-block",
                    figtree.className,
                  ].join(" ")}
                >
                  Přečíst smlouvu
                </Link>
              </div>
              <div>
                <p className="opacity-50">
                  AI Koncipient je momentálně v{" "}
                  <span className="border border-gray-500 rounded inline-block px-2">
                    beta
                  </span>{" "}
                  verzi a testuje své schopnosti
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="container mx-auto py-10 px-6 md:px-0">
              <ul className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-10">
                <li className="text-xl font-semibold space-y-4 flex flex-col">
                  <div className="border w-16 h-16 rounded-md flex items-center justify-center border-gray-300 border-t-gray-200 border-l-gray-200 bg-white shadow-sm text-purple-800">
                    <FileText />
                  </div>
                  <div className="leading-normal max-w-sm">
                    AI Koncipient rychle analyzuje text
                  </div>
                </li>
                <li className="text-xl font-semibold space-y-4 flex flex-col">
                  <div className="border w-16 h-16 rounded-md flex items-center justify-center border-gray-300 border-t-gray-200 border-l-gray-200 bg-white shadow-sm text-purple-800">
                    <Glasses />
                  </div>
                  <div className="leading-normal max-w-sm">
                    AI Koncipient během několika vteřin přečte až 4000 znaků
                  </div>
                </li>
                <li className="text-xl font-semibold space-y-4 flex flex-col">
                  <div className="border w-16 h-16 rounded-md flex items-center justify-center border-gray-300 border-t-gray-200 border-l-gray-200 bg-white shadow-sm text-purple-800">
                    <LayoutDashboard />
                  </div>
                  <div className="leading-normal max-w-sm">
                    AI Koncipient vytvoří srozumitelný přehled problémů na které
                    během čtení narazil
                  </div>
                </li>
                <li className="text-xl font-semibold space-y-4 flex flex-col">
                  <div className="border w-16 h-16 rounded-md flex items-center justify-center border-gray-300 border-t-gray-200 border-l-gray-200 bg-white shadow-sm text-purple-800">
                    <Pilcrow />
                  </div>
                  <div className="leading-normal max-w-sm">
                    AI Koncipient nedává právní rady
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-20">
            <div className="container mx-auto px-6 space-y-10 md:space-y-0 md:px-0 md:flex md:space-x-5">
              <div className="rounded-2xl border w-full shadow-xl p-8 space-y-4 border-gray-300 border-l-gray-200 border-t-gray-200">
                <h2
                  className={["text-2xl font-semibold", figtree.className].join(
                    " "
                  )}
                >
                  Individuální čtení
                </h2>
                <div>
                  <p className="border border-green-600 bg-green-50 py-1 px-2 inline-block rounded font-semibold text-green-700">
                    20 Kč
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex space-x-2">
                    <CheckCircle2 />
                    <div>Až 4 000 znaků</div>
                  </li>
                  <li className="flex space-x-2">
                    <CheckCircle2 />
                    <div>Slabiny</div>
                  </li>
                  <li className="flex space-x-2">
                    <CheckCircle2 />
                    <div>Sumarizace</div>
                  </li>
                  <li className="flex space-x-2">
                    <CheckCircle2 />
                    <div>Návrhy úprav</div>
                  </li>
                </ul>
                <Link
                  href="https://app.koncipient.info"
                  className={[
                    "text-base font-semibold bg-black text-white py-2 px-5 rounded-md block text-center transition shadow-xl",
                    "hover:bg-purple-800 hover:shadow-2xl",
                    "md:inline-block",
                    figtree.className,
                  ].join(" ")}
                >
                  Přečíst smlouvu
                </Link>
              </div>
              <div className="rounded-2xl border w-full shadow-xl p-8 space-y-4 border-gray-300 border-l-gray-200 border-t-gray-200">
                <h2
                  className={["text-2xl font-semibold", figtree.className].join(
                    " "
                  )}
                >
                  Advokátní kancelář
                </h2>
                <p className="border border-gray-600 bg-gray-50 py-1 px-2 inline-block rounded font-semibold text-gray-700">
                  Individuální cena
                </p>
                <ul className="space-y-2">
                  <li className="flex space-x-2">
                    <CheckCircle2 />
                    <div>Neomezené znaky</div>
                  </li>
                  <li className="flex space-x-2">
                    <CheckCircle2 />
                    <div>Analýza po odstavcích</div>
                  </li>
                  <li className="flex space-x-2">
                    <CheckCircle2 />
                    <div>Učení AI koncipienta</div>
                  </li>
                </ul>
                <Link
                  href="mailto:info@koncipient.info"
                  className={[
                    "text-base font-semibold bg-gray-200 text-black py-2 px-5 rounded-md block text-center transition",
                    "hover:bg-purple-800 hover:text-white",
                    "md:inline-block",
                    figtree.className,
                  ].join(" ")}
                >
                  Kontaktujte nás
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 py-10 px-4 md:px-0 md:py-20">
            <div className="container mx-auto space-y-10">
              <div>
                <h2
                  className={[
                    "text-4xl md:text-5xl font-bold max-w-2xl leading-tight text-white",
                    figtree.className,
                  ].join(" ")}
                >
                  <Eye className="w-20 h-20" />
                  <div>Příklad analýzy</div>
                </h2>
              </div>
              <div className="md:flex">
                <div>
                  <div className="bg-white shadow-lg p-10">
                    <p>
                      Vzorová smlouva o dílo, běžně dostupná na internetu. Do
                      smlouvy nebyly vloženy žádné konkrétní údaje.
                    </p>
                  </div>
                </div>
                <div className="py-10 md:py-0">
                  <ul className="space-y-5 md:px-10">
                    <li className="text-white flex space-x-4">
                      <CheckCircle className="flex-shrink-0" />
                      <div className="max-w-prose">
                        Nepřesně definovaný předmět smlouvy - specifikace Díla
                        by měla být uvedena v samotné smlouvě, nikoliv v
                        příloze.
                      </div>
                    </li>
                    <li className="text-white flex space-x-4">
                      <CheckCircle className="flex-shrink-0" />
                      <div className="max-w-prose">
                        Nejasná formulace ohledně přenechání provádění Díla
                        třetím osobám - musí být jasně specifikováno, za jakých
                        okolností a pod jakými podmínkami může být Dílo
                        přenecháno subdodavatelům.
                      </div>
                    </li>
                    <li className="text-white flex space-x-4">
                      <CheckCircle className="flex-shrink-0" />
                      <div className="max-w-prose">
                        Neurčitý způsob určení ceny za Dílo - cena by měla být
                        specifikována konkrétně a podrobněji, než pouze jako
                        odhad nebo rozpočet.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-gray-900">
          <div className="container mx-auto">&copy; 2023 koncipient.info</div>
        </footer>
      </div>
    </>
  );
}
