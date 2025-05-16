import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeftIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

export default function Terms() {
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
              <DocumentTextIcon className="h-8 w-8 mr-3 text-[#1c7ed6]" />
              Regulamin MindWander
            </h1>

            <div className="prose prose-lg max-w-none">
              <div className="bg-[#d0ebff] bg-opacity-30 p-6 rounded-xl mb-12">
                <p className="text-gray-700">
                  Korzystając z Rozszerzenia MindWander, użytkownik akceptuje
                  niniejszy Regulamin. Jeśli nie zgadzasz się z jakimkolwiek
                  postanowieniem Regulaminu, prosimy o nieinstalowanie lub
                  odinstalowanie Rozszerzenia.
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
                Informacje ogólne
              </h2>
              <p className="text-gray-700 mb-6">
                Niniejszy regulamin określa zasady korzystania z rozszerzenia
                przeglądarki MindWander ("Rozszerzenie"). Rozszerzenie jest
                udostępniane przez MindWander.
              </p>

              <div className="bg-gradient-to-r from-[#d0ebff] to-[#a5d8ff] p-8 rounded-xl mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
                    />
                  </svg>
                  Opis usługi
                </h2>
                <p className="text-gray-800">
                  MindWander to rozszerzenie do przeglądarki, które analizuje
                  przeglądane strony internetowe i sugeruje interesujące,
                  powiązane treści, aby poszerzać horyzonty użytkowników.
                  Rozszerzenie przetwarza treść przeglądanych stron (tekst,
                  tytuł i ewentualnie obrazy) oraz historię sugestii, aby
                  generować trafne rekomendacje.
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
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
                Warunki korzystania
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                <p className="text-gray-700 mb-4">
                  Rozszerzenie jest przeznaczone wyłącznie do użytku osobistego,
                  niekomercyjnego. Zabronione jest używanie Rozszerzenia do
                  celów niezgodnych z prawem lub naruszających prawa osób
                  trzecich.
                </p>
                <p className="text-gray-700 mb-0">
                  Użytkownik zobowiązuje się nie podejmować prób modyfikacji,
                  inżynierii wstecznej, dekompilacji lub dezasemblacji
                  Rozszerzenia.
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
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                Prywatność i dane użytkownika
              </h2>
              <p className="text-gray-700 mb-4">
                Rozszerzenie przetwarza następujące kategorie danych:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Treść witryny
                  </h3>
                  <p className="text-gray-700">
                    Tekst, tytuł i ewentualnie obrazy na przeglądanych stronach.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Historia online
                  </h3>
                  <p className="text-gray-700">
                    Historia sugestii lub analizowane odwiedzane strony.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Szczegółowe informacje na temat przetwarzania danych osobowych
                znajdują się w naszej{" "}
                <Link
                  href="/privacy"
                  className="text-[#1c7ed6] hover:underline"
                >
                  Polityce Prywatności
                </Link>
                .
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
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                Własność intelektualna
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                <p className="text-gray-700">
                  Wszelkie prawa własności intelektualnej związane z
                  Rozszerzeniem (w tym kod, grafiki, logo, znaki towarowe)
                  należą do MindWander lub ich odpowiednich właścicieli.
                  Rozszerzenie jest chronione prawami autorskimi i innymi
                  przepisami dotyczącymi własności intelektualnej.
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
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
                Ograniczenie odpowiedzialności
              </h2>
              <div className="bg-[#d0ebff] bg-opacity-30 p-6 rounded-lg mb-8">
                <p className="text-gray-700 mb-4">
                  Rozszerzenie jest dostarczane "tak jak jest", bez
                  jakichkolwiek gwarancji. W maksymalnym zakresie dozwolonym
                  przez prawo, MindWander nie ponosi odpowiedzialności za
                  jakiekolwiek szkody pośrednie, przypadkowe, specjalne,
                  wynikowe lub karne, które mogą wyniknąć z korzystania lub
                  niemożności korzystania z Rozszerzenia.
                </p>
                <p className="text-gray-700">
                  Nie gwarantujemy, że Rozszerzenie będzie zawsze działać
                  bezbłędnie lub nieprzerwanie. Zastrzegamy sobie prawo do
                  modyfikacji, zawieszenia lub zakończenia działania
                  Rozszerzenia w dowolnym momencie.
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
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                Zmiany w Regulaminie
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                <p className="text-gray-700">
                  Zastrzegamy sobie prawo do modyfikacji niniejszego Regulaminu
                  w dowolnym momencie. Zmiany wchodzą w życie z chwilą
                  opublikowania zaktualizowanej wersji Regulaminu. Kontynuacja
                  korzystania z Rozszerzenia po wprowadzeniu zmian oznacza
                  akceptację zaktualizowanego Regulaminu.
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
                  W przypadku pytań lub uwag dotyczących Rozszerzenia lub
                  niniejszego Regulaminu, prosimy o kontakt poprzez{" "}
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
