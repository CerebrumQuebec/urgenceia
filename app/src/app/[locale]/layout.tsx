import { ReactNode } from "react";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { Language } from "@/translations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: Language;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Language }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const metadata: Metadata = {
    title: {
      default:
        locale === "fr"
          ? "UrgenceIA - Pour la souveraineté culturelle francophone"
          : "AI Emergency - For Francophone Cultural Sovereignty",
      template: locale === "fr" ? "%s | UrgenceIA" : "%s | AI Emergency",
    },
    description:
      locale === "fr"
        ? "Plateforme de mobilisation pour la souveraineté numérique et culturelle du Québec face à l'IA. Agissons contre le pillage algorithmique."
        : "Mobilization platform for Quebec's digital and cultural sovereignty regarding AI. Let's act against algorithmic pillaging.",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    openGraph: {
      locale: locale === "fr" ? "fr_CA" : "en_CA",
      alternateLocale: locale === "fr" ? "en_CA" : "fr_CA",
      title:
        locale === "fr"
          ? "UrgenceIA - Pour la souveraineté culturelle francophone"
          : "AI Emergency - For Francophone Cultural Sovereignty",
      description:
        locale === "fr"
          ? "Plateforme de mobilisation pour la souveraineté numérique et culturelle du Québec face à l'IA. Agissons contre le pillage algorithmique."
          : "Mobilization platform for Quebec's digital and cultural sovereignty regarding AI. Let's act against algorithmic pillaging.",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: locale === "fr" ? "UrgenceIA Logo" : "AI Emergency Logo",
        },
      ],
    },
    twitter: {
      title:
        locale === "fr"
          ? "UrgenceIA - Pour la souveraineté culturelle francophone"
          : "AI Emergency - For Francophone Cultural Sovereignty",
      description:
        locale === "fr"
          ? "Plateforme de mobilisation pour la souveraineté numérique et culturelle du Québec face à l'IA. Agissons contre le pillage algorithmique."
          : "Mobilization platform for Quebec's digital and cultural sovereignty regarding AI. Let's act against algorithmic pillaging.",
      images: ["/logo.png"],
    },
  };

  return metadata;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  return (
    <TranslationProvider initialLanguage={locale}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </div>
    </TranslationProvider>
  );
}
