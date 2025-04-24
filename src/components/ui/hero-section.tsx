import Image from "next/image";
import { Button } from "./button";
import { ArrowRight, Star, Download } from "lucide-react";
import Link from "next/link";

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

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Link href="/znajdz-fachowca" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="gap-2 w-full">
                  Znajdź fachowca
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="#pobierz-aplikacje" className="w-full sm:w-auto">
                <Button size="lg" className="gap-2 w-full">
                  <Download className="h-5 w-5" />
                  Pobierz aplikację
                </Button>
              </Link>
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
              <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-primary/10 z-10"></div>
              <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-secondary z-10"></div>
              <div className="absolute right-20 top-10 h-16 w-16 rounded-full bg-primary/20 z-10"></div>

              <div className="relative h-full w-full p-6 flex items-center justify-center z-20">
                <div className="relative w-full h-full max-w-[450px] mx-auto overflow-hidden rounded-3xl border-4 border-white shadow-lg">
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">
                      Aplikacja DOMIDO
                    </span>
                  </div>
                  <Image
                    src="/images/woman.png"
                    alt="Kobieta korzystająca z aplikacji DOMIDO"
                    fill
                    priority
                    className="object-cover"
                    style={{ borderRadius: "1.5rem" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
