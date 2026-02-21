import imgCity1 from "@shared/assets/images/city/city-1.jpg";
import type { IPostCardProps, IUpdatePostResp } from "../config";
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

export const updatePostResp: IUpdatePostResp = {
  id: 1,
  title: "His mother had always taught him",
  body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  userId: 121,
  tags: [
    "history",
    "american",
    "crime",
  ],
  reactions: {
    dislikes: 10,
    likes: 191,
  },
};
