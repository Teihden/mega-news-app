export const PAGES = [
  { href: "/typography/", label: "Typography" },
  { href: "/components/", label: "Components" },
  { href: "/", label: "Main" },
];

export const API_URL = import.meta.env.VITE_API_URL ?? "https://dummyjson.com";

export const API_ENDPOINTS = {
  forms: {
    newsletter: "/http/200/Subscribed%20successfully/?delay=1000",
  },
  posts: {
    all: "/posts?delay=1000",
    updatePosts: "/posts/",
  },
  comments: "/comments?delay=1000",
};

export const PUBLIC_URLS = {
  forms: {
    newsletter: `${API_URL}${API_ENDPOINTS.forms.newsletter}`,
  },
  comments: `${API_URL}${API_ENDPOINTS.comments}`,
  posts: {
    all: `${API_URL}${API_ENDPOINTS.posts.all}`,
    updatePosts: `${API_URL}${API_ENDPOINTS.posts.updatePosts}`,
  },
};

export const STATE_CLASSES = {
  isActive: "is-active",
  isDisabled: "is-disabled",
};

export const LANGUAGE_MODES = [ "en", "ru" ] as const;
