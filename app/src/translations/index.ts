import { fr } from "./fr";
import { en } from "./en";

export type Language = "fr" | "en";
export type TranslationKeys = typeof fr;

export const translations = {
  fr,
  en,
};

export { fr, en };
