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
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-24">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-gray-600/10 to-gray-700/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-gray-700/10 to-gray-800/5 rounded-full blur-3xl animate-float-delay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/30 to-transparent"></div>
        </div>

        <div className="container-narrow py-16 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="w-20 h-20 glass rounded-full mx-auto mb-8 flex items-center justify-center glow-gray">
              <span className="text-3xl">🚧</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-gradient bg-gradient-to-r from-gray-400 to-gray-600">
                {action.title[locale as "fr" | "en"]}
              </span>
            </h1>
            <p className="text-gray-400 text-xl mb-8 font-light">
              {locale === "fr"
                ? "Cette action sera bientôt disponible."
                : "This action will be available soon."}
            </p>
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto animate-fade-in-delay-1">
              <p className="text-gray-300 leading-relaxed">
                {action.description[locale as "fr" | "en"]}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-24 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-transparent to-purple-950/10 animate-gradient"></div>

        {/* Floating orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-gradient-to-br from-indigo-500/10 to-blue-500/5 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/30 to-gray-950/60"></div>

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
