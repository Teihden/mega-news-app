import type { IFooterProps } from "../config";
import { PAGES } from "@shared/config/constants";

const imgs = import.meta.glob<string>("@shared/assets/images/instagram/*.jpg", {
  query: "?url",
  import: "default",
  eager: true,
});

export const footer: IFooterProps = {
  /* comments: [
    {
      title: "Ellsmartx",
      content: "How nice does this look 😍 I feel it should be delicious, thank you",
    },
    {
      title: "Cassia",
      content: "Take a rest, i'll be cheer up you again in 2 next game go go go",
    },
    {
      title: "Amanda",
      content: "You were stunning today, jan! 💗 great match 👍🏽👍🏽",
    },
    {
      title: "Denis Simonassi",
      content: "It was a great match today Janzi! You did great😉",
    },
  ], */
  instagramLinks: Object.values(imgs).map((src) => ({ src })),
  pages: PAGES,
};
