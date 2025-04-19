import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo i dane kontaktowe - zwięzła wersja */}
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <h3 className="text-lg font-bold text-white mr-4">DOMIDO</h3>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-1" />
                <span className="mr-4">+48 500 600 700</span>
                <Mail className="h-4 w-4 mr-1" />
                <span>kontakt@domido.pl</span>
              </div>
            </div>
          </div>

          {/* Nawigacja - uproszczona wersja w logicznym porządku */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <Link
              href="#jak-to-dziala"
              className="hover:text-white transition-colors"
            >
              Jak to działa?
            </Link>
            <Link href="#cennik" className="hover:text-white transition-colors">
              Cennik
            </Link>
            <Link href="#faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Regulamin
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Polityka prywatności
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-4 pt-4 text-xs text-center text-gray-500">
          &copy; {currentYear} DOMIDO. Wszystkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
