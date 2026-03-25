const features = {
  languageToggler: {
    currentLanguage: "Current language is {{language}}. Open language menu.",
    setLanguage: "Set language to {{language}}",
  },
  burgerBtn: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  themeToggler: {
    modes: {
      light: "light",
      dark: "dark",
      system: "system",
    },
    title: "{{mode}} theme",
    ariaLabel: "Switch theme mode. Current mode: {{mode}}.",
  },
  newsletter: {
    title: "Newsletters",
    emailLabel: "Email",
    emailPlaceholder: "Your email",
    emailTitle: "Write your email...",
    submitTitle: "Subscribe to the newsletter",
    success: "Subscribed successfully",
    invalidEmail: "Enter the correct email address",
    requiredEmail: "Enter your email address",
    networkError: "Network error. Please check your connection.",
  },
};

export default features;
