import imgCars1 from "@shared/assets/images/cars/cars-1.jpg";
import imgDance1 from "@shared/assets/images/dance/dance-1.jpg";
import imgDance8 from "@shared/assets/images/dance/dance-8.jpg";
import imgTechnology1 from "@shared/assets/images/technology/technology-1.jpg";
import imgMusic8 from "@shared/assets/images/music/music-8.jpg";
import imgCity1 from "@shared/assets/images/city/city-1.jpg";
import type { IMediaCardProps } from "../config";

export const main: IMediaCardProps[] = [
  {
    imgProps: {
      src: imgMusic8,
      width: 360,
      height: 452,
      alt: "music",
    },
    title: "Music Genre Classification with Python",
    text: "A Guide to analyzing Audio/Music signals in Python — Music is like a mirror, and it tells people a lot about who you are and what you care about, whether you like it or not. You’ve read all your free memberonly stories, become a member to get unlimited access. Your membership fee supports the voices you want to hear more from.",
  },
  {
    imgProps: {
      src: imgCars1,
      width: 360,
      height: 452,
      alt: "cars",
    },
    title: "How to Drive a Car Safely",
    text: "Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them.",
  },
  {
    imgProps: {
      src: imgTechnology1,
      width: 360,
      height: 452,
      alt: "technology",
    },
    title: "Why I Stopped Using Multiple Monitor",
    text: "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like",
  },
  {
    imgProps: {
      src: imgDance1,
      width: 360,
      height: 452,
      alt: "dance",
    },
    title: "How to Make Dance Music",
    text: "Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users.",
  },
  {
    imgProps: {
      src: imgDance8,
      width: 360,
      height: 452,
      alt: "dance",
    },
    title: "This free course can teach you music programming basics in less than an hour",
    text: "A Berlin-based music software company, just released a free interactive music course that runs right in your browser. One thing that",
  },
  {
    imgProps: {
      src: imgCity1,
      width: 360,
      height: 452,
      alt: "city",
    },
    title: "10 Cooking Lessons to Use in Everyday Life",
    text: "I recently stumbled upon this quote by Paul Theroux: “Cooking requires confident guesswork and improvisation ",
  },
];
