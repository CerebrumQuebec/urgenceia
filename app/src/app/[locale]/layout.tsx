import { ReactNode } from "react";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { Language } from "@/translations";

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
      {children}
    </TranslationProvider>
  );
}
