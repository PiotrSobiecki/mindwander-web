import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  ArrowLeftIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function Install() {
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

            <h1 className="text-4xl font-bold mb-6 text-gray-900">
              Instalacja MindWander
            </h1>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-yellow-800">
                    Uwaga: Tylko dla zaawansowanych użytkowników
                  </p>
                  <p className="text-yellow-700 mt-1">
                    Rozszerzenie MindWander jest obecnie w fazie rozwoju i nie
                    jest jeszcze dostępne do oficjalnej instalacji poprzez sklep
                    Chrome Web Store. Poniższe instrukcje są przeznaczone dla
                    programistów i zaawansowanych użytkowników, którzy chcą
                    przetestować rozszerzenie w trybie deweloperskim.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Technologie
              </h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>TypeScript</li>
                <li>Chrome Extensions API</li>
                <li>OpenRouter API (dostęp do zaawansowanych modeli AI)</li>
                <li>Google Custom Search API</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 mt-10 text-gray-900">
                Wymagania
              </h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Node.js i npm</li>
                <li>Przeglądarka oparta na Chromium (Chrome, Edge, itp.)</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 mt-10 text-gray-900">
                Kroki instalacji
              </h2>
              <ol className="list-decimal pl-6 mb-6 space-y-4">
                <li>
                  <p className="font-semibold">Sklonuj repozytorium:</p>
                  <pre className="bg-gray-100 rounded p-3 overflow-x-auto">
                    <code>
                      git clone https://github.com/PiotrSobiecki/MindWander.git
                      cd MindWander
                    </code>
                  </pre>
                </li>
                <li>
                  <p className="font-semibold">Zainstaluj zależności:</p>
                  <pre className="bg-gray-100 rounded p-3 overflow-x-auto">
                    <code>npm install</code>
                  </pre>
                </li>
                <li>
                  <p className="font-semibold">Stwórz plik konfiguracyjny:</p>
                  <pre className="bg-gray-100 rounded p-3 overflow-x-auto">
                    <code>cp src/config.ts_example.ts src/config.ts</code>
                  </pre>
                </li>
                <li>
                  <p className="font-semibold">
                    Edytuj src/config.ts i dodaj swoje klucze API:
                  </p>
                  <ul className="list-disc pl-6 mb-2">
                    <li>Klucz OpenRouter API lub OPENAI</li>
                    <li>Klucz Google Custom Search API</li>
                    <li>Klucz Google CX</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-2">
                    (Klucze API są wymagane do działania funkcji wyszukiwania i
                    generowania treści przez sztuczną inteligencję)
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Zbuduj rozszerzenie:</p>
                  <pre className="bg-gray-100 rounded p-3 overflow-x-auto">
                    <code>npm run build</code>
                  </pre>
                </li>
                <li>
                  <p className="font-semibold">
                    Zainstaluj rozszerzenie w Chrome:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Otwórz chrome://extensions/</li>
                    <li>Włącz "Tryb dewelopera"</li>
                    <li>Kliknij "Wczytaj rozpakowane"</li>
                    <li>Wybierz folder dist z tego repozytorium</li>
                  </ul>
                </li>
              </ol>

              <h2 className="text-2xl font-semibold mb-4 mt-10 text-gray-900">
                Użytkowanie
              </h2>
              <p className="mb-4">
                Po zainstalowaniu, MindWander działa w tle podczas przeglądania
                stron internetowych. Będzie analizować zawartość stron, a
                następnie prezentować inspirujące sugestie w formie dyskretnego
                popup'u w prawym dolnym rogu.
              </p>
              <p className="mb-6">Każda sugestia zawiera:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Tytuł</li>
                <li>
                  Krótki opis wyjaśniający nieoczywisty związek z przeglądaną
                  treścią
                </li>
                <li>Link do źródła, które można otworzyć w nowej karcie</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 mt-10 text-gray-900">
                Rozwój
              </h2>
              <p className="mb-4">
                Aby pracować nad rozszerzeniem w trybie deweloperskim:
              </p>
              <pre className="bg-gray-100 rounded p-3 overflow-x-auto mb-6">
                <code>npm run dev</code>
              </pre>
              <p>
                To uruchomi budowanie w trybie watch, automatycznie rekompilując
                kod po każdej zmianie.
              </p>

              <div className="bg-[#d0ebff] p-6 rounded-lg mt-10 mb-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Kiedy będzie oficjalna wersja?
                </h3>
                <p className="text-gray-800">
                  Pracujemy nad przygotowaniem rozszerzenia do publikacji w
                  Chrome Web Store. Jeśli chcesz otrzymać powiadomienie, gdy
                  oficjalna wersja będzie dostępna, skontaktuj się z nami na{" "}
                  <a
                    href="mailto:info@mind-wander.org"
                    className="text-[#1c7ed6] hover:underline"
                  >
                    info@mind-wander.org
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
