export const ROUTES = {
  TYPOGRAPHY: "/typography",
  COMPONENTS: "/components",
} as const;

export const PAGES = [
  { href: ROUTES.TYPOGRAPHY, label: "Typography" },
  { href: ROUTES.COMPONENTS, label: "Components" },
];
