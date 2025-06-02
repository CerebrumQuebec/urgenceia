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
        return "from-green-500 to-emerald-500";
      case "in-progress":
        return "from-blue-500 to-cyan-500";
      case "completed":
        return "from-purple-500 to-pink-500";
      case "coming-soon":
      default:
        return "from-gray-500 to-gray-600";
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "from-green-600/20 to-emerald-600/20 border-green-500/30";
      case "medium":
        return "from-yellow-600/20 to-amber-600/20 border-yellow-500/30";
      case "hard":
        return "from-red-600/20 to-orange-600/20 border-red-500/30";
      default:
        return "from-gray-600/20 to-gray-700/20 border-gray-500/30";
    }
  };

  const isClickable =
    action.status === "ready" || action.status === "in-progress";
  const isReady = action.status === "ready";

  const cardContent = (
    <div
      className={`relative h-full p-6 rounded-2xl transition-all duration-300 ${
        isReady
          ? "glass border-2 border-green-500/50 hover:border-green-400/70 cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
          : isClickable
          ? "glass border border-blue-500/30 hover:border-blue-400/50 cursor-pointer transform hover:scale-105"
          : "glass border border-gray-700/50 opacity-75"
      } group overflow-hidden`}
    >
      {/* Background gradient animation */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getStatusColor(
          action.status
        )} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
      ></div>

      {/* Ready Action Banner */}
      {isReady && (
        <div className="absolute -top-1 -right-1 z-20">
          <div className="relative">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg animate-pulse">
              {language === "fr" ? "DISPONIBLE!" : "AVAILABLE!"}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-md opacity-60 animate-pulse"></div>
          </div>
        </div>
      )}

      <div className="relative z-10">
        {/* Status Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`relative`}>
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${getStatusColor(
                  action.status
                )} ${isReady ? "animate-pulse" : ""}`}
              />
              {isReady && (
                <div
                  className={`absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-r ${getStatusColor(
                    action.status
                  )} blur-sm scale-150 animate-pulse`}
                />
              )}
            </div>
            <span
              className={`text-sm font-semibold ${
                isReady
                  ? "text-green-300"
                  : isClickable
                  ? "text-blue-300"
                  : "text-gray-400"
              }`}
            >
              {getStatusText(action.status)}
            </span>
          </div>
          <div
            className={`text-xs font-mono ${
              isReady
                ? "text-green-400"
                : isClickable
                ? "text-blue-400"
                : "text-gray-500"
            }`}
          >
            Action #{action.id}
          </div>
        </div>

        {/* Title */}
        <h3
          className={`text-xl font-bold mb-3 leading-tight ${
            isReady
              ? "text-white group-hover:text-green-100"
              : isClickable
              ? "text-white group-hover:text-blue-100"
              : "text-gray-300"
          } transition-colors`}
        >
          {action.title[language]}
        </h3>

        {/* Description */}
        <p
          className={`text-sm mb-4 line-clamp-2 ${
            isReady
              ? "text-gray-300"
              : isClickable
              ? "text-gray-300"
              : "text-gray-400"
          }`}
        >
          {action.shortDescription[language]}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs">
          <span
            className={`px-3 py-1.5 rounded-lg font-medium bg-gradient-to-r ${getDifficultyColor(
              action.meta.difficulty
            )} border backdrop-blur-sm`}
          >
            {getDifficultyText(action.meta.difficulty)}
          </span>
          <span
            className={`capitalize font-medium ${
              isReady
                ? "text-green-300"
                : isClickable
                ? "text-blue-300"
                : "text-gray-500"
            }`}
          >
            {action.meta.category}
          </span>
        </div>

        {/* Ready Action CTA */}
        {isReady && (
          <div className="mt-6">
            <div className="relative group-hover:scale-105 transition-transform">
              <span className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white text-sm font-bold rounded-xl transition-all duration-300 w-full justify-center">
                {language === "fr" ? "Agir maintenant" : "Take Action Now"}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
            </div>
          </div>
        )}

        {/* In Progress Indicator */}
        {action.status === "in-progress" && (
          <div className="mt-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-300 text-sm font-medium">
                {language === "fr" ? "En développement" : "In Development"}
              </span>
            </div>
          </div>
        )}

        {/* Coming Soon Overlay */}
        {!isClickable && (
          <div className="mt-6 text-center">
            <span className="inline-block px-4 py-2 bg-gray-800/50 text-gray-400 text-sm rounded-lg border border-gray-700/50">
              {language === "fr" ? "Bientôt disponible" : "Coming Soon"}
            </span>
          </div>
        )}
      </div>

      {/* Hover effect shimmer */}
      {isClickable && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
      )}
    </div>
  );

  if (isClickable) {
    return (
      <Link
        href={`/${language}/actions/${action.slug}`}
        className={`block h-full ${isReady ? "relative" : ""}`}
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
