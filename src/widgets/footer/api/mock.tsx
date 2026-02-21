import type { ICommentsResp, IFooterProps } from "../config";
import { PAGES } from "@shared/config/constants";
import { randomInteger } from "remeda";

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

export const commentsResp: ICommentsResp = {
  comments: [
    {
      id: randomInteger(1, 9999),
      body: "This is some awesome thinking!",
      postId: 242,
      likes: 3,
      user: {
        id: 105,
        username: "emmac",
        fullName: "Emma Wilson",
      },
    },
    {
      id: randomInteger(1, 9999),
      body: "What terrific math skills you're showing!",
      postId: 46,
      likes: 4,
      user: {
        id: 183,
        username: "cameronp",
        fullName: "Cameron Perez",
      },
    },
    {
      id: randomInteger(1, 9999),
      body: "You are an amazing writer!",
      postId: 235,
      likes: 2,
      user: {
        id: 1,
        username: "emilys",
        fullName: "Emily Johnson",
      },
    },
    {
      id: randomInteger(1, 9999),
      body: "Wow! You have improved so much!",
      postId: 31,
      likes: 1,
      user: {
        id: 89,
        username: "braydenf",
        fullName: "Brayden Fleming",
      },
    },
    {
      id: randomInteger(1, 9999),
      body: "Nice idea!",
      postId: 212,
      likes: 1,
      user: {
        id: 149,
        username: "wyattp",
        fullName: "Wyatt Perry",
      },
    },
    {
      id: randomInteger(1, 9999),
      body: "You are showing excellent understanding!",
      postId: 184,
      likes: 5,
      user: {
        id: 110,
        username: "danielt",
        fullName: "Daniel Taylor",
      },
    },
    {
      id: randomInteger(1, 9999),
      body: "This is clear, concise, and complete!",
      postId: 172,
      likes: 1,
      user: {
        id: 4,
        username: "jamesd",
        fullName: "James Davis",
      },
    },
    {
      id: randomInteger(1, 9999),
      body: "What a powerful argument!",
      postId: 233,
      likes: 0,
      user: {
        id: 145,
        username: "lukec",
        fullName: "Luke Cooper",
      },
    },
  ],
  total: 340,
  skip: 0,
  limit: 8,
};
