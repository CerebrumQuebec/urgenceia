import { notFound } from "next/navigation";
import { actions } from "@/data/actions";
import ActionContent from "@/components/actions/ActionContent";

interface ActionPageProps {
  params: Promise<{
    locale: string;
    actionSlug: string;
  }>;
}

export default async function ActionPage({ params }: ActionPageProps) {
  const { locale, actionSlug } = await params;

  // Find the action by slug
  const action = actions.find((a) => a.slug === actionSlug);

  // If action not found, return 404
  if (!action) {
    notFound();
  }

  // If action is not ready, show coming soon
  if (action.status !== "ready" && action.status !== "in-progress") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-16">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-narrow py-16 relative z-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">🚧</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              {action.title[locale as "fr" | "en"]}
            </h1>
            <p className="text-gray-400 text-lg mb-6">
              {locale === "fr"
                ? "Cette action sera bientôt disponible."
                : "This action will be available soon."}
            </p>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {action.description[locale as "fr" | "en"]}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/20 to-transparent"></div>

      <div className="relative z-10">
        <ActionContent action={action} locale={locale as "fr" | "en"} />
      </div>
    </div>
  );
}

// Generate static params for all actions
export async function generateStaticParams() {
  const params = [];

  for (const action of actions) {
    params.push(
      { locale: "fr", actionSlug: action.slug },
      { locale: "en", actionSlug: action.slug }
    );
  }

  return params;
}
