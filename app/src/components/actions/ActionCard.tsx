import Link from "next/link";
import { useTranslation } from "@/contexts/TranslationContext";
import { Action } from "@/types/actions";

interface ActionCardProps {
  action: Action;
}

export default function ActionCard({ action }: ActionCardProps) {
  const { language } = useTranslation();

  const getStatusColor = (status: Action["status"]) => {
    switch (status) {
      case "ready":
        return "bg-green-500";
      case "in-progress":
        return "bg-blue-500";
      case "completed":
        return "bg-purple-500";
      case "coming-soon":
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: Action["status"]) => {
    switch (status) {
      case "ready":
        return language === "fr" ? "Prêt" : "Ready";
      case "in-progress":
        return language === "fr" ? "En cours" : "In Progress";
      case "completed":
        return language === "fr" ? "Terminé" : "Completed";
      case "coming-soon":
      default:
        return language === "fr" ? "Prochainement" : "Coming Soon";
    }
  };

  const getDifficultyText = (difficulty: string) => {
    const difficultyMap = {
      easy: language === "fr" ? "Facile" : "Easy",
      medium: language === "fr" ? "Moyen" : "Medium",
      hard: language === "fr" ? "Difficile" : "Hard",
    };
    return (
      difficultyMap[difficulty as keyof typeof difficultyMap] || difficulty
    );
  };

  const isClickable =
    action.status === "ready" || action.status === "in-progress";
  const isReady = action.status === "ready";

  const cardContent = (
    <div
      className={`p-6 rounded-xl transition-all duration-300 ${
        isReady
          ? "bg-gradient-to-br from-green-900/40 to-gray-800 border-2 border-green-500/50 shadow-lg shadow-green-500/20 hover:border-green-400 hover:shadow-green-400/30 cursor-pointer transform hover:scale-105"
          : isClickable
          ? "bg-gray-800 border border-gray-700 hover:bg-gray-750 hover:border-gray-600 cursor-pointer"
          : "bg-gray-800 border border-gray-700 opacity-75"
      }`}
    >
      {/* Ready Action Banner */}
      {isReady && (
        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
          {language === "fr" ? "DISPONIBLE!" : "AVAILABLE!"}
        </div>
      )}

      {/* Status Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${getStatusColor(action.status)} ${
              isReady ? "shadow-lg shadow-green-500/50" : ""
            }`}
          />
          <span
            className={`text-sm font-medium ${
              isReady ? "text-green-300" : "text-gray-300"
            }`}
          >
            {getStatusText(action.status)}
          </span>
        </div>
        <div
          className={`text-xs ${isReady ? "text-green-400" : "text-gray-500"}`}
        >
          Action #{action.id}
        </div>
      </div>

      {/* Title */}
      <h3
        className={`text-lg font-semibold mb-3 leading-tight ${
          isReady ? "text-green-100" : "text-white"
        }`}
      >
        {action.title[language]}
      </h3>

      {/* Description */}
      <p
        className={`text-sm mb-4 line-clamp-2 ${
          isReady ? "text-green-200/90" : "text-gray-300"
        }`}
      >
        {action.shortDescription[language]}
      </p>

      {/* Meta Information */}
      <div className="flex items-center justify-between text-xs">
        <span
          className={`px-2 py-1 rounded ${
            isReady
              ? "bg-green-700/50 text-green-200"
              : "bg-gray-700 text-gray-500"
          }`}
        >
          {getDifficultyText(action.meta.difficulty)}
        </span>
        <span
          className={`capitalize ${
            isReady ? "text-green-300" : "text-gray-500"
          }`}
        >
          {action.meta.category}
        </span>
      </div>

      {/* Ready Action CTA */}
      {isReady && (
        <div className="mt-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-lg transition-colors">
            {language === "fr" ? "Agir maintenant" : "Take Action Now"}
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      )}

      {/* Coming Soon Overlay */}
      {!isClickable && (
        <div className="mt-4 text-center">
          <span className="inline-block px-3 py-1 bg-gray-700 text-gray-400 text-xs rounded-full">
            {language === "fr" ? "Bientôt disponible" : "Coming Soon"}
          </span>
        </div>
      )}
    </div>
  );

  if (isClickable) {
    return (
      <Link
        href={`/${language}/actions/${action.slug}`}
        className={`block ${isReady ? "relative" : ""}`}
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
