export default {
  burgerBtn: {
    closeMenu: "Закрыть меню",
    openMenu: "Открыть меню",
  },
  languageToggler: {
    currentLanguage: "Текущий язык: {{language}}. Откройте меню выбора языка.",
    setLanguage: "Переключить язык на {{language}}",
  },
  newsletter: {
    emailLabel: "Email",
    emailPlaceholder: "Ваш email",
    emailTitle: "Введите ваш email",
    invalidEmail: "Введите корректный email",
    networkError: "Ошибка сети. Проверьте подключение.",
    requiredEmail: "Введите email",
    submitTitle: "Подписаться на рассылку",
    success: "Подписка оформлена",
  },
  themeToggler: {
    ariaLabel: "Переключить режим темы. Текущий режим: {{mode}}.",
    modes: {
      dark: "тёмная",
      light: "светлая",
      system: "системная",
    },
    title: "{{mode}} тема",
  },
} as const;
