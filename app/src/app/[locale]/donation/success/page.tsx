"use client";

import { useTranslation } from "@/contexts/TranslationContext";
import Link from "next/link";

export default function DonationSuccessPage() {
  const { language } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center py-16">
      <div className="max-w-md mx-auto text-center px-6">
        <div className="mb-8">
          {/* Success icon */}
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-white mb-4">
            {language === "fr"
              ? "Merci pour votre don!"
              : "Thank you for your donation!"}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {language === "fr"
              ? "Votre contribution nous aide à poursuivre notre mission pour la souveraineté numérique du Québec. Vous devriez recevoir un reçu par courriel sous peu."
              : "Your contribution helps us continue our mission for Quebec's digital sovereignty. You should receive an email receipt shortly."}
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href={`/${language}`}
            className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
          >
            {language === "fr" ? "Retour à l'accueil" : "Back to Home"}
          </Link>

          <Link
            href={`/${language}#newsletter`}
            className="block w-full border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
          >
            {language === "fr"
              ? "S'abonner à l'infolettre"
              : "Subscribe to Newsletter"}
          </Link>
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
          <h3 className="text-sm font-semibold text-gray-300 mb-2">
            {language === "fr" ? "Partagez notre mission" : "Share our mission"}
          </h3>
          <p className="text-xs text-gray-400">
            {language === "fr"
              ? "Aidez-nous à sensibiliser plus de personnes à l'importance de la souveraineté numérique."
              : "Help us raise awareness about the importance of digital sovereignty."}
          </p>
        </div>
      </div>
    </div>
  );
}
