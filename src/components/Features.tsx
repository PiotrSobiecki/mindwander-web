import {
  MagnifyingGlassIcon,
  LightBulbIcon,
  LinkIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";

export default function Features() {
  const features = [
    {
      icon: <MagnifyingGlassIcon className="h-8 w-8 text-[#339af0]" />,
      title: "Analiza zawartości strony",
      description:
        "Automatyczne rozpoznawanie głównej treści przeglądanej strony.",
    },
    {
      icon: <LightBulbIcon className="h-8 w-8 text-[#339af0]" />,
      title: "Kreatywne wyszukiwanie",
      description:
        "Wykorzystanie AI do generowania nieoczywistych zapytań inspirowanych aktualnie przeglądaną treścią.",
    },
    {
      icon: <LinkIcon className="h-8 w-8 text-[#339af0]" />,
      title: "Odkrywanie nowych połączeń",
      description:
        "Wyświetlanie inspirujących sugestii z różnych dziedzin (nauka, sztuka, filozofia, itp.).",
    },
    {
      icon: <BellAlertIcon className="h-8 w-8 text-[#339af0]" />,
      title: "Nieinwazyjny interfejs",
      description:
        "Delikatne powiadomienia i elegancki popup, który nie zakłóca normalnego przeglądania.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Funkcje</h2>
          <p className="mt-4 text-xl text-gray-600">
            W przeciwieństwie do tradycyjnych algorytmów rekomendacji, które
            pogłębiają bańki informacyjne, MindWander celowo proponuje
            nieoczywiste połączenia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
