export const PAGES = [
  { href: "/typography/", label: "Typography" },
  { href: "/components/", label: "Components" },
  { href: "/", label: "Main" },
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

export const STATE_CLASSES = {
  isActive: "is-active",
  isDisabled: "is-disabled",
};
