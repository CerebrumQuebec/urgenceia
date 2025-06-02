import { ReactNode } from "react";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { Language } from "@/translations";
import Header from "@/components/layout/Header";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: Language;
  }>;
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
