"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "@/translations";

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

interface TranslationProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

export function TranslationProvider({
  children,
  initialLanguage = "fr",
}: TranslationProviderProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = translations[language];

    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }

    return typeof value === "string" ? value : key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
