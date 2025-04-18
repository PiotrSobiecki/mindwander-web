import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo i informacje kontaktowe */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">DOMIDO</h3>
            <p className="text-gray-400">
              Platforma łącząca klientów z zaufanymi fachowcami, oferująca
              szeroki zakres usług domowych.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>ul. Przykładowa 42, 00-001 Warszawa</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+48 500 600 700</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>kontakt@domido.pl</span>
              </div>
            </div>
          </div>

          {/* Nawigacja */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Nawigacja</h4>
            <ul className="space-y-2">
              {[
                { label: "Strona główna", href: "/" },
                { label: "Jak to działa", href: "#jak-to-dziala" },
                { label: "Dla fachowców", href: "#dla-fachowcow" },
                { label: "Cennik", href: "#cennik" },
                { label: "Plan rozwoju", href: "#plan-rozwoju" },
                { label: "FAQ", href: "#faq" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kategorie usług */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">
              Kategorie usług
            </h4>
            <ul className="space-y-2">
              {[
                "Sprzątanie",
                "Hydraulika",
                "Elektryka",
                "Montaż mebli",
                "Remonty",
                "Przeprowadzki",
                "Usługi ogrodnicze",
                "Zobacz wszystkie",
              ].map((category, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter i social media */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">
              Bądź na bieżąco
            </h4>
            <p className="mb-4 text-gray-400">
              Zapisz się do newslettera, aby otrzymywać informacje o promocjach
              i nowych funkcjach.
            </p>

            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Twój adres e-mail"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                Zapisz
              </button>
            </div>

            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} DOMIDO. Wszystkie prawa zastrzeżone.
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">
              Polityka prywatności
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Warunki korzystania
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Polityka cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
