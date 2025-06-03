"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "@/contexts/TranslationContext";
import LanguageToggle from "./LanguageToggle";
import Image from "next/image";
import DonateButton from "../DonationButton";

export default function Header() {
  const { t, language } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title - Clickable */}
          <div className="flex items-center">
            <Link
              href={`/${language}`}
              className="group relative flex items-center gap-3 text-xl font-bold text-white hover:text-gray-300 transition-all duration-300"
            >
              {/* Small logo */}
              <div className="w-8 h-8 relative opacity-80 group-hover:opacity-100 transition-opacity">
                <Image
                  src="/logo.png"
                  alt="UrgenceIA Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <span className="relative z-10 text-gradient bg-gradient-to-r from-blue-400 to-green-400">
                {t("site.title")}
              </span>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {isHomePage ? (
              // Homepage navigation - scroll to sections
              <>
                <button
                  onClick={() => handleNavigation("actions")}
                  className="relative text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 group"
                >
                  <span className="relative z-10">
                    {t("navigation.actions")}
                  </span>
                  <div className="absolute inset-0 bg-white/0 hover:bg-white/10 rounded-lg transition-all duration-300"></div>
                </button>
                <button
                  onClick={() => handleNavigation("about")}
                  className="relative text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 group"
                >
                  <span className="relative z-10">{t("navigation.about")}</span>
                  <div className="absolute inset-0 bg-white/0 hover:bg-white/10 rounded-lg transition-all duration-300"></div>
                </button>
                <button
                  onClick={() => handleNavigation("newsletter")}
                  className="relative text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 group"
                >
                  <span className="relative z-10">
                    {t("navigation.newsletter") ||
                      (language === "fr" ? "Infolettre" : "Newsletter")}
                  </span>
                  <div className="absolute inset-0 bg-white/0 hover:bg-white/10 rounded-lg transition-all duration-300"></div>
                </button>
              </>
            ) : (
              // Other pages navigation - link to homepage sections
              <>
                <Link
                  href={`/${language}#actions`}
                  className="relative text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 group"
                >
                  <span className="relative z-10">
                    {t("navigation.actions")}
                  </span>
                  <div className="absolute inset-0 bg-white/0 hover:bg-white/10 rounded-lg transition-all duration-300"></div>
                </Link>
                <Link
                  href={`/${language}#about`}
                  className="relative text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 group"
                >
                  <span className="relative z-10">{t("navigation.about")}</span>
                  <div className="absolute inset-0 bg-white/0 hover:bg-white/10 rounded-lg transition-all duration-300"></div>
                </Link>
                <Link
                  href={`/${language}#newsletter`}
                  className="relative text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 group"
                >
                  <span className="relative z-10">
                    {t("navigation.newsletter") ||
                      (language === "fr" ? "Infolettre" : "Newsletter")}
                  </span>
                  <div className="absolute inset-0 bg-white/0 hover:bg-white/10 rounded-lg transition-all duration-300"></div>
                </Link>
              </>
            )}
          </nav>

          {/* Right side items */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <DonateButton compact={true} />
            </div>

            <div className="hidden md:block">
              <LanguageToggle />
            </div>

            {/* CTA Button - desktop only */}
            <Link
              href={`/${language}/actions/loi-25`}
              className="hidden md:flex group relative items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <span className="relative z-10 text-sm">
                {language === "fr" ? "Agir" : "Act"}
              </span>
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/20 transition-all duration-300"
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

      {/* Mobile menu with glass effect */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden glass border-t border-white/10"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isHomePage ? (
              // Homepage mobile navigation - scroll to sections
              <>
                <button
                  onClick={() => handleNavigation("actions")}
                  className="text-gray-300 hover:bg-white/10 hover:text-white block px-3 py-2 rounded-lg text-base font-medium w-full text-left transition-all duration-300"
                >
                  {t("navigation.actions")}
                </button>
                <button
                  onClick={() => handleNavigation("about")}
                  className="text-gray-300 hover:bg-white/10 hover:text-white block px-3 py-2 rounded-lg text-base font-medium w-full text-left transition-all duration-300"
                >
                  {t("navigation.about")}
                </button>
                <button
                  onClick={() => handleNavigation("newsletter")}
                  className="text-gray-300 hover:bg-white/10 hover:text-white block px-3 py-2 rounded-lg text-base font-medium w-full text-left transition-all duration-300"
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
                  className="text-gray-300 hover:bg-white/10 hover:text-white block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("navigation.actions")}
                </Link>
                <Link
                  href={`/${language}#about`}
                  className="text-gray-300 hover:bg-white/10 hover:text-white block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("navigation.about")}
                </Link>
                <Link
                  href={`/${language}#newsletter`}
                  className="text-gray-300 hover:bg-white/10 hover:text-white block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("navigation.newsletter") ||
                    (language === "fr" ? "Infolettre" : "Newsletter")}
                </Link>
              </>
            )}

            {/* Mobile CTA Button */}
            <Link
              href={`/${language}/actions/loi-25`}
              className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {language === "fr" ? "Agir maintenant" : "Take Action"}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            {/* Mobile Donation Button */}
            <div className="mt-2">
              <DonateButton />
            </div>
          </div>
          <div className="pt-4 pb-3 border-t border-white/10">
            <div className="flex items-center px-5">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
