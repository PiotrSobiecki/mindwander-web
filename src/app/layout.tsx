import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "MindWander - Odkrywaj poza swoją bańką informacyjną",
  description:
    "MindWander to rozszerzenie do przeglądarki, które proponuje nieoczywiste, zaskakujące połączenia między tematami, zachęcając do intelektualnej eksploracji. Wykorzystując sztuczną inteligencję, pomaga odkrywać nieoczekiwane powiązania między nauką, technologią, sztuką i filozofią.",
  keywords: [
    "AI",
    "eksploracja koncepcyjna",
    "sztuczna inteligencja",
    "nauka",
    "technologia",
    "sztuka",
    "filozofia",
    "powiązania",
    "odkrycia",
    "bańka informacyjna",
    "intelektualna eksploracja",
    "rozszerzenie przeglądarki",
  ],
  authors: [{ name: "MindWander Team" }],
  creator: "MindWander",
  publisher: "MindWander",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mindwander.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MindWander - Odkrywaj poza swoją bańką informacyjną",
    description:
      "MindWander to rozszerzenie do przeglądarki, które proponuje nieoczywiste, zaskakujące połączenia między tematami, zachęcając do intelektualnej eksploracji.",
    url: "https://mindwander.app",
    siteName: "MindWander",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MindWander - Odkrywaj poza swoją bańką informacyjną",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MindWander - Odkrywaj poza swoją bańkę informacyjną",
    description:
      "MindWander to rozszerzenie do przeglądarki, które proponuje nieoczywiste, zaskakujące połączenia między tematami, zachęcając do intelektualnej eksploracji.",
    images: ["/og-image.png"],
    creator: "@mindwander",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
