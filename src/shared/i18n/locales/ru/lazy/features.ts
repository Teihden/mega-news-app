const features = {
  languageToggler: {
    currentLanguage: "Текущий язык: {{language}}. Откройте меню выбора языка.",
    setLanguage: "Переключить язык на {{language}}",
  },
  burgerBtn: {
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
  },
  themeToggler: {
    modes: {
      light: "светлая",
      dark: "тёмная",
      system: "системная",
    },
    title: "{{mode}} тема",
    ariaLabel: "Переключить режим темы. Текущий режим: {{mode}}.",
  },
  newsletter: {
    title: "Рассылки",
    emailLabel: "Email",
    emailPlaceholder: "Ваш email",
    emailTitle: "Введите ваш email",
    submitTitle: "Подписаться на рассылку",
    success: "Подписка оформлена",
    invalidEmail: "Введите корректный email",
    requiredEmail: "Введите email",
    networkError: "Ошибка сети. Проверьте подключение.",
  },
};

export default features;
