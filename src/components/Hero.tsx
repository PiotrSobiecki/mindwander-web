import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 tracking-tight">
            Odkrywaj poza swoją bańką informacyjną.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            MindWander to rozszerzenie do przeglądarki, które proponuje
            nieoczywiste, zaskakujące połączenia między tematami, zachęcając do
            intelektualnej eksploracji.
          </p>
          <div className="pt-6 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex items-center">
            <Link
              href="/install"
              className="btn-primary inline-flex items-center px-8 py-4 text-lg bg-[#339af0] hover:bg-[#1c7ed6] text-white rounded-md font-medium transition-colors duration-200 shadow-md"
            >
              Zainstaluj rozszerzenie
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/how-it-works"
              className="btn-secondary inline-flex items-center text-lg text-[#339af0] hover:text-[#1c7ed6] font-medium transition-colors duration-200 px-4 py-2 mt-4 sm:mt-0"
            >
              Jak to działa
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative p-4">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#d0ebff] to-[#339af0] opacity-75 blur-3xl animate-pulse"></div>
            <div className="relative bg-white rounded-full overflow-hidden border border-[#a5d8ff] shadow-lg p-6 aspect-square">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#d0ebff" />
                    <stop offset="100%" stopColor="#339af0" />
                  </linearGradient>
                </defs>
                <g fill="none" stroke="url(#gradient)" strokeWidth="2">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <circle
                      key={`circle-${i}`}
                      cx={100 + Math.random() * 200}
                      cy={100 + Math.random() * 200}
                      r={5 + Math.random() * 10}
                      opacity={0.3 + Math.random() * 0.7}
                    />
                  ))}
                  {Array.from({ length: 30 }).map((_, i) => (
                    <line
                      key={`line-${i}`}
                      x1={50 + Math.random() * 300}
                      y1={50 + Math.random() * 300}
                      x2={50 + Math.random() * 300}
                      y2={50 + Math.random() * 300}
                      opacity={0.1 + Math.random() * 0.4}
                    />
                  ))}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
