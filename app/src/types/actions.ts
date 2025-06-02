export type ActionStatus =
  | "ready"
  | "coming-soon"
  | "in-progress"
  | "completed";

export interface Action {
  id: number;
  slug: string;
  status: ActionStatus;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  shortDescription: { fr: string; en: string };
  content?: {
    text?: { fr: string; en: string };
    letter?: { fr: string; en: string };
    form?: ActionForm;
    resources?: ActionResource[];
  };
  meta: {
    difficulty: "easy" | "medium" | "hard";
    timeframe: string;
    impact: "local" | "regional" | "national" | "international";
    category: "legal" | "technical" | "economic" | "political";
  };
}

export interface ActionForm {
  type: "cyberimpact" | "custom" | "external";
  config: {
    frenchGroupId?: string;
    englishGroupId?: string;
    accountId?: string;
    customFields?: FormField[];
  };
}

export interface FormField {
  name: string;
  type: "text" | "email" | "select" | "textarea";
  required: boolean;
  label: { fr: string; en: string };
  placeholder?: { fr: string; en: string };
  options?: { value: string; label: { fr: string; en: string } }[];
}

export interface ActionResource {
  title: { fr: string; en: string };
  type: "pdf" | "link" | "video" | "document";
  url: string;
  description?: { fr: string; en: string };
}
