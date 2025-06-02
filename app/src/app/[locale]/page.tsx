"use client";

import { useTranslation } from "@/contexts/TranslationContext";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          {t("hero.title")}
        </h1>
        <p className="text-2xl mb-8 text-gray-300">{t("hero.subtitle")}</p>
        <p className="text-lg text-gray-400 mb-12 leading-relaxed">
          {t("hero.description")}
        </p>
        <button className="btn text-lg px-8 py-4">{t("hero.cta")}</button>

        <div className="mt-16 p-8 bg-gray-800 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-white">
            {t("actions.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-700 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">
                {t("actions.current")}
              </h3>
              <p className="text-gray-300">{t("actions.action6.title")}</p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg opacity-60">
              <h3 className="text-lg font-semibold mb-2 text-gray-400">
                {t("actions.coming")}
              </h3>
              <p className="text-gray-400">6 autres actions en préparation</p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg opacity-60">
              <h3 className="text-lg font-semibold mb-2 text-gray-400">
                {t("actions.coming")}
              </h3>
              <p className="text-gray-400">Mobilisation collective</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
