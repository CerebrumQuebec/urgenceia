"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "@/contexts/TranslationContext";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { t, language } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (sectionId: string) => {
    const isHomePage = pathname === `/${language}` || pathname === "/";

    if (isHomePage) {
      // If we're on the homepage, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // If we're on another page, navigate to homepage with hash
      router.push(`/${language}#${sectionId}`);
    }

    setIsMobileMenuOpen(false);
  };

  // Handle hash-based navigation when page loads or pathname changes
  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the # symbol
    if (hash && (pathname === `/${language}` || pathname === "/")) {
      // Small delay to ensure the page is fully loaded
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [pathname, language]);

  // Check if we're on the homepage to show different navigation
  const isHomePage = pathname === `/${language}` || pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title - Clickable */}
          <div className="flex items-center">
            <Link
              href={`/${language}`}
              className="text-xl font-bold text-white hover:text-gray-300 transition-colors"
            >
              {t("site.title")}
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              // Homepage navigation - scroll to sections
              <>
                <button
                  onClick={() => handleNavigation("actions")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("navigation.actions")}
                </button>
                <button
                  onClick={() => handleNavigation("about")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("navigation.about")}
                </button>
                <button
                  onClick={() => handleNavigation("newsletter")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("navigation.newsletter") ||
                    (language === "fr" ? "Infolettre" : "Newsletter")}
                </button>
              </>
            ) : (
              // Other pages navigation - link to homepage sections
              <>
                <Link
                  href={`/${language}#actions`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("navigation.actions")}
                </Link>
                <Link
                  href={`/${language}#about`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("navigation.about")}
                </Link>
                <Link
                  href={`/${language}#newsletter`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("navigation.newsletter") ||
                    (language === "fr" ? "Infolettre" : "Newsletter")}
                </Link>
              </>
            )}
          </nav>

          {/* Right side items */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <LanguageToggle />
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isHomePage ? (
              // Homepage mobile navigation - scroll to sections
              <>
                <button
                  onClick={() => handleNavigation("actions")}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {t("navigation.actions")}
                </button>
                <button
                  onClick={() => handleNavigation("about")}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {t("navigation.about")}
                </button>
                <button
                  onClick={() => handleNavigation("newsletter")}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {t("navigation.newsletter") ||
                    (language === "fr" ? "Infolettre" : "Newsletter")}
                </button>
              </>
            ) : (
              // Other pages mobile navigation - link to homepage sections
              <>
                <Link
                  href={`/${language}#actions`}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("navigation.actions")}
                </Link>
                <Link
                  href={`/${language}#about`}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("navigation.about")}
                </Link>
                <Link
                  href={`/${language}#newsletter`}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("navigation.newsletter") ||
                    (language === "fr" ? "Infolettre" : "Newsletter")}
                </Link>
              </>
            )}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
