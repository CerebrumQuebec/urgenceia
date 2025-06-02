import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://urgenceia.org"),
  title: {
    default: "UrgenceIA - Pour la souveraineté culturelle francophone",
    template: "%s | UrgenceIA",
  },
  description:
    "Plateforme de mobilisation pour la souveraineté numérique et culturelle du Québec face à l'IA. Agissons contre le pillage algorithmique.",
  keywords: [
    "IA",
    "intelligence artificielle",
    "Québec",
    "souveraineté numérique",
    "culture",
    "données",
    "protection",
    "Loi 25",
  ],
  authors: [{ name: "UrgenceIA" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    alternateLocale: "en_CA",
    siteName: "UrgenceIA",
    title: "UrgenceIA - Pour la souveraineté culturelle francophone",
    description:
      "Plateforme de mobilisation pour la souveraineté numérique et culturelle du Québec face à l'IA. Agissons contre le pillage algorithmique.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "UrgenceIA Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UrgenceIA - Pour la souveraineté culturelle francophone",
    description:
      "Plateforme de mobilisation pour la souveraineté numérique et culturelle du Québec face à l'IA. Agissons contre le pillage algorithmique.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
