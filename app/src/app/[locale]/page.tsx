"use client";

import { useTranslation } from "@/contexts/TranslationContext";
import ActionsOverview from "@/components/sections/ActionsOverview";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Link from "next/link";

export default function HomePage() {
  const { t, language } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Dynamic gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20 animate-gradient"></div>

          {/* Floating orbs with better effects */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-full blur-3xl animate-float-delay"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>

          {/* Additional subtle particles */}
          <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-full blur-2xl animate-glow-pulse"></div>
          <div className="absolute bottom-1/3 right-1/2 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-blue-500/5 rounded-full blur-2xl animate-float"></div>
        </div>

        <div className="container-narrow py-16 text-center relative z-10">
          {/* Main Title with Enhanced Styling */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 leading-tight animate-gradient">
              {t("hero.title") || "Urgence IA"}
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div
                className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full animate-pulse"
                style={{ width: "100px" }}
              ></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              <div
                className="h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full animate-pulse"
                style={{ width: "100px" }}
              ></div>
            </div>
          </div>

          <p className="text-2xl md:text-4xl mb-8 text-white font-light animate-fade-in-delay-1 tracking-wide">
            {t("hero.subtitle") ||
              "Pour la souveraineté culturelle francophone"}
          </p>

          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-delay-2">
            {t("hero.description") ||
              "Les géants technologiques utilisent nos données culturelles pour entraîner leurs IA sans notre consentement. Il est temps d'agir."}
          </p>

          {/* Enhanced Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-delay-3">
            <Link
              href={`/${language}/actions/loi-25`}
              className="group relative bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white text-xl px-10 py-5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 overflow-hidden"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              <span className="relative z-10 flex items-center justify-center gap-3">
                {t("hero.cta.primary") || "Signer la lettre ouverte"}
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>

            <a
              href="#actions"
              className="group relative border-2 border-blue-500 hover:bg-blue-500 text-blue-400 hover:text-white text-xl px-10 py-5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden glass"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {t("hero.cta.secondary") || "Découvrir les actions"}
                <svg
                  className="w-6 h-6 group-hover:translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Improved Project Stats with glass morphism */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12 animate-fade-in-delay-4">
            <div className="group glass rounded-xl p-4 hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-green-400 to-emerald-400 mb-2 group-hover:scale-110 transition-transform">
                7
              </div>
              <div className="text-sm md:text-base text-gray-300">
                {language === "fr" ? "Actions concrètes" : "Concrete Actions"}
              </div>
            </div>
            <div className="group glass rounded-xl p-4 hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-blue-400 to-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                8.5M+
              </div>
              <div className="text-sm md:text-base text-gray-300">
                {language === "fr"
                  ? "Québécois concernés"
                  : "Quebecers Affected"}
              </div>
            </div>
            <div className="group glass rounded-xl p-4 hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-pink-400 mb-2 group-hover:scale-110 transition-transform">
                $B
              </div>
              <div className="text-sm md:text-base text-gray-300">
                {language === "fr" ? "Amendes possibles" : "Potential Fines"}
              </div>
            </div>
            <div className="group glass rounded-xl p-4 hover-lift">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform animate-float">
                🚀
              </div>
              <div className="text-sm md:text-base text-gray-300">
                {language === "fr" ? "Mouvement lancé" : "Movement Started"}
              </div>
            </div>
          </div>

          {/* Enhanced Urgency Banner */}
          <div className="mt-12 p-6 glass-dark rounded-2xl border-2 border-red-500/30 relative overflow-hidden animate-fade-in-delay-5 hover-lift">
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 animate-gradient blur-xl"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                <span className="text-red-400 font-bold text-lg uppercase tracking-wider">
                  {language === "fr" ? "URGENCE" : "URGENT"}
                </span>
                <div
                  className="w-3 h-3 bg-red-500 rounded-full animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
              <p className="text-white font-medium text-lg">
                {language === "fr"
                  ? "Chaque jour perdu nous rapproche d'un point de non-retour"
                  : "Every day lost brings us closer to a point of no return"}
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-delay-5">
          <a
            href="#actions"
            className="group text-gray-400 hover:text-white transition-all duration-300"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm opacity-75 group-hover:opacity-100 transition-opacity font-medium uppercase tracking-wider">
                {language === "fr" ? "Découvrir" : "Explore"}
              </span>
              <div className="relative">
                <svg
                  className="w-8 h-8 animate-bounce group-hover:text-green-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Actions Overview */}
      <ActionsOverview />

      {/* Enhanced About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-blue-950/30 to-purple-950/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container-narrow relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 animate-fade-in">
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400">
                {language === "fr"
                  ? "Pourquoi agir maintenant ?"
                  : "Why act now?"}
              </span>
            </h2>
            <div className="text-lg text-gray-300 leading-relaxed space-y-8">
              <div className="glass rounded-2xl p-8 hover-lift animate-fade-in-delay-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <p className="text-left">
                    {language === "fr"
                      ? "L'entraînement d'un modèle d'IA est un acte techniquement irréversible. Une fois nos données intégrées aux poids mathématiques de ces systèmes, il devient impossible d'en effacer précisément la trace."
                      : "Training an AI model is a technically irreversible act. Once our data is integrated into the mathematical weights of these systems, it becomes impossible to precisely erase its trace."}
                  </p>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 hover-lift animate-fade-in-delay-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <p className="text-left">
                    {language === "fr"
                      ? "Au Québec, la Loi 25 est particulièrement claire : tout usage commercial nouveau de renseignements personnels exige un consentement manifeste, libre et éclairé. Les sanctions peuvent atteindre 4% du chiffre d'affaires mondial."
                      : "In Quebec, Law 25 is particularly clear: any new commercial use of personal information requires manifest, free and informed consent. Sanctions can reach 4% of worldwide revenue."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
