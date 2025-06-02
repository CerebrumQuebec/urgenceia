"use client";

import { useTranslation } from "@/contexts/TranslationContext";

export default function NewsletterSection() {
  const { language } = useTranslation();

  const formAction = "https://app.cyberimpact.com/optin";
  const groupId = "6"; // Same for both languages
  const accountId = "4eafd57b-a9ce-4713-31b5-9b4ec3d86605";
  const languageCode = language === "fr" ? "fr_ca" : "en_ca";

  return (
    <section id="newsletter" className="py-16 bg-gray-950">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
            <form
              action={formAction}
              method="post"
              acceptCharset="utf-8"
              className="space-y-6"
            >
              <fieldset className="space-y-4">
                <legend className="sr-only">
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
                    >
                      Email marketing
                    </a>{" "}
                    <a
                      href="https://www.cyberimpact.com"
                      className="text-gray-500 hover:text-gray-400 no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
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
  );
}
