import type { IFooterProps } from "../config";
import imgInstagram1 from "@shared/assets/images/instagram/instagram-1.jpg";
import imgInstagram2 from "@shared/assets/images/instagram/instagram-2.jpg";
import imgInstagram3 from "@shared/assets/images/instagram/instagram-3.jpg";
import imgInstagram4 from "@shared/assets/images/instagram/instagram-4.jpg";
import imgInstagram5 from "@shared/assets/images/instagram/instagram-5.jpg";
import imgInstagram6 from "@shared/assets/images/instagram/instagram-6.jpg";
import imgInstagram7 from "@shared/assets/images/instagram/instagram-7.jpg";
import imgInstagram8 from "@shared/assets/images/instagram/instagram-8.jpg";
import imgInstagram9 from "@shared/assets/images/instagram/instagram-9.jpg";
import { PAGES } from "@shared/config/constants";

export const footer: IFooterProps = {
  comments: [
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
  ],
  instagramLinks: [
    {
      src: imgInstagram1,
    },
    {
      src: imgInstagram2,
    },
    {
      src: imgInstagram3,
    },
    {
      src: imgInstagram4,
    },
    {
      src: imgInstagram5,
    },
    {
      src: imgInstagram6,
    },
    {
      src: imgInstagram7,
    },
    {
      src: imgInstagram8,
    },
    {
      src: imgInstagram9,
    },
  ],
  pages: PAGES,
};
