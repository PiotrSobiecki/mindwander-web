import Link from "next/link";
import { Menu, Facebook, Instagram } from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">DOMIDO</span>
          </Link>

          {/* Nawigacja desktopowa */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#jak-to-dziala"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Jak to działa
            </Link>
            <Link
              href="#dla-fachowcow"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Dla fachowców
            </Link>
            <Link
              href="#cennik"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Cennik
            </Link>
            <Link
              href="#faq"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="flex space-x-2 mr-4">
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
            <Button variant="outline">Zaloguj się</Button>
            <Button>Zarejestruj się</Button>
          </div>

          {/* Menu mobilne */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="#jak-to-dziala">Jak to działa</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#dla-fachowcow">Dla fachowców</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#cennik">Cennik</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#faq">FAQ</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="flex justify-between items-center"
              >
                <div className="flex space-x-2">
                  <a href="#" aria-label="Facebook">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#" className="font-medium">
                  Zaloguj się
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#" className="font-medium text-primary">
                  Zarejestruj się
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
