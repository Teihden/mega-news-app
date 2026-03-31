import type { PropsWithChildren, ReactNode } from "react";

export interface IPageWrapperProps extends PropsWithChildren {
  header?: ReactNode;
  footer?: ReactNode;
}

export const PAGE_WRAPPER_SITE_NAME = "Mega News";

export const PAGE_WRAPPER_SITE_URL = "https://mega-news-app.onrender.com";

export const PAGE_WRAPPER_DEFAULT_DESCRIPTION = "Mega News is a modern platform with up-to-date news, analytics, and personalized recommendations.";

export const PAGE_WRAPPER_SOCIAL_IMAGE_URL = `${PAGE_WRAPPER_SITE_URL}/favicons/og-preview.png`;
