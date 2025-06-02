"use client";

import { useTranslation } from "@/contexts/TranslationContext";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageToggle() {
  const { language, setLanguage } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLanguage = language === "fr" ? "en" : "fr";
    setLanguage(newLanguage);

    // Update URL to reflect new language
    const newPath = pathname.replace(`/${language}`, `/${newLanguage}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
      aria-label={`Switch to ${language === "fr" ? "English" : "Français"}`}
    >
      <span className="mr-2">🌐</span>
      {language === "fr" ? "EN" : "FR"}
    </button>
  );
}
