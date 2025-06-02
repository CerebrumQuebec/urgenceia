"use client";

import { useTranslation } from "@/contexts/TranslationContext";

export default function Footer() {
  const { language } = useTranslation();

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border-t border-gray-800 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-cyan-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-500/5 to-pink-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container-narrow py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Company info */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">
                {language === "fr" ? "Propulsé par" : "Powered by"}
              </span>
              <a
                href="https://cerebrum.website/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 glass px-4 py-2 rounded-lg hover-lift transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                  Cérebrum
                </span>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">
                {language === "fr" ? "Supporté par" : "Supported by"}
              </span>
              <a
                href="https://quaribou.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 glass px-4 py-2 rounded-lg hover-lift transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <span className="text-white font-semibold group-hover:text-green-300 transition-colors">
                  Quaribou Culture
                </span>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-green-400 group-hover:translate-x-0.5 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Version and year */}
          <div className="flex items-center gap-6 text-center">
            <div className="glass px-4 py-2 rounded-lg">
              <span className="text-gray-400 text-sm font-mono">
                Version 0.1
              </span>
            </div>
            <div className="text-gray-400 text-sm font-mono">© 2025</div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-500 text-xs leading-relaxed">
              {language === "fr"
                ? "Plateforme de mobilisation pour la souveraineté numérique et culturelle du Québec"
                : "Mobilization platform for Quebec's digital and cultural sovereignty"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
