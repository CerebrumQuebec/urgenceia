"use client";

import { useTranslation } from "@/contexts/TranslationContext";
import { actions } from "@/data/actions";
import ActionCard from "@/components/actions/ActionCard";

export default function ActionsOverview() {
  const { t, language } = useTranslation();

  // Include both ready and in-progress actions as "available"
  const availableActions = actions.filter(
    (action) => action.status === "ready" || action.status === "in-progress"
  );
  const comingSoonActions = actions.filter(
    (action) => action.status === "coming-soon"
  );

  return (
    <section
      id="actions"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-br from-green-950/20 to-emerald-950/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-br from-blue-950/20 to-indigo-950/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            <span className="text-gradient bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
              {t("actions.title") ||
                "Les 7 actions pour la souveraineté numérique"}
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-1">
            {t("actions.subtitle") ||
              "Un plan d'action concret pour protéger notre patrimoine culturel contre le pillage algorithmique"}
          </p>
        </div>

        {/* Enhanced Progress Overview */}
        <div className="mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-base font-semibold text-white flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
                {t("actions.progress") || "Progression"}
              </span>
              <span className="text-base text-gray-300 font-medium">
                {availableActions.length}/{actions.length}{" "}
                {language === "fr"
                  ? "actions disponibles"
                  : "actions available"}
              </span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 h-3 rounded-full transition-all duration-700 animate-gradient relative"
                style={{
                  width: `${(availableActions.length / actions.length) * 100}%`,
                }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="text-sm text-gray-400">
                {language === "fr"
                  ? `${Math.round(
                      (availableActions.length / actions.length) * 100
                    )}% du plan d'action déployé`
                  : `${Math.round(
                      (availableActions.length / actions.length) * 100
                    )}% of action plan deployed`}
              </span>
            </div>
          </div>
        </div>

        {/* Available Actions (Ready + In Progress) */}
        {availableActions.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3 animate-fade-in-delay-3">
              <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-1 max-w-xs"></div>
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
                {t("actions.current") || "Actions disponibles"}
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 max-w-xs"></div>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableActions.map((action, index) => (
                <div
                  key={action.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <ActionCard action={action} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Coming Soon Actions */}
        {comingSoonActions.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3 animate-fade-in-delay-4">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent flex-1 max-w-xs"></div>
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                {t("actions.coming") || "Prochainement"}
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent flex-1 max-w-xs"></div>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comingSoonActions.map((action, index) => (
                <div
                  key={action.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <ActionCard action={action} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced Call to Action */}
        <div className="mt-16 text-center animate-fade-in-delay-5">
          <div className="glass rounded-3xl p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {language === "fr"
                ? "Prêt à faire la différence?"
                : "Ready to make a difference?"}
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              {t("actions.cta.text") ||
                "Rejoignez le mouvement pour la souveraineté numérique du Québec"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#loi-25"
                className="group relative bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t("actions.cta.primary") || "Signer la lettre ouverte"}
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                </span>
              </a>
              <a
                href="#newsletter"
                className="group glass hover:bg-white/10 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  {t("actions.cta.secondary") || "Recevoir les mises à jour"}
                  <svg
                    className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
