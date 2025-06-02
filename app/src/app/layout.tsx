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
  openGraph: {
    type: "website",
    locale: "fr_CA",
    alternateLocale: "en_CA",
    siteName: "UrgenceIA",
    title: "UrgenceIA - Pour la souveraineté culturelle francophone",
    description:
      "Plateforme de mobilisation pour la souveraineté numérique et culturelle du Québec face à l'IA. Agissons contre le pillage algorithmique.",
  },
  twitter: {
    card: "summary_large_image",
    title: "UrgenceIA - Pour la souveraineté culturelle francophone",
    description:
      "Plateforme de mobilisation pour la souveraineté numérique et culturelle du Québec face à l'IA. Agissons contre le pillage algorithmique.",
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
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
