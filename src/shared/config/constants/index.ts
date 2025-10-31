export const ROUTES = {
  TYPOGRAPHY: "/typography/",
  COMPONENTS: "/components/",
} as const;

export const PAGES = [
  { href: ROUTES.TYPOGRAPHY, label: "Typography" },
  { href: ROUTES.COMPONENTS, label: "Components" },
];

export const API_URL = import.meta.env.API_URL ?? "/api/v1";

export const API_ENDPOINTS = {
  forms: {
    newsletter: "/newsletter/",
  },
};

export const PUBLIC_URLS = {
  forms: {
    newsletter: `${API_URL}${API_ENDPOINTS.forms.newsletter}`,
  },
};
