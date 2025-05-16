import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-lg font-semibold text-[#1c7ed6]">
              MindWander
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link
              href="https://github.com/PiotrSobiecki/MindWander"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Regulamin
            </Link>
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Polityka prywatności
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center md:text-left text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MindWander. Wszystkie prawa
          zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
