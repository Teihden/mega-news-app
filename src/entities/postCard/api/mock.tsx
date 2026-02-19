import imgCity1 from "@shared/assets/images/city/city-1.jpg";
import type { IPostCardProps } from "../config";
import avatar6 from "@shared/assets/images/avatar/avatar-6.jpg";

export const componentPage: IPostCardProps = {
  mediaCardProps: {
    imgProps: {
      src: imgCity1,
      width: 340,
      height: 190,
      alt: "city",
    },
    title: "10 Cooking Lessons to Use in Everyday Life",
    text: "I recently stumbled upon this quote by Paul Theroux: “Cooking requires confident guesswork and improvisation ",
  },
  userCardProps: {
    imgProps: {
      src: avatar6,
      width: 44,
      height: 44,
      alt: "James",
    },
    name: "James",
    timestamp: 1658084400000,
  },
  id: 1,
  reactions: {
    dislikes: 11,
    likes: 190,
  },
};
