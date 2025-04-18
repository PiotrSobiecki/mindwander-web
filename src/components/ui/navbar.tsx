import Link from "next/link";
import { Menu } from "lucide-react";
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
