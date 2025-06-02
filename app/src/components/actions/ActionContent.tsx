"use client";

import { Action } from "@/types/actions";
import SignatureForm from "@/components/forms/SignatureForm";

interface ActionContentProps {
  action: Action;
  locale: "fr" | "en";
}

// Enhanced Markdown to HTML converter
function markdownToHtml(markdown: string): string {
  if (!markdown) return "";
  return markdown
    .split("\n")
    .map((line) => {
      // Headings (H1-H3)
      if (line.startsWith("### "))
        return `<h4 class="text-xl font-bold text-white mt-8 mb-5">${line.substring(
          4
        )}</h4>`;
      if (line.startsWith("## "))
        return `<h3 class="text-2xl font-bold text-white mt-10 mb-6">${line.substring(
          3
        )}</h3>`;
      if (line.startsWith("# "))
        return `<h2 class="text-3xl font-bold text-white mt-12 mb-7">${line.substring(
          2
        )}</h2>`;

      // Bold (**text** or __text__)
      line = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      line = line.replace(/__(.*?)__/g, "<strong>$1</strong>");

      // Italic (*text* or _text_)
      line = line.replace(/\*(.*?)\*/g, "<em>$1</em>");
      line = line.replace(/_(.*?)_/g, "<em>$1</em>");

      // Links ([text](url))
      line = line.replace(
        /\[([^\[]+)\]\(([^\)]+)\)/g,
        '<a href="$2" class="text-blue-400 hover:text-blue-300 underline transition-colors" target="_blank" rel="noopener noreferrer">$1</a>'
      );

      // Unordered lists (- item or * item)
      if (line.startsWith("- ") || line.startsWith("* ")) {
        // This simple converter doesn't handle nested lists or combining list items into <ul>
        // For a full solution, a proper Markdown library would be needed.
        return `<li class="list-disc ml-6 mb-2">${line.substring(2)}</li>`;
      }

      // Line breaks (empty line)
      if (line.trim() === "") return "<br/>";

      // Paragraphs
      return `<p class="mb-6 text-lg leading-relaxed">${line}</p>`;
    })
    .join("");
}

export default function ActionContent({ action, locale }: ActionContentProps) {
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "from-green-600/30 to-emerald-600/30 border-green-500/50";
      case "medium":
        return "from-yellow-600/30 to-amber-600/30 border-yellow-500/50";
      case "hard":
        return "from-red-600/30 to-orange-600/30 border-red-500/50";
      default:
        return "from-gray-600/30 to-gray-700/30 border-gray-500/50";
    }
  };

  return (
    <div className="container-wide py-16">
      {/* Enhanced Header */}
      <div className="mb-16 max-w-5xl mx-auto animate-fade-in">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-sm font-mono text-gray-400 glass px-3 py-1 rounded-lg">
            Action #{action.id}
          </span>
          <span
            className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full bg-gradient-to-r ${getStatusColor(
              action.status
            )}`}
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            {getStatusText(action.status)}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-tight animate-fade-in-delay-1">
          <span className="text-gradient bg-gradient-to-r from-blue-400 via-green-400 to-purple-400">
            {action.title[locale]}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed animate-fade-in-delay-2">
          {action.description[locale]}
        </p>

        {/* Enhanced Meta Information */}
        <div className="flex flex-wrap gap-4 text-sm animate-fade-in-delay-3">
          <div className="glass rounded-xl px-6 py-3 hover-lift">
            <span className="text-gray-400 mr-3">
              {locale === "fr" ? "Difficulté:" : "Difficulty:"}
            </span>
            <span
              className={`inline-flex px-3 py-1 rounded-lg font-semibold bg-gradient-to-r ${getDifficultyColor(
                action.meta.difficulty
              )} border backdrop-blur-sm`}
            >
              {getDifficultyText(action.meta.difficulty)}
            </span>
          </div>
          <div className="glass rounded-xl px-6 py-3 hover-lift">
            <span className="text-gray-400 mr-3">
              {locale === "fr" ? "Catégorie:" : "Category:"}
            </span>
            <span className="text-white font-semibold capitalize">
              {action.meta.category}
            </span>
          </div>
          <div className="glass rounded-xl px-6 py-3 hover-lift">
            <span className="text-gray-400 mr-3">
              {locale === "fr" ? "Impact:" : "Impact:"}
            </span>
            <span className="text-white font-semibold capitalize">
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
              <div className="mb-16 animate-fade-in-delay-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-2xl">📝</span>
                  </div>
                  <span className="text-gradient bg-gradient-to-r from-blue-400 to-cyan-400">
                    {locale === "fr" ? "Lettre ouverte" : "Open Letter"}
                  </span>
                </h2>
                <div className="glass rounded-3xl p-10 hover-lift">
                  <div className="prose prose-invert prose-lg max-w-none">
                    <div
                      className="text-gray-200 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: markdownToHtml(action.content.letter[locale]),
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {action.content.text && (
              <div className="mb-16 animate-fade-in-delay-4">
                <div className="glass rounded-3xl p-10 hover-lift">
                  <div className="prose prose-invert prose-lg max-w-none">
                    <div
                      className="text-gray-200 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: markdownToHtml(action.content.text[locale]),
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1">
            {action.content.form && (
              <div className="sticky top-28 animate-fade-in-delay-5">
                <SignatureForm action={action} locale={locale} />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Enhanced Resources */}
      {action.content?.resources && action.content.resources.length > 0 && (
        <div className="mt-20 animate-fade-in-delay-5">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-400">
              {locale === "fr" ? "Ressources" : "Resources"}
            </span>
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {action.content.resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-2xl p-6 hover-lift overflow-hidden relative"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>

                <div className="relative z-10">
                  <h3 className="font-bold text-white mb-3 text-lg group-hover:text-purple-200 transition-colors">
                    {resource.title[locale]}
                  </h3>
                  {resource.description && (
                    <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                      {resource.description[locale]}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-400 capitalize bg-gray-800/50 px-3 py-1 rounded-lg">
                      {resource.type}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
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
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
