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
    <section id="actions" className="py-16 bg-gray-900">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("actions.title") ||
              "Les 7 actions pour la souveraineté numérique"}
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {t("actions.subtitle") ||
              "Un plan d'action concret pour protéger notre patrimoine culturel contre le pillage algorithmique"}
          </p>
        </div>

        {/* Progress Overview */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-300">
              {t("actions.progress") || "Progression"}
            </span>
            <span className="text-sm text-gray-400">
              {availableActions.length}/{actions.length}{" "}
              {language === "fr" ? "disponibles" : "available"}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${(availableActions.length / actions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Available Actions (Ready + In Progress) */}
        {availableActions.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" />
              {t("actions.current") || "Actions disponibles"}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableActions.map((action) => (
                <ActionCard key={action.id} action={action} />
              ))}
            </div>
          </div>
        )}

        {/* Coming Soon Actions */}
        {comingSoonActions.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-500 rounded-full" />
              {t("actions.coming") || "Prochainement"}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comingSoonActions.map((action) => (
                <ActionCard key={action.id} action={action} />
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            {t("actions.cta.text") ||
              "Rejoignez le mouvement pour la souveraineté numérique du Québec"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#loi-25"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              {t("actions.cta.primary") || "Signer la lettre ouverte"}
            </a>
            <a
              href="#newsletter"
              className="border border-gray-600 hover:bg-gray-800 text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              {t("actions.cta.secondary") || "Recevoir les mises à jour"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
