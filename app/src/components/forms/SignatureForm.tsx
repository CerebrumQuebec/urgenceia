"use client";

import { Action } from "@/types/actions";

interface SignatureFormProps {
  action: Action;
  locale: "fr" | "en";
}

export default function SignatureForm({ action, locale }: SignatureFormProps) {
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
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-6">
        {locale === "fr" ? "Co-signer cette lettre" : "Co-sign this letter"}
      </h3>

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

        {/* Hidden fields for CyberImpact */}
        <div style={{ display: "block", visibility: "hidden", height: "1px" }}>
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
          <input type="hidden" id="ci_error_url" name="ci_error_url" value="" />
          <input
            type="hidden"
            id="ci_confirm_url"
            name="ci_confirm_url"
            value=""
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          {locale === "fr" ? "Signer la lettre" : "Sign the letter"}
        </button>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-400 mt-4">
          {locale === "fr"
            ? "En signant, vous acceptez de recevoir des mises à jour sur cette campagne. Vous pouvez vous désabonner à tout moment."
            : "By signing, you agree to receive updates about this campaign. You can unsubscribe at any time."}
        </p>
      </form>
    </div>
  );
}
