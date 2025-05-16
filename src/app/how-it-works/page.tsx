import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function HowItWorks() {
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

            <h1 className="text-4xl font-bold mb-8 text-gray-900">
              Jak działa MindWander
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                MindWander to rozszerzenie do przeglądarki, które pobudza
                ciekawość i poszerza horyzonty podczas codziennego przeglądania
                internetu.
              </p>

              <p className="text-lg text-gray-700 mb-10">
                W przeciwieństwie do tradycyjnych algorytmów rekomendacji, które
                zamykają użytkownika w bańkach informacyjnych, MindWander działa
                odwrotnie — celowo proponuje zaskakujące, inspirujące połączenia
                między tematami, zachęcając do odkrywania nowych obszarów wiedzy
                i nieoczekiwanych powiązań.
              </p>

              <div className="bg-[#d0ebff] bg-opacity-30 p-8 rounded-xl mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
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
                      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                  Filozofia działania
                </h2>
                <p className="text-gray-700">
                  Inspiracją dla MindWander jest serendipity — sztuka
                  przypadkowego odkrywania wartościowych rzeczy, których się nie
                  szukało. Rozszerzenie powstało z potrzeby przełamania
                  algorytmicznej rutyny i otwarcia umysłu na coś nowego,
                  intrygującego, a czasem nawet niepokojąco odmiennego.
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
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
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
                  />
                </svg>
                Co robi MindWander?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Analizuje treść przeglądanej strony
                  </h3>
                  <p className="text-gray-700">
                    Rozszerzenie rozpoznaje, o czym jest strona, którą aktualnie
                    przeglądasz – niezależnie, czy to artykuł, blog, czy naukowy
                    esej.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Generuje kreatywne zapytania przy użyciu AI
                  </h3>
                  <p className="text-gray-700">
                    Na podstawie kontekstu MindWander tworzy niestandardowe,
                    często nieoczywiste pytania i powiązania tematyczne, które
                    mogą zainspirować Cię do dalszych poszukiwań.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Sugestie spoza bańki
                  </h3>
                  <p className="text-gray-700">
                    Otrzymujesz propozycje treści z różnych dziedzin – od nauki,
                    przez sztukę, aż po filozofię – które zaskakują i inspirują
                    do głębszego zastanowienia.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Delikatna obecność
                  </h3>
                  <p className="text-gray-700">
                    MindWander działa dyskretnie – pokazuje się jako subtelny
                    popup w prawym dolnym rogu ekranu, nie przeszkadzając w
                    standardowym przeglądaniu stron.
                  </p>
                </div>
              </div>

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
                      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                  Każda sugestia zawiera:
                </h2>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <span className="text-[#1c7ed6] font-bold text-sm">
                        ✓
                      </span>
                    </div>
                    <span>Tytuł poruszanego tematu</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <span className="text-[#1c7ed6] font-bold text-sm">
                        ✓
                      </span>
                    </div>
                    <span>
                      Krótkie wyjaśnienie, dlaczego ten temat może być
                      interesujący w kontekście strony, którą przeglądasz
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <span className="text-[#1c7ed6] font-bold text-sm">
                        ✓
                      </span>
                    </div>
                    <span>
                      Link do źródła, które możesz od razu otworzyć i zgłębić
                    </span>
                  </li>
                </ul>
              </div>

              <div className="italic text-xl text-center text-gray-700 mb-12 border-l-4 border-[#339af0] pl-6 py-2">
                MindWander to Twój cichy towarzysz intelektualnych podróży —
                poszerzający perspektywę i zachęcający do odkrywania
                nieoczekiwanego, jeden klik na raz.
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Link
                href="/install"
                className="btn-primary inline-flex items-center px-8 py-4 text-lg bg-[#339af0] hover:bg-[#1c7ed6] text-white rounded-md font-medium transition-colors duration-200 shadow-md"
              >
                Zainstaluj rozszerzenie
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
