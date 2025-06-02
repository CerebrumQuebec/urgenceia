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
      className="group relative inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10"
      aria-label={`Switch to ${language === "fr" ? "English" : "Français"}`}
    >
      <div className="relative">
        <span className="text-base group-hover:scale-110 transition-transform inline-block">
          🌐
        </span>
        {/* Pulse effect on hover */}
        <div className="absolute inset-0 rounded-full bg-blue-500/20 scale-150 opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></div>
      </div>
      <span className="font-semibold tracking-wide">
        {language === "fr" ? "EN" : "FR"}
      </span>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
    </button>
  );
}
