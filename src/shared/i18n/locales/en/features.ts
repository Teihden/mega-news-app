export default {
  burgerBtn: {
    closeMenu: "Close menu",
    openMenu: "Open menu",
  },
  languageToggler: {
    currentLanguage: "Current language is {{language}}. Open language menu.",
    setLanguage: "Set language to {{language}}",
  },
  newsletter: {
    emailLabel: "Email",
    emailPlaceholder: "Your email",
    emailTitle: "Write your email...",
    invalidEmail: "Enter the correct email address",
    networkError: "Network error. Please check your connection.",
    requiredEmail: "Enter your email address",
    submitTitle: "Subscribe to the newsletter",
    success: "Subscribed successfully",
  },
  themeToggler: {
    ariaLabel: "Switch theme mode. Current mode: {{mode}}.",
    modes: {
      dark: "dark",
      light: "light",
      system: "system",
    },
    title: "{{mode}} theme",
  },
} as const;
