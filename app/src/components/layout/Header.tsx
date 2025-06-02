"use client";

import { useTranslation } from "@/contexts/TranslationContext";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">{t("site.title")}</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#actions"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("navigation.actions")}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("navigation.about")}
            </a>
          </nav>

          {/* Language Toggle */}
          <div className="flex items-center">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
