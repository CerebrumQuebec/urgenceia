import { ReactNode } from "react";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { Language } from "@/translations";
import Header from "@/components/layout/Header";
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
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">{children}</main>
      </div>
    </TranslationProvider>
  );
}
