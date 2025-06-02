"use client";

import { useTranslation } from "@/contexts/TranslationContext";
import { useState } from "react";

export default function NewsletterSection() {
  const { language } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formAction = "https://app.cyberimpact.com/optin";
  const groupId = "6"; // Same for both languages
  const accountId = "4eafd57b-a9ce-4713-31b5-9b4ec3d86605";
  const languageCode = language === "fr" ? "fr_ca" : "en_ca";

  return (
    <>
      <section
        id="newsletter"
        className="py-16 bg-gray-950"
        aria-labelledby="newsletter-title"
      >
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2
                id="newsletter-title"
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                {language === "fr" ? "Restez informé" : "Stay informed"}
              </h2>
              <p className="text-gray-300 text-lg">
                {language === "fr"
                  ? "Recevez les dernières mises à jour sur nos actions pour la souveraineté numérique du Québec"
                  : "Receive the latest updates on our actions for Quebec's digital sovereignty"}
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              {/* Important Notice Box */}
              <div className="mb-8 p-4 bg-blue-900/30 border border-blue-500/30 rounded-lg">
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
                      {language === "fr"
                        ? "Important : Confirmation par Quaribou Culture"
                        : "Important: Confirmation by Quaribou Culture"}
                    </p>
                    <p className="text-sm text-blue-300">
                      {language === "fr"
                        ? "Après votre inscription, vous recevrez un courriel de confirmation de Quaribou Culture, l'OBNL qui soutient UrgenceIA."
                        : "After subscribing, you will receive a confirmation email from Quaribou Culture, the non-profit organization supporting UrgenceIA."}
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="text-sm text-blue-400 hover:text-blue-300 underline mt-2 flex items-center gap-1"
                    >
                      {language === "fr"
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
                className="space-y-6"
                aria-labelledby="newsletter-form-title"
              >
                <fieldset className="space-y-4">
                  <legend id="newsletter-form-title" className="sr-only">
                    {language === "fr"
                      ? "Inscription à l'infolettre"
                      : "Newsletter signup"}
                  </legend>

                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="ci_firstname"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        {language === "fr" ? "Prénom" : "First Name"} *
                      </label>
                      <input
                        type="text"
                        id="ci_firstname"
                        name="ci_firstname"
                        maxLength={255}
                        required
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="ci_lastname"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        {language === "fr" ? "Nom" : "Last Name"} *
                      </label>
                      <input
                        type="text"
                        id="ci_lastname"
                        name="ci_lastname"
                        maxLength={255}
                        required
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="ci_email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {language === "fr" ? "Courriel" : "Email"} *
                    </label>
                    <input
                      type="email"
                      id="ci_email"
                      name="ci_email"
                      maxLength={255}
                      required
                      className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="ci_company"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {language === "fr"
                        ? "Entreprise/Organisation"
                        : "Company/Organization"}
                    </label>
                    <input
                      type="text"
                      id="ci_company"
                      name="ci_company"
                      maxLength={255}
                      className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label
                      htmlFor="ci_country"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {language === "fr" ? "Pays" : "Country"}
                    </label>
                    <select
                      name="ci_country"
                      id="ci_country"
                      className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="">
                        {language === "fr" ? "Choisir" : "Select"}
                      </option>
                      <option value="CA">Canada</option>
                      <option value="US">
                        {language === "fr" ? "États-Unis" : "United States"}
                      </option>
                      <option value="FR">France</option>
                      <option value="BE">
                        {language === "fr" ? "Belgique" : "Belgium"}
                      </option>
                      <option value="CH">
                        {language === "fr" ? "Suisse" : "Switzerland"}
                      </option>
                      <option value="GB">
                        {language === "fr" ? "Royaume-Uni" : "United Kingdom"}
                      </option>
                      <option value="DE">
                        {language === "fr" ? "Allemagne" : "Germany"}
                      </option>
                      <option value="IT">
                        {language === "fr" ? "Italie" : "Italy"}
                      </option>
                      <option value="ES">
                        {language === "fr" ? "Espagne" : "Spain"}
                      </option>
                      <option value="PT">Portugal</option>
                      <option value="NL">
                        {language === "fr" ? "Pays-Bas" : "Netherlands"}
                      </option>
                      <option value="AU">Australia</option>
                      <option value="NZ">
                        {language === "fr" ? "Nouvelle-Zélande" : "New Zealand"}
                      </option>
                      <option value="JP">
                        {language === "fr" ? "Japon" : "Japan"}
                      </option>
                      <option value="KR">
                        {language === "fr" ? "Corée du Sud" : "South Korea"}
                      </option>
                      <option value="CN">
                        {language === "fr" ? "Chine" : "China"}
                      </option>
                      <option value="IN">
                        {language === "fr" ? "Inde" : "India"}
                      </option>
                      <option value="BR">
                        {language === "fr" ? "Brésil" : "Brazil"}
                      </option>
                      <option value="MX">
                        {language === "fr" ? "Mexique" : "Mexico"}
                      </option>
                      {/* Add "Other" option for countries not listed */}
                      <option value="OTHER">
                        {language === "fr" ? "Autre" : "Other"}
                      </option>
                    </select>
                  </div>

                  {/* Note */}
                  <div>
                    <label
                      htmlFor="ci_note"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {language === "fr" ? "Note" : "Note"}
                    </label>
                    <input
                      type="text"
                      id="ci_note"
                      name="ci_note"
                      className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      placeholder={
                        language === "fr"
                          ? "Titre, fonction, ou commentaire..."
                          : "Title, position, or comment..."
                      }
                    />
                  </div>

                  {/* Hidden Fields */}
                  <div
                    style={{
                      display: "block",
                      visibility: "hidden",
                      height: "1px",
                    }}
                    aria-hidden="true"
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

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                    aria-label={
                      language === "fr"
                        ? "S'inscrire à l'infolettre"
                        : "Subscribe to newsletter"
                    }
                  >
                    {language === "fr"
                      ? "S'inscrire à l'infolettre"
                      : "Subscribe to Newsletter"}
                  </button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-400 text-center">
                    {language === "fr"
                      ? "En vous inscrivant, vous acceptez de recevoir nos mises à jour. Vous pouvez vous désabonner à tout moment."
                      : "By subscribing, you agree to receive our updates. You can unsubscribe at any time."}
                  </p>

                  {/* CyberImpact Attribution */}
                  <div className="text-center">
                    <div className="text-xs text-gray-500">
                      <a
                        href="https://www.cyberimpact.com"
                        className="text-gray-500 hover:text-gray-400 no-underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Email marketing by Cyberimpact (opens in new tab)"
                      >
                        Email marketing
                      </a>{" "}
                      <a
                        href="https://www.cyberimpact.com"
                        className="text-gray-500 hover:text-gray-400 no-underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Cyberimpact website (opens in new tab)"
                      >
                        Cyberimpact
                      </a>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-xl p-6 max-w-lg w-full mx-4 border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-bold text-white">
                {language === "fr"
                  ? "À propos de Quaribou Culture"
                  : "About Quaribou Culture"}
              </h4>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white"
                aria-label={language === "fr" ? "Fermer" : "Close"}
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
                {language === "fr"
                  ? "Quaribou Culture est un organisme à but non lucratif (OBNL) québécois fondé en 2019 à Québec."
                  : "Quaribou Culture is a Quebec non-profit organization founded in 2019 in Quebec City."}
              </p>
              <p>
                {language === "fr"
                  ? "Sa mission est de favoriser la réalisation de productions issues d'artistes de la relève et d'artistes autonomes, en se concentrant sur des projets ancrés dans la culture québécoise de langue française."
                  : "Its mission is to support emerging and independent artists in realizing their productions, focusing on projects rooted in French-speaking Quebec culture."}
              </p>
              <p>
                {language === "fr"
                  ? "UrgenceIA est un projet soutenu par Quaribou Culture dans le cadre de sa mission de protection et de promotion de la culture québécoise face aux défis de l'intelligence artificielle."
                  : "UrgenceIA is a project supported by Quaribou Culture as part of its mission to protect and promote Quebec culture in the face of artificial intelligence challenges."}
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              {language === "fr" ? "Fermer" : "Close"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
