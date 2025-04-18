import { Button } from "./button";
import { ArrowRight, Download, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-white to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-primary font-medium text-sm">
              <Star className="h-4 w-4 mr-2" />
              <span>Najlepsi fachowcy w jednej aplikacji</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Zamów fachowca <span className="text-primary">jak pizzę</span>
            </h1>

            <p className="text-lg text-gray-700 md:text-xl">
              Sprzątanie, drobne naprawy, hydraulik i wiele więcej. Znajduj
              sprawdzonych fachowców szybko i wygodnie w aplikacji DOMIDO.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                Pobierz aplikację
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Znajdź fachowca
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-xs font-medium">U{i}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold">4.9/5</span>
                <span className="text-gray-600 ml-1">
                  od ponad 10 000 zadowolonych klientów
                </span>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] md:h-[550px]">
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-primary/10"></div>
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-secondary"></div>

              <div className="relative h-full w-full p-6 flex items-center justify-center">
                <div className="max-w-[280px] mx-auto">
                  <div className="w-full aspect-[9/16] bg-gray-200 rounded-xl mb-4 overflow-hidden relative">
                    {/* Tutaj będzie screenshot aplikacji - możesz zastąpić divem poniżej rzeczywistym obrazem */}
                    <div className="absolute inset-0 flex items-center justify-center text-lg font-medium text-gray-600">
                      [Aplikacja DOMIDO]
                    </div>
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
