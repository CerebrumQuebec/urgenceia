"use client";

import { Action } from "@/types/actions";
import { useState } from "react";

interface SignatureFormProps {
  action: Action;
  locale: "fr" | "en";
}

export default function SignatureForm({ action, locale }: SignatureFormProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!action.content?.form || action.content.form.type !== "cyberimpact") {
    return null;
  }

  const formConfig = action.content.form.config;
  const groupId =
    locale === "fr" ? formConfig.frenchGroupId : formConfig.englishGroupId;
  const accountId = formConfig.accountId;
  const languageCode = locale === "fr" ? "fr_ca" : "en_ca";

  const formAction = "https://app.cyberimpact.com/optin";

  return (
    <>
      <div className="glass rounded-2xl p-8 border-2 border-green-500/30 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5"></div>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <span className="text-xl">✍️</span>
            </div>
            <span className="text-gradient bg-gradient-to-r from-green-400 to-emerald-400">
              {locale === "fr"
                ? "Co-signer cette lettre"
                : "Co-sign this letter"}
            </span>
          </h3>

          {/* Enhanced Important Notice Box */}
          <div className="mb-8 p-5 glass rounded-xl border border-blue-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5"></div>
            <div className="relative z-10 flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-blue-100 font-semibold mb-2">
                  {locale === "fr"
                    ? "Important : Confirmation par Quaribou Culture"
                    : "Important: Confirmation by Quaribou Culture"}
                </p>
                <p className="text-sm text-blue-200 leading-relaxed">
                  {locale === "fr"
                    ? "Après votre signature, vous recevrez un courriel de confirmation de Quaribou Culture, l'OBNL qui soutient UrgenceIA."
                    : "After signing, you will receive a confirmation email from Quaribou Culture, the non-profit organization supporting UrgenceIA."}
                </p>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="text-sm text-blue-300 hover:text-blue-200 underline mt-3 flex items-center gap-1 transition-colors group"
                >
                  {locale === "fr"
                    ? "En savoir plus sur Quaribou Culture"
                    : "Learn more about Quaribou Culture"}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
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
                </button>
              </div>
            </div>
          </div>

          <form
            action={formAction}
            method="post"
            acceptCharset="utf-8"
            className="space-y-5"
          >
            {/* First Name */}
            <div>
              <label
                htmlFor="ci_firstname"
                className="block text-sm font-semibold text-gray-200 mb-2"
              >
                {locale === "fr" ? "Prénom" : "First Name"} *
              </label>
              <input
                type="text"
                id="ci_firstname"
                name="ci_firstname"
                maxLength={255}
                required
                className="w-full p-3.5 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all duration-300"
                placeholder={locale === "fr" ? "Jean" : "John"}
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="ci_lastname"
                className="block text-sm font-semibold text-gray-200 mb-2"
              >
                {locale === "fr" ? "Nom" : "Last Name"} *
              </label>
              <input
                type="text"
                id="ci_lastname"
                name="ci_lastname"
                maxLength={255}
                required
                className="w-full p-3.5 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all duration-300"
                placeholder={locale === "fr" ? "Tremblay" : "Doe"}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="ci_email"
                className="block text-sm font-semibold text-gray-200 mb-2"
              >
                {locale === "fr" ? "Courriel" : "Email"} *
              </label>
              <input
                type="email"
                id="ci_email"
                name="ci_email"
                maxLength={255}
                required
                className="w-full p-3.5 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all duration-300"
                placeholder={
                  locale === "fr" ? "jean@exemple.com" : "john@example.com"
                }
              />
            </div>

            {/* Company/Organization */}
            <div>
              <label
                htmlFor="ci_company"
                className="block text-sm font-semibold text-gray-200 mb-2"
              >
                {locale === "fr"
                  ? "Entreprise/Organisation"
                  : "Company/Organization"}
              </label>
              <input
                type="text"
                id="ci_company"
                name="ci_company"
                maxLength={255}
                className="w-full p-3.5 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all duration-300"
                placeholder={
                  locale === "fr" ? "Nom de l'entreprise" : "Company name"
                }
              />
            </div>

            {/* Title/Function */}
            <div>
              <label
                htmlFor="ci_note"
                className="block text-sm font-semibold text-gray-200 mb-2"
              >
                {locale === "fr" ? "Titre/Fonction" : "Title/Function"}
              </label>
              <input
                type="text"
                id="ci_note"
                name="ci_note"
                className="w-full p-3.5 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all duration-300"
                placeholder={locale === "fr" ? "Directeur" : "Director"}
              />
            </div>

            {/* Enhanced Submit Button */}
            <button
              type="submit"
              className="group relative w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                {locale === "fr" ? "Signer la lettre" : "Sign the letter"}
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
            </button>

            {/* Enhanced Privacy Notice */}
            <p className="text-xs text-gray-400 text-center leading-relaxed px-4">
              {locale === "fr"
                ? "En signant, vous acceptez de recevoir des mises à jour concernant cette action. Vous pouvez vous désabonner à tout moment."
                : "By signing, you agree to receive updates about this action. You can unsubscribe at any time."}
            </p>

            {/* Hidden fields for CyberImpact */}
            <div
              style={{ display: "block", visibility: "hidden", height: "1px" }}
            >
              <input
                type="hidden"
                id="ci_groups"
                name="ci_groups"
                value={groupId}
              />
              <input
                type="hidden"
                id="ci_account"
                name="ci_account"
                value={accountId}
              />
              <input
                type="hidden"
                id="ci_language"
                name="ci_language"
                value={languageCode}
              />
              <input
                type="hidden"
                id="ci_sent_url"
                name="ci_sent_url"
                value=""
              />
              <input
                type="hidden"
                id="ci_error_url"
                name="ci_error_url"
                value=""
              />
              <input
                type="hidden"
                id="ci_confirm_url"
                name="ci_confirm_url"
                value=""
              />
            </div>
          </form>
        </div>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="glass rounded-2xl p-8 max-w-lg w-full mx-4 border border-gray-700 animate-fade-in-delay-1 transform scale-100">
            <div className="flex justify-between items-start mb-6">
              <h4 className="text-2xl font-bold text-white">
                <span className="text-gradient bg-gradient-to-r from-blue-400 to-cyan-400">
                  {locale === "fr"
                    ? "À propos de Quaribou Culture"
                    : "About Quaribou Culture"}
                </span>
              </h4>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p>
                {locale === "fr"
                  ? "Quaribou Culture est un organisme à but non lucratif (OBNL) québécois fondé en 2019 à Québec."
                  : "Quaribou Culture is a Quebec non-profit organization founded in 2019 in Quebec City."}
              </p>
              <p>
                {locale === "fr"
                  ? "Sa mission est de favoriser la réalisation de productions issues d'artistes de la relève et d'artistes autonomes, en se concentrant sur des projets ancrés dans la culture québécoise de langue française."
                  : "Its mission is to support emerging and independent artists in realizing their productions, focusing on projects rooted in French-speaking Quebec culture."}
              </p>
              <p>
                {locale === "fr"
                  ? "UrgenceIA est un projet soutenu par Quaribou Culture dans le cadre de sa mission de protection et de promotion de la culture québécoise face aux défis de l'intelligence artificielle."
                  : "UrgenceIA is a project supported by Quaribou Culture as part of its mission to protect and promote Quebec culture in the face of artificial intelligence challenges."}
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-8 w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              {locale === "fr" ? "Fermer" : "Close"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
