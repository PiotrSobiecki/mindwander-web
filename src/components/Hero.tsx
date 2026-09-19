import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

// Math.random() w renderze łamie regułę czystości Reacta i daje inny obrazek
// przy każdym buildzie. Ziarno jest stałe, więc grafika też.
function seeded(seed: number) {
  let t = seed;
  return () => {
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = seeded(0x4d696e64);
const round = (n: number) => Math.round(n * 100) / 100;

const CIRCLES = Array.from({ length: 20 }, () => ({
  cx: round(100 + rand() * 200),
  cy: round(100 + rand() * 200),
  r: round(5 + rand() * 10),
  opacity: round(0.3 + rand() * 0.7),
}));

const LINES = Array.from({ length: 30 }, () => ({
  x1: round(50 + rand() * 300),
  y1: round(50 + rand() * 300),
  x2: round(50 + rand() * 300),
  y2: round(50 + rand() * 300),
  opacity: round(0.1 + rand() * 0.4),
}));

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
                aria-hidden="true"
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
                  {CIRCLES.map((c, i) => (
                    <circle
                      key={`circle-${i}`}
                      cx={c.cx}
                      cy={c.cy}
                      r={c.r}
                      opacity={c.opacity}
                    />
                  ))}
                  {LINES.map((l, i) => (
                    <line
                      key={`line-${i}`}
                      x1={l.x1}
                      y1={l.y1}
                      x2={l.x2}
                      y2={l.y2}
                      opacity={l.opacity}
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
