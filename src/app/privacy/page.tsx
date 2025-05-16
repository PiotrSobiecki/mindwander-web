import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeftIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-[#339af0] hover:text-[#1c7ed6] mb-8"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Powrót do strony głównej
            </Link>

            <h1 className="text-4xl font-bold mb-8 text-gray-900 flex items-center">
              <ShieldCheckIcon className="h-8 w-8 mr-3 text-[#1c7ed6]" />
              Polityka Prywatności MindWander
            </h1>

            <div className="prose prose-lg max-w-none">
              <div className="bg-[#d0ebff] bg-opacity-30 p-8 rounded-xl mb-12">
                <p className="text-xl text-gray-700">
                  <strong>
                    Rozszerzenie MindWander nie gromadzi, nie przechowuje ani
                    nie udostępnia żadnych danych osobowych użytkowników osobom
                    trzecim.
                  </strong>
                  Analizowane są jedynie treści przeglądanych stron w celu
                  generowania inspirujących sugestii.
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 text-[#1c7ed6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                Wprowadzenie
              </h2>
              <p className="text-gray-700 mb-6">
                Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób
                MindWander zbiera, używa i chroni dane podczas korzystania z
                naszego rozszerzenia do przeglądarki.
              </p>
              <p className="text-gray-700 mb-6">
                Dane te nie są przesyłane ani wykorzystywane w innych celach niż
                działanie rozszerzenia.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 text-[#1c7ed6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
                Jakie dane zbieramy
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Treść witryny
                  </h3>
                  <p className="text-gray-700">
                    Analizujemy tekst, tytuł i ewentualnie obrazy na
                    przeglądanych stronach internetowych w celu generowania
                    sugestii związanych z treścią.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Historia sugestii
                  </h3>
                  <p className="text-gray-700">
                    Zapisujemy historię wygenerowanych sugestii, aby zapewnić
                    lepsze doświadczenie użytkownika.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#d0ebff] to-[#a5d8ff] p-8 rounded-xl mb-12">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Zewnętrzne API
                </h3>
                <p className="text-gray-700">
                  Wszelkie zapytania do zewnętrznych API (OpenRouter, Google
                  Custom Search) są wykonywane wyłącznie w celu realizacji
                  funkcji rozszerzenia i nie zawierają danych umożliwiających
                  identyfikację użytkownika.
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 text-[#1c7ed6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
                Jak wykorzystujemy dane
              </h2>
              <p className="text-gray-700 mb-4">
                Zebrane dane wykorzystujemy wyłącznie w następujących celach:
              </p>
              <ul className="space-y-2 text-gray-800 mb-8">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-[#e7f5ff] flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <span className="text-[#1c7ed6] font-bold text-sm">✓</span>
                  </div>
                  <span>
                    Generowanie i personalizacja sugestii związanych z
                    treściami, które przeglądasz
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-[#e7f5ff] flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <span className="text-[#1c7ed6] font-bold text-sm">✓</span>
                  </div>
                  <span>
                    Ulepszanie funkcjonalności i wydajności Rozszerzenia
                  </span>
                </li>
              </ul>
              <p className="text-gray-700 mb-8">
                Dane nie są przesyłane ani wykorzystywane w innych celach niż
                działanie rozszerzenia i zapewnienie jego podstawowych funkcji.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 text-[#1c7ed6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.479m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
                Udostępnianie danych
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                <p className="text-gray-700 mb-4">
                  Zobowiązujemy się do następujących zasad w zakresie
                  udostępniania danych:
                </p>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#e7f5ff] flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <span className="text-[#1c7ed6] font-bold text-sm">
                        ✓
                      </span>
                    </div>
                    <span>
                      Nie sprzedajemy ani nie przesyłamy danych użytkowników
                      osobom trzecim
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#e7f5ff] flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <span className="text-[#1c7ed6] font-bold text-sm">
                        ✓
                      </span>
                    </div>
                    <span>
                      Nie używamy ani nie przesyłamy danych użytkowników w
                      celach niezwiązanych z jedynym przeznaczeniem produktu
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#e7f5ff] flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <span className="text-[#1c7ed6] font-bold text-sm">
                        ✓
                      </span>
                    </div>
                    <span>
                      Nie używamy ani nie przesyłamy danych użytkownika w celu
                      ustalania zdolności kredytowej lub udzielania pożyczek
                    </span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 text-[#1c7ed6]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                Przechowywanie i usuwanie danych
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                <p className="text-gray-700 mb-4">
                  Dane związane z funkcjonowaniem rozszerzenia są przechowywane
                  lokalnie w przeglądarce użytkownika.
                </p>
                <p className="text-gray-700 mb-0">
                  <strong>
                    Użytkownik może w każdej chwili usunąć historię sugestii i
                    ustawienia lokalnie zapisane w przeglądarce
                  </strong>{" "}
                  poprzez panel ustawień rozszerzenia lub usuwając rozszerzenie.
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 text-[#1c7ed6]"
                >
                  <path
                    strokeLinecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
                Kontakt
              </h2>
              <div className="bg-[#d0ebff] bg-opacity-30 p-6 rounded-lg mb-10">
                <p className="text-gray-700">
                  W przypadku pytań lub uwag dotyczących prywatności, prosimy o
                  kontakt poprzez{" "}
                  <a
                    href="https://github.com/PiotrSobiecki/MindWander"
                    className="text-[#1c7ed6] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    stronę GitHub projektu
                  </a>
                  .
                </p>
              </div>

              <p className="text-center text-sm text-gray-500 mt-12">
                Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
