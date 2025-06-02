"use client";

import { Action } from "@/types/actions";
import SignatureForm from "@/components/forms/SignatureForm";

interface ActionContentProps {
  action: Action;
  locale: "fr" | "en";
}

export default function ActionContent({ action, locale }: ActionContentProps) {
  const getStatusColor = (status: Action["status"]) => {
    switch (status) {
      case "ready":
        return "text-green-400";
      case "in-progress":
        return "text-blue-400";
      case "completed":
        return "text-purple-400";
      case "coming-soon":
      default:
        return "text-gray-400";
    }
  };

  const getStatusText = (status: Action["status"]) => {
    switch (status) {
      case "ready":
        return locale === "fr" ? "Prêt" : "Ready";
      case "in-progress":
        return locale === "fr" ? "En cours" : "In Progress";
      case "completed":
        return locale === "fr" ? "Terminé" : "Completed";
      case "coming-soon":
      default:
        return locale === "fr" ? "Prochainement" : "Coming Soon";
    }
  };

  const getDifficultyText = (difficulty: string) => {
    const difficultyMap = {
      easy: locale === "fr" ? "Facile" : "Easy",
      medium: locale === "fr" ? "Moyen" : "Medium",
      hard: locale === "fr" ? "Difficile" : "Hard",
    };
    return (
      difficultyMap[difficulty as keyof typeof difficultyMap] || difficulty
    );
  };

  return (
    <div className="container-wide py-16">
      {/* Header */}
      <div className="mb-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm font-medium text-gray-400">
            Action #{action.id}
          </span>
          <span
            className={`text-sm font-medium ${getStatusColor(action.status)}`}
          >
            {getStatusText(action.status)}
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
          {action.title[locale]}
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
          {action.description[locale]}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg px-4 py-2">
            <span className="text-gray-400">
              {locale === "fr" ? "Difficulté:" : "Difficulty:"}
            </span>
            <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md font-medium">
              {getDifficultyText(action.meta.difficulty)}
            </span>
          </div>
          <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg px-4 py-2">
            <span className="text-gray-400">
              {locale === "fr" ? "Catégorie:" : "Category:"}
            </span>
            <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md font-medium capitalize">
              {action.meta.category}
            </span>
          </div>
          <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg px-4 py-2">
            <span className="text-gray-400">
              {locale === "fr" ? "Impact:" : "Impact:"}
            </span>
            <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md font-medium capitalize">
              {action.meta.impact}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      {action.content && (
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {action.content.letter && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8">
                  {locale === "fr" ? "Lettre ouverte" : "Open Letter"}
                </h2>
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-10 border border-gray-700/50 backdrop-blur-sm">
                  <div className="prose prose-invert prose-lg max-w-none">
                    <div
                      className="text-gray-200 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: action.content.letter[locale]
                          .split("\n")
                          .map((paragraph) => {
                            if (
                              paragraph.startsWith("**") &&
                              paragraph.endsWith("**")
                            ) {
                              return `<h3 class="text-2xl font-bold text-white mt-10 mb-6">${paragraph.slice(
                                2,
                                -2
                              )}</h3>`;
                            }
                            if (paragraph.trim() === "") {
                              return "<br/>";
                            }
                            return `<p class="mb-6 text-lg leading-relaxed">${paragraph}</p>`;
                          })
                          .join(""),
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {action.content.text && (
              <div className="mb-16">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-10 border border-gray-700/50 backdrop-blur-sm">
                  <div className="prose prose-invert prose-lg max-w-none">
                    <div
                      className="text-gray-200 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: action.content.text[locale]
                          .split("\n")
                          .map((paragraph) =>
                            paragraph.trim() === ""
                              ? "<br/>"
                              : `<p class="mb-6 text-lg leading-relaxed">${paragraph}</p>`
                          )
                          .join(""),
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {action.content.form && (
              <div className="sticky top-24">
                <SignatureForm action={action} locale={locale} />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Resources */}
      {action.content?.resources && action.content.resources.length > 0 && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            {locale === "fr" ? "Ressources" : "Resources"}
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {action.content.resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl border border-gray-700/50 hover:from-gray-700/80 hover:to-gray-800/80 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                <h3 className="font-semibold text-white mb-3 text-lg">
                  {resource.title[locale]}
                </h3>
                {resource.description && (
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                    {resource.description[locale]}
                  </p>
                )}
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="capitalize font-medium">
                    {resource.type}
                  </span>
                  <span>↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
