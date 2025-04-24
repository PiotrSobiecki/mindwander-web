# DOMIDO - Aplikacja do zamawiania fachowców jak pizzę

## Integracja z Google Maps Places API

Projekt DOMIDO wykorzystuje Google Maps Places API do wyszukiwania fachowców w określonej lokalizacji. Aby poprawnie skonfigurować API:

1. Utwórz projekt w [Google Cloud Console](https://console.cloud.google.com/)
2. Włącz Places API dla swojego projektu
3. Utwórz klucz API i ogranicz go do Places API
4. Ustaw odpowiednie ograniczenia dla klucza API (domeny, adresy IP)
5. Umieść klucz API w zmiennych środowiskowych projektu

### Konfiguracja zmiennych środowiskowych

Utwórz plik `.env.local` w głównym katalogu projektu i dodaj następujące zmienne:

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=twój_klucz_api
```

### Dodatkowe informacje

- Google Maps Places API wymaga włączenia płatności w projekcie Google Cloud
- Istnieją limity darmowego użycia API, po których przekroczeniu naliczane są opłaty
- Warto monitorować użycie API w konsoli Google Cloud, aby uniknąć nieoczekiwanych kosztów

## Uruchomienie projektu

```bash
# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce, aby zobaczyć aplikację.

## Funkcje aplikacji

- Wyszukiwanie fachowców w określonej lokalizacji
- Filtrowanie wyników według typu usługi
- Wyświetlanie ocen i opinii o fachowcach
- Możliwość kontaktu z wybranymi fachowcami

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
