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
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-6">
          {locale === "fr" ? "Co-signer cette lettre" : "Co-sign this letter"}
        </h3>

        {/* Important Notice Box */}
        <div className="mb-6 p-4 bg-blue-900/30 border border-blue-500/30 rounded-lg">
          <div className="flex items-start gap-3">
            <svg
              className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5"
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
            <div>
              <p className="text-sm text-blue-200 font-medium mb-2">
                {locale === "fr"
                  ? "Important : Confirmation par Quaribou Culture"
                  : "Important: Confirmation by Quaribou Culture"}
              </p>
              <p className="text-sm text-blue-300">
                {locale === "fr"
                  ? "Après votre signature, vous recevrez un courriel de confirmation de Quaribou Culture, l'OBNL qui soutient UrgenceIA."
                  : "After signing, you will receive a confirmation email from Quaribou Culture, the non-profit organization supporting UrgenceIA."}
              </p>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="text-sm text-blue-400 hover:text-blue-300 underline mt-2 flex items-center gap-1"
              >
                {locale === "fr"
                  ? "En savoir plus sur Quaribou Culture"
                  : "Learn more about Quaribou Culture"}
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
              </button>
            </div>
          </div>
        </div>

        <form
          action={formAction}
          method="post"
          acceptCharset="utf-8"
          className="space-y-4"
        >
          {/* First Name */}
          <div>
            <label
              htmlFor="ci_firstname"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              {locale === "fr" ? "Prénom" : "First Name"} *
            </label>
            <input
              type="text"
              id="ci_firstname"
              name="ci_firstname"
              maxLength={255}
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="ci_lastname"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              {locale === "fr" ? "Nom" : "Last Name"} *
            </label>
            <input
              type="text"
              id="ci_lastname"
              name="ci_lastname"
              maxLength={255}
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="ci_email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              {locale === "fr" ? "Courriel" : "Email"} *
            </label>
            <input
              type="email"
              id="ci_email"
              name="ci_email"
              maxLength={255}
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Company/Organization */}
          <div>
            <label
              htmlFor="ci_company"
              className="block text-sm font-medium text-gray-300 mb-2"
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
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Title/Function */}
          <div>
            <label
              htmlFor="ci_note"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              {locale === "fr" ? "Titre/Fonction" : "Title/Function"}
            </label>
            <input
              type="text"
              id="ci_note"
              name="ci_note"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            {locale === "fr" ? "Signer la lettre" : "Sign the letter"}
          </button>

          {/* Privacy Notice */}
          <p className="text-xs text-gray-400 text-center">
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
            <input type="hidden" id="ci_sent_url" name="ci_sent_url" value="" />
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-xl p-6 max-w-lg w-full mx-4 border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-bold text-white">
                {locale === "fr"
                  ? "À propos de Quaribou Culture"
                  : "About Quaribou Culture"}
              </h4>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white"
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
            <div className="space-y-4 text-gray-300">
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
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              {locale === "fr" ? "Fermer" : "Close"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
