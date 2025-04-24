"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import {
  Search,
  Building,
  Home,
  Phone,
  User,
  AlertTriangle,
} from "lucide-react";

// Definicje typów
type Fachowiec = {
  id: string;
  nazwa: string;
  adres: string;
  ocena: number;
  opinie: number;
  telefon: string;
  specialization: string;
  status?: string;
};

type DzielniceMap = {
  [miasto: string]: string[];
};

type CoordinatesMap = {
  [wojewodztwo: string]: { lat: number; lng: number };
};

type ApiResponse = {
  status: string;
  results?: PlaceResult[];
  error_message?: string;
};

type PlaceResult = {
  place_id?: string;
  name?: string;
  vicinity?: string;
  rating?: number;
  user_ratings_total?: number;
  business_status?: string;
  types?: string[];
};

// Lista województw w Polsce
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _wojewodztwa = [
  "dolnośląskie",
  "kujawsko-pomorskie",
  "lubelskie",
  "lubuskie",
  "łódzkie",
  "małopolskie",
  "mazowieckie",
  "opolskie",
  "podkarpackie",
  "podlaskie",
  "pomorskie",
  "śląskie",
  "świętokrzyskie",
  "warmińsko-mazurskie",
  "wielkopolskie",
  "zachodniopomorskie",
];

// Przykładowe dzielnice dla większych miast
const dzielnice: DzielniceMap = {
  Warszawa: [
    "Bemowo",
    "Białołęka",
    "Bielany",
    "Mokotów",
    "Ochota",
    "Praga-Południe",
    "Praga-Północ",
    "Rembertów",
    "Śródmieście",
    "Targówek",
    "Ursus",
    "Ursynów",
    "Wawer",
    "Wesoła",
    "Wilanów",
    "Włochy",
    "Wola",
    "Żoliborz",
  ],
  Kraków: [
    "Stare Miasto",
    "Grzegórzki",
    "Prądnik Czerwony",
    "Prądnik Biały",
    "Krowodrza",
    "Bronowice",
    "Zwierzyniec",
    "Dębniki",
    "Łagiewniki-Borek Fałęcki",
    "Swoszowice",
    "Podgórze Duchackie",
    "Bieżanów-Prokocim",
    "Podgórze",
    "Czyżyny",
    "Mistrzejowice",
    "Bieńczyce",
    "Wzgórza Krzesławickie",
    "Nowa Huta",
  ],
  Łódź: ["Bałuty", "Górna", "Polesie", "Śródmieście", "Widzew"],
  Wrocław: ["Fabryczna", "Krzyki", "Psie Pole", "Stare Miasto", "Śródmieście"],
  Poznań: ["Grunwald", "Jeżyce", "Nowe Miasto", "Stare Miasto", "Wilda"],
};

// Domyślne współrzędne dla map
const defaultCoordinates: CoordinatesMap = {
  mazowieckie: { lat: 52.2297, lng: 21.0122 }, // Warszawa
  małopolskie: { lat: 50.0647, lng: 19.945 }, // Kraków
  dolnośląskie: { lat: 51.1079, lng: 17.0385 }, // Wrocław
  wielkopolskie: { lat: 52.4064, lng: 16.9252 }, // Poznań
  łódzkie: { lat: 51.7592, lng: 19.456 }, // Łódź
};

// Współrzędne dla dzielnic miast
const dzielnicaCoordinates: {
  [miasto: string]: {
    [dzielnica: string]: { lat: number; lng: number };
  };
} = {
  Warszawa: {
    Bemowo: { lat: 52.2384, lng: 20.9082 },
    Białołęka: { lat: 52.3135, lng: 20.9652 },
    Bielany: { lat: 52.2892, lng: 20.9474 },
    Mokotów: { lat: 52.1926, lng: 21.0494 },
    Ochota: { lat: 52.2173, lng: 20.9843 },
    "Praga-Południe": { lat: 52.2433, lng: 21.0837 },
    "Praga-Północ": { lat: 52.2567, lng: 21.0373 },
    Rembertów: { lat: 52.2608, lng: 21.171 },
    Śródmieście: { lat: 52.232, lng: 21.0122 },
    Targówek: { lat: 52.2909, lng: 21.0463 },
    Ursus: { lat: 52.1979, lng: 20.8895 },
    Ursynów: { lat: 52.1423, lng: 21.055 },
    Wawer: { lat: 52.1864, lng: 21.1914 },
    Wesoła: { lat: 52.2363, lng: 21.2309 },
    Wilanów: { lat: 52.1594, lng: 21.0899 },
    Włochy: { lat: 52.1985, lng: 20.9304 },
    Wola: { lat: 52.2316, lng: 20.9705 },
    Żoliborz: { lat: 52.2682, lng: 20.9838 },
  },
  Kraków: {
    "Stare Miasto": { lat: 50.0598, lng: 19.9374 },
    Grzegórzki: { lat: 50.0644, lng: 19.9625 },
    "Prądnik Czerwony": { lat: 50.0894, lng: 19.9767 },
    "Prądnik Biały": { lat: 50.1, lng: 19.928 },
    Krowodrza: { lat: 50.0742, lng: 19.9164 },
    Bronowice: { lat: 50.0847, lng: 19.8939 },
    Zwierzyniec: { lat: 50.0545, lng: 19.8875 },
    Dębniki: { lat: 50.0361, lng: 19.9123 },
    "Łagiewniki-Borek Fałęcki": { lat: 50.027, lng: 19.944 },
    Swoszowice: { lat: 49.9982, lng: 19.9471 },
    "Podgórze Duchackie": { lat: 50.0119, lng: 19.9704 },
    "Bieżanów-Prokocim": { lat: 50.0058, lng: 20.0094 },
    Podgórze: { lat: 50.0375, lng: 19.9582 },
    Czyżyny: { lat: 50.0695, lng: 20.0105 },
    Mistrzejowice: { lat: 50.0942, lng: 20.0129 },
    Bieńczyce: { lat: 50.0881, lng: 20.0296 },
    "Wzgórza Krzesławickie": { lat: 50.1002, lng: 20.0536 },
    "Nowa Huta": { lat: 50.075, lng: 20.0539 },
  },
  Łódź: {
    Bałuty: { lat: 51.8047, lng: 19.4529 },
    Górna: { lat: 51.7292, lng: 19.4649 },
    Polesie: { lat: 51.7715, lng: 19.4155 },
    Śródmieście: { lat: 51.7754, lng: 19.4567 },
    Widzew: { lat: 51.755, lng: 19.5173 },
  },
  Wrocław: {
    Fabryczna: { lat: 51.1225, lng: 16.9752 },
    Krzyki: { lat: 51.0745, lng: 17.0213 },
    "Psie Pole": { lat: 51.1557, lng: 17.085 },
    "Stare Miasto": { lat: 51.1102, lng: 17.0326 },
    Śródmieście: { lat: 51.1193, lng: 17.0486 },
  },
  Poznań: {
    Grunwald: { lat: 52.3952, lng: 16.8889 },
    Jeżyce: { lat: 52.4169, lng: 16.899 },
    "Nowe Miasto": { lat: 52.3994, lng: 16.9643 },
    "Stare Miasto": { lat: 52.4088, lng: 16.9316 },
    Wilda: { lat: 52.3881, lng: 16.9219 },
  },
};

// Typy fachowców do wyszukiwania
const typy_fachowcow = [
  { id: "plumber", nazwa: "Hydraulik" },
  { id: "electrician", nazwa: "Elektryk" },
  { id: "locksmith", nazwa: "Ślusarz" },
  { id: "painter", nazwa: "Malarz" },
  { id: "general_contractor", nazwa: "Wykonawca ogólnobudowlany" },
  { id: "moving_company", nazwa: "Firma przeprowadzkowa" },
];

// Lista miast z dzielnicami
const miasta = Object.keys(dzielnice);

export default function ZnajdzFachowca() {
  const [miasto, setMiasto] = useState("");
  const [dzielnica, setDzielnica] = useState("");
  const [promien, setPromien] = useState(15);
  const [typFachowca, setTypFachowca] = useState("plumber");
  const [wyniki, setWyniki] = useState<Fachowiec[]>([]);
  const [ladowanie, setLadowanie] = useState(false);
  const [pokazDzielnice, setPokazDzielnice] = useState(false);
  const [blad, setBlad] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

  // Sprawdza, czy miasto jest duże i ma dzielnice
  useEffect(() => {
    if (miasto && dzielnice[miasto]) {
      setPokazDzielnice(true);
    } else {
      setPokazDzielnice(false);
      setDzielnica("");
    }
  }, [miasto]);

  // Funkcja do wyszukiwania fachowców
  const wyszukajFachowcow = async () => {
    setLadowanie(true);
    setWyniki([]);
    setBlad(null);
    setApiResponse(null);

    try {
      // Wybieramy współrzędne na podstawie miasta i dzielnicy (jeśli wybrana)
      let coords;
      let wojewodztwoMiasta = "";

      if (
        miasto &&
        dzielnica &&
        dzielnicaCoordinates[miasto] &&
        dzielnicaCoordinates[miasto][dzielnica]
      ) {
        // Jeśli wybrano dzielnicę, użyj jej współrzędnych
        coords = dzielnicaCoordinates[miasto][dzielnica];
        console.log(
          `Wyszukiwanie w okolicy dzielnicy ${dzielnica}: ${coords.lat},${coords.lng}`
        );

        // Ustalamy województwo na podstawie miasta
        if (miasto === "Warszawa") wojewodztwoMiasta = "mazowieckie";
        else if (miasto === "Kraków") wojewodztwoMiasta = "małopolskie";
        else if (miasto === "Wrocław") wojewodztwoMiasta = "dolnośląskie";
        else if (miasto === "Poznań") wojewodztwoMiasta = "wielkopolskie";
        else if (miasto === "Łódź") wojewodztwoMiasta = "łódzkie";
        else wojewodztwoMiasta = "mazowieckie";
      } else {
        // W przeciwnym razie użyj współrzędnych miasta
        wojewodztwoMiasta =
          Object.keys(defaultCoordinates).find(
            (woj) =>
              defaultCoordinates[woj] &&
              ((woj === "mazowieckie" && miasto === "Warszawa") ||
                (woj === "małopolskie" && miasto === "Kraków") ||
                (woj === "dolnośląskie" && miasto === "Wrocław") ||
                (woj === "wielkopolskie" && miasto === "Poznań") ||
                (woj === "łódzkie" && miasto === "Łódź"))
          ) || "mazowieckie";

        coords = defaultCoordinates[wojewodztwoMiasta] || {
          lat: 52.0693,
          lng: 19.4803,
        };
        console.log(
          `Wyszukiwanie w okolicy miasta ${miasto}: ${coords.lat},${coords.lng}`
        );
      }

      // Przygotowanie danych do wysłania do API
      const searchParams = {
        location: `${coords.lat},${coords.lng}`,
        radius: promien * 1000,
        type: typFachowca,
        keyword: dzielnica
          ? `${typFachowca} ${dzielnica} ${miasto}`
          : `${typFachowca} ${miasto}`,
      };

      console.log("Parametry wyszukiwania:", searchParams);

      // Endpoint API w Next.js
      const backendUrl = `/api/znajdz-fachowca`;

      try {
        const response = await fetch(backendUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(searchParams),
        });

        if (!response.ok) {
          const errorData = (await response.json()) as { error: string };
          throw new Error(errorData.error || `Błąd HTTP: ${response.status}`);
        }

        const data = (await response.json()) as ApiResponse;
        setApiResponse(data); // Zapisujemy surową odpowiedź z API dla debugowania

        // Sprawdzenie statusu odpowiedzi Google API
        if (data.status === "ZERO_RESULTS") {
          setBlad(
            `Nie znaleziono fachowców w okolicy dla zapytania "${typFachowca} ${miasto}". Spróbuj zmienić parametry wyszukiwania lub zwiększyć promień.`
          );
          setLadowanie(false);
          return;
        }

        if (data.status !== "OK") {
          setBlad(
            `Google API zwróciło status: ${data.status}. ${
              data.error_message || ""
            }`
          );
          setLadowanie(false);
          return;
        }

        // Przekształcamy dane z Google Places API na nasz format
        if (data.results && data.results.length > 0) {
          const typPolski =
            typy_fachowcow.find((t) => t.id === typFachowca)?.nazwa ||
            "Fachowiec";

          const wynikiFachowcow = data.results.map(
            (result: PlaceResult, index: number) => {
              // Filtrujemy typy usług, które są istotne
              const typyUslug =
                result.types
                  ?.filter(
                    (type: string) =>
                      type !== "establishment" && type !== "point_of_interest"
                  )
                  .map((type: string) => {
                    const foundType = typy_fachowcow.find((t) => t.id === type);
                    return foundType ? foundType.nazwa : type;
                  })
                  .join(", ") || typPolski;

              return {
                id: result.place_id || `result-${index}`,
                nazwa: result.name || `${typPolski} (brak nazwy)`,
                adres: result.vicinity || `${miasto}, ${wojewodztwoMiasta}`,
                ocena: result.rating || 0,
                opinie: result.user_ratings_total || 0,
                telefon: "+48 (pokaż profil)",
                specialization: typyUslug || typPolski,
                status:
                  result.business_status === "OPERATIONAL"
                    ? "Dostępny"
                    : "Niedostępny",
              };
            }
          );

          setWyniki(wynikiFachowcow);

          // Informacja o liczbie znalezionych fachowców
          if (wynikiFachowcow.length === 0) {
            setBlad(
              "Nie znaleziono żadnych wyników, spróbuj zmienić parametry wyszukiwania."
            );
          }
        } else {
          setBlad("Otrzymano nieprawidłowy format danych z API. Brak wyników.");
        }
      } catch (error: unknown) {
        console.error("Błąd podczas wywołania API:", error);
        setBlad(
          `Błąd podczas komunikacji z API: ${
            error instanceof Error ? error.message : String(error)
          }`
        );
      } finally {
        setLadowanie(false);
      }
    } catch (error: unknown) {
      console.error("Błąd podczas wyszukiwania:", error);
      setBlad(
        `Wystąpił błąd: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
      setLadowanie(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-white to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Znajdź <span className="text-primary">fachowca</span> w Twojej
              okolicy
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Wybierz miasto i typ usługi, aby znaleźć sprawdzonych fachowców w
              promieniu {promien} km.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Miasto
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Building className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
                    value={miasto}
                    onChange={(e) => setMiasto(e.target.value)}
                  >
                    <option value="">Wybierz miasto</option>
                    {miasta.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {pokazDzielnice && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dzielnica
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Home className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
                      value={dzielnica}
                      onChange={(e) => setDzielnica(e.target.value)}
                    >
                      <option value="">Wybierz dzielnicę</option>
                      {dzielnice[miasto]?.map((dziel: string) => (
                        <option key={dziel} value={dziel}>
                          {dziel}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Typ usługi
                </label>
                <div className="relative">
                  <select
                    className="block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
                    value={typFachowca}
                    onChange={(e) => setTypFachowca(e.target.value)}
                  >
                    {typy_fachowcow.map((typ) => (
                      <option key={typ.id} value={typ.id}>
                        {typ.nazwa}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Promień wyszukiwania
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="5"
                    value={promien}
                    onChange={(e) => setPromien(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5 km</span>
                    <span>{promien} km</span>
                    <span>50 km</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Button
                className="gap-2 px-10 py-6 text-lg"
                onClick={wyszukajFachowcow}
                disabled={!miasto || ladowanie}
              >
                {ladowanie ? (
                  <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full mr-2" />
                ) : (
                  <Search className="h-5 w-5" />
                )}
                {ladowanie ? "Wyszukiwanie..." : "Szukaj fachowców"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          {ladowanie ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary mx-auto"></div>
              <p className="mt-4 text-lg">
                Wyszukiwanie fachowców w okolicy {miasto}...
              </p>
            </div>
          ) : blad ? (
            <div className="text-center py-12 max-w-2xl mx-auto">
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <AlertTriangle className="h-10 w-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-medium text-orange-700 mb-2">
                  Uwaga
                </h3>
                <p className="text-orange-600">{blad}</p>
              </div>

              {wyniki.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-8 text-center">
                    Znaleziono {wyniki.length} fachowców
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wyniki.map((fachowiec) => (
                      <KartaFachowca key={fachowiec.id} fachowiec={fachowiec} />
                    ))}
                  </div>
                </div>
              )}

              {/* Przycisk do ponownego wyszukiwania */}
              <div className="mt-8">
                <Button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="gap-2"
                >
                  <Search className="h-4 w-4" />
                  Zmień parametry wyszukiwania
                </Button>
              </div>
            </div>
          ) : wyniki.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold mb-8 text-center">
                Znaleziono {wyniki.length} fachowców w okolicy {miasto}
                {dzielnica && `, dzielnica ${dzielnica}`}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wyniki.map((fachowiec) => (
                  <KartaFachowca key={fachowiec.id} fachowiec={fachowiec} />
                ))}
              </div>
            </>
          ) : (
            miasto && (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">
                  Wprowadź dane lokalizacji i kliknij &quot;Szukaj
                  fachowców&quot;, aby zobaczyć wyniki.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Komponent karty fachowca, aby uniknąć duplikacji kodu
function KartaFachowca({ fachowiec }: { fachowiec: Fachowiec }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {fachowiec.nazwa}
        </h3>
        <p className="text-gray-600 mb-4">{fachowiec.adres}</p>
        <p className="text-sm text-gray-500 mb-4">{fachowiec.specialization}</p>

        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(fachowiec.ocena)
                    ? "text-primary"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-600 ml-2">
            {fachowiec.ocena ? (
              <>
                {fachowiec.ocena.toFixed(1)}/5 ({fachowiec.opinie}
                {fachowiec.opinie === 1
                  ? " opinia"
                  : fachowiec.opinie > 1 && fachowiec.opinie < 5
                  ? " opinie"
                  : " opinii"}
                )
              </>
            ) : (
              "Brak ocen"
            )}
          </span>
        </div>

        <div className="mt-6 flex gap-3">
          <Button className="flex-1 gap-2">
            <Phone className="h-4 w-4" />
            Zadzwoń
          </Button>
          <Button variant="outline" className="flex-1 gap-2">
            <User className="h-4 w-4" />
            Profil
          </Button>
        </div>
      </div>
    </div>
  );
}
