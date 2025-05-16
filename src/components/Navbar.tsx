"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ClockIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-[#1c7ed6] hover:text-[#339af0] transition-colors"
            >
              MindWander
            </Link>
          </div>

          {/* Desktopowe menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/#features"
              className="text-gray-700 hover:text-[#339af0] transition-colors font-medium"
            >
              Funkcje
            </Link>
            <Link
              href="/how-it-works"
              className={`transition-colors font-medium ${
                pathname === "/how-it-works"
                  ? "text-[#1c7ed6]"
                  : "text-gray-700 hover:text-[#339af0]"
              }`}
            >
              Jak to działa
            </Link>
            <Link
              href="/install"
              className="text-gray-700 hover:text-[#339af0] transition-colors font-medium"
            >
              <span className="flex items-center">Instalacja</span>
            </Link>
            <button
              disabled
              className="text-[#339af0] border-2 border-[#339af0] rounded-md px-6 py-2 transition-colors font-medium cursor-not-allowed opacity-70"
            >
              Zaloguj się
            </button>
          </div>

          {/* Przycisk mobilnego menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobilne menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="pt-2 pb-4 space-y-1 px-4">
            <Link
              href="/#features"
              className="block py-3 text-gray-700 hover:bg-[#d0ebff] rounded-md px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Funkcje
            </Link>
            <Link
              href="/how-it-works"
              className={`block py-3 rounded-md px-4 ${
                pathname === "/how-it-works"
                  ? "text-[#1c7ed6] bg-[#d0ebff]"
                  : "text-gray-700 hover:bg-[#d0ebff]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Jak to działa
            </Link>
            <Link
              href="/install"
              className={`block py-3 rounded-md px-4 ${
                pathname === "/how-it-works"
                  ? "text-[#1c7ed6] bg-[#d0ebff]"
                  : "text-gray-700 hover:bg-[#d0ebff]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Instalacja
            </Link>
            <button
              disabled
              className="block py-3 text-[#339af0] rounded-md px-4 cursor-not-allowed opacity-70 w-full text-left"
            >
              Zaloguj się
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
