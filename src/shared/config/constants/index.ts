export const ROUTES = {
  TYPOGRAPHY: "/typography/",
  COMPONENTS: "/components/",
} as const;

export const PAGES = [
  { href: ROUTES.TYPOGRAPHY, label: "Typography" },
  { href: ROUTES.COMPONENTS, label: "Components" },
];

export const API_URL = import.meta.env.VITE_API_URL ?? "https://dummyjson.com";

export const API_ENDPOINTS = {
  forms: {
    newsletter: "/http/200/Subscribed%20successfully/?delay=1500",
  },
  comments: "/comments/?delay=1500",
};

export const PUBLIC_URLS = {
  forms: {
    newsletter: `${API_URL}${API_ENDPOINTS.forms.newsletter}`,
  },
  comments: `${API_URL}${API_ENDPOINTS.comments}`,
};
