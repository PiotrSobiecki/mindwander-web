import { Search, CalendarClock, UserCheck, HomeIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import Link from "next/link";

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

        <div
          className="mt-16 md:mt-24 max-w-3xl mx-auto bg-secondary/50 rounded-xl p-6 lg:p-10"
          id="pobierz-aplikacje"
        >
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
                <Link
                  href="#"
                  className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.0519 12.4386C17.0387 9.60543 19.4383 8.2261 19.5347 8.16893C18.1673 6.11486 16.0363 5.83283 15.2852 5.80737C13.4841 5.61714 11.7362 6.88502 10.8219 6.88502C9.88851 6.88502 8.46023 5.82658 6.92356 5.85791C4.93329 5.88883 3.08389 7.03167 2.0772 8.77277C-0.00389048 12.3116 1.55337 17.5141 3.5393 20.3147C4.53317 21.6902 5.69749 23.2426 7.2086 23.1932C8.68162 23.139 9.24425 22.2622 11.0234 22.2622C12.7859 22.2622 13.313 23.1932 14.8509 23.1661C16.4324 23.139 17.4394 21.7597 18.3971 20.3761C19.5444 18.7908 19.9945 17.2357 20.0153 17.1615C19.9775 17.1487 17.0694 15.9325 17.0519 12.4386Z" />
                      <path d="M14.4918 3.73876C15.2909 2.74903 15.8247 1.39529 15.6825 0.0125732C14.5291 0.0623167 13.1046 0.810947 12.2739 1.77682C11.5323 2.63552 10.89 4.03082 11.0498 5.36813C12.3423 5.46134 13.6569 4.71405 14.4918 3.73876Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs leading-none">Pobierz z</span>
                    <span className="text-base font-semibold leading-tight">
                      App Store
                    </span>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.6603 7.06606L5.69846 0.385393C5.10537 0.042456 4.4373 -0.0771956 3.77907 0.0586096C3.12085 0.194415 2.51932 0.577718 2.07551 1.14544C1.63619 1.71038 1.38386 2.42527 1.36364 3.16723V20.8266C1.38386 21.5686 1.63619 22.2835 2.07551 22.8484C2.51932 23.4161 3.12085 23.7994 3.77907 23.9353C4.4373 24.071 5.10537 23.9514 5.69846 23.6085L17.6603 16.9339C18.2048 16.617 18.6527 16.1476 18.9498 15.5803C19.2468 15.013 19.3813 14.3722 19.3389 13.7321V10.268C19.3813 9.62786 19.2468 8.98703 18.9498 8.41974C18.6527 7.85244 18.2048 7.38296 17.6603 7.06606Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs leading-none">Pobierz z</span>
                    <span className="text-base font-semibold leading-tight">
                      Google Play
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-primary/10"></div>
              <div className="h-[300px] bg-gray-200 rounded-xl flex flex-col items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 w-full h-full flex flex-col">
                  <div className="h-14 bg-primary flex items-center justify-center text-white font-semibold">
                    DOMIDO App
                  </div>
                  <div className="flex-1 bg-gray-100 p-3">
                    <div className="bg-white rounded-lg shadow-sm p-3 mb-3 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                      <div className="h-8 w-12 rounded bg-primary/10"></div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-3 mb-3 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                      <div className="h-8 w-12 rounded bg-primary/10"></div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-3 mb-3 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-blue-200 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                      <div className="h-8 w-12 rounded bg-primary/10"></div>
                    </div>
                  </div>
                  <div className="h-12 bg-gray-200 border-t border-gray-300 flex items-center justify-around">
                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                    <div className="w-8 h-8 rounded-full bg-primary/50"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
