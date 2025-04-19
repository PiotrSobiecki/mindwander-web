import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AccessibilityWidget } from "@/components/ui/accessibility";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DOMIDO - Zamów fachowca jak pizzę",
  description:
    "Platforma do zamawiania usług domowych - sprzątanie, naprawy, hydraulik i wiele więcej. Znajdź sprawdzonego fachowca szybko i wygodnie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2ecc71" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={inter.className}>
        {children}
        <AccessibilityWidget />
      </body>
    </html>
  );
}
