import { Search, CalendarClock, UserCheck, HomeIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

const steps = [
  {
    icon: Search,
    title: "Wybierz usługę",
    description:
      "Wybierz rodzaj usługi, której potrzebujesz. Od sprzątania po hydraulikę i drobne naprawy.",
  },
  {
    icon: CalendarClock,
    title: "Wybierz termin",
    description:
      "Wskaż dogodny termin. Możesz zamówić usługę nawet na ten sam dzień.",
  },
  {
    icon: UserCheck,
    title: "Wybierz fachowca",
    description:
      "Przeglądaj profile i opinie. Wybierz fachowca, który najlepiej spełnia Twoje oczekiwania.",
  },
  {
    icon: HomeIcon,
    title: "Ciesz się wykonaną usługą",
    description:
      "Fachowiec przyjedzie punktualnie i profesjonalnie wykona usługę. Płać tylko za efekty.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24" id="jak-to-dziala">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Jak działa <span className="text-primary">DOMIDO</span>?
          </h2>
          <p className="text-lg text-gray-700">
            Zamawianie usług domowych nigdy nie było prostsze. Kilka kliknięć
            dzieli Cię od profesjonalnej pomocy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-none shadow-lg shadow-gray-100/50 hover:shadow-xl transition-shadow"
            >
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6" />
                </div>
                <CardTitle className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-primary">
                    {index + 1}.
                  </span>
                  <span>{step.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 md:mt-24 max-w-3xl mx-auto bg-secondary/50 rounded-xl p-6 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Pobierz aplikację i rozpocznij już teraz
              </h3>
              <p className="text-gray-700 mb-6">
                Dostępna na urządzenia iOS i Android. Wszystkie usługi domowe w
                jednym miejscu.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex items-center justify-center bg-gray-900 text-white rounded-xl py-3 px-6 hover:bg-gray-800 transition-colors">
                  <span className="mr-2">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.0813 20.0652C19.6693 21.4067 19.9767 22.0652 19.5903 22.0652C19.2438 22.0652 18.6588 21.6473 17.7173 20.9477C16.6588 20.1552 16.2898 19.9196 15.9042 19.9196H8.09578C7.71018 19.9196 7.34119 20.1552 6.28269 20.9477C5.34119 21.6473 4.75615 22.0652 4.40963 22.0652C4.02328 22.0652 4.33069 21.4067 4.91868 20.0652C5.56585 18.6087 5.60963 17.9477 5.60963 16.0652V7.93478C5.60963 6.0523 5.56586 5.39131 4.91868 3.93478C4.33069 2.59331 4.02328 1.93478 4.40963 1.93478C4.75615 1.93478 5.34119 2.3527 6.28269 3.0523C7.34119 3.84478 7.71018 4.08044 8.09578 4.08044H15.9042C16.2898 4.08044 16.6588 3.84478 17.7173 3.0523C18.6588 2.3527 19.2438 1.93478 19.5903 1.93478C19.9767 1.93478 19.6693 2.59331 19.0813 3.93478C18.4341 5.39131 18.3903 6.0523 18.3903 7.93478V16.0652C18.3903 17.9477 18.4341 18.6087 19.0813 20.0652Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>App Store</span>
                </button>
                <button className="flex items-center justify-center bg-gray-900 text-white rounded-xl py-3 px-6 hover:bg-gray-800 transition-colors">
                  <span className="mr-2">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 7.5L17.5 16.5M12 3V21M5 16.5V7.5C5 6.83696 5.26339 6.20107 5.73223 5.73223C6.20107 5.26339 6.83696 5 7.5 5H16.5C17.163 5 17.7989 5.26339 18.2678 5.73223C18.7366 6.20107 19 6.83696 19 7.5V16.5C19 17.163 18.7366 17.7989 18.2678 18.2678C17.7989 18.7366 17.163 19 16.5 19H7.5C6.83696 19 6.20107 18.7366 5.73223 18.2678C5.26339 17.7989 5 17.163 5 16.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>Google Play</span>
                </button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-primary/10"></div>
              <div className="h-[300px] bg-gray-200 rounded-xl flex items-center justify-center text-lg font-medium text-gray-600">
                [Wizualizacja aplikacji]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
