import imgCars1 from "@shared/assets/images/cars/cars-1.jpg";
import imgDance1 from "@shared/assets/images/dance/dance-1.jpg";
import imgDance8 from "@shared/assets/images/dance/dance-8.jpg";
import imgTechnology1 from "@shared/assets/images/technology/technology-1.jpg";
import imgTechnology2 from "@shared/assets/images/technology/technology-2.jpg";
import imgTechnology3 from "@shared/assets/images/technology/technology-3.jpg";
import imgMusic7 from "@shared/assets/images/music/music-7.jpg";
import imgMusic8 from "@shared/assets/images/music/music-8.jpg";
import imgCity1 from "@shared/assets/images/city/city-1.jpg";
import imgSport1 from "@shared/assets/images/sport/sport-1.jpg";
import imgSport2 from "@shared/assets/images/sport/sport-2.jpg";
import imgFood6 from "@shared/assets/images/food/food-6.jpg";
import video1 from "@shared/assets/videos/dance/mixkit-party-between-friends-dancing-and-having-fun-46893-full-hd.mp4";
import video2 from "@shared/assets/videos/dance/mixkit-night-club-dancing-343-full-hd.mp4";
import video3 from "@shared/assets/videos/music/mixkit-hands-of-a-talented-pianist-playing-on-a-blue-background-44147-full-hd.mp4";
import imgPoster1 from "@shared/assets/images/posters/46893-thumb-1080-0.jpg";
import imgPoster2 from "@shared/assets/images/posters/343-thumb-1080-0.jpg";
import imgPoster3 from "@shared/assets/images/posters/44147-thumb-1080-0.jpg";
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

export const latestVideosDesktop: IMediaCardProps[] = [
  {
    titleVariantLevel: 5,
    textLineClamp: 6,
    imgProps: {
      src: imgSport2,
      width: 190,
      height: 190,
      alt: "sport",
    },
    title: "5 reasons why you should wrap your hands when boxing",
    text: "So, you finally went to your first boxing class and learned the basics of the sport. You also learned that it’s recommended to wrap your hands before putting on the gloves. But there are times when you just don’t feel like wrapping them and you wonder why you even need them. Well, this blog is going to explain the benefits of wrapping your hands.",
  },
  {
    titleVariantLevel: 5,
    textLineClamp: 6,
    imgProps: {
      src: imgMusic7,
      width: 190,
      height: 190,
      alt: "music",
    },
    title: "Music Genre Classification with Python",
    text: "A Guide to analyzing Audio/Music signals in Python — Music is like a mirror, and it tells people a lot about who you are and what you care about, whether you like it or not. You’ve read all your free memberonly stories, become a member to get unlimited access. Your membership fee supports the voices you want to hear more from.",
  },

  {
    titleVariantLevel: 5,
    textLineClamp: 6,
    imgProps: {
      src: imgFood6,
      width: 190,
      height: 190,
      alt: "food",
    },
    title: "How AI-powered cameras are changing modern sports analytics",
    text: "From automated highlight detection to real-time performance breakdowns, AI-driven cameras are transforming how athletes train and how fans experience sports. Here's how these systems work and what future innovations they might unlock.",
  },
  {
    titleVariantLevel: 5,
    textLineClamp: 6,
    imgProps: {
      src: imgTechnology3,
      width: 190,
      height: 190,
      alt: "technology",
    },
    title: "10 morning habits that actually improve your productivity",
    text: "A consistent morning routine can shape your entire day. Learn how simple habits like light exposure, journaling, and mindful breathing improve cognitive performance and reduce stress, backed by recent behavioral research.",
  },
  {
    titleVariantLevel: 5,
    textLineClamp: 6,
    imgProps: {
      src: imgSport1,
      width: 190,
      height: 190,
      alt: "sport",
    },
    title: "Hidden travel spots you should visit before they go mainstream",
    text: "Not all incredible destinations are packed with tourists. These lesser-known locations offer culture, nature, and culinary experiences without the crowds — and many of them are more affordable than you think.",
  },
  {
    titleVariantLevel: 5,
    textLineClamp: 6,
    imgProps: {
      src: imgTechnology2,
      width: 190,
      height: 190,
      alt: "food",
    },
    title: "Why fermented foods are making a global comeback",
    text: "Kimchi, kombucha, kefir — fermented foods are trending again, not just for flavor but for their impact on gut health and immunity. Here's what science says about their benefits and how to add them to your daily diet.",
  },
];

export const latestVideosTablet: IMediaCardProps[] = [
  {
    isBtnOverlay: false,
    titleVariantLevel: 4,
    videoProps: {
      poster: imgPoster2,
      width: 744,
      height: 452,
      sources: [
        {
          src: video2,
          type: "video/mp4",
        },
      ],
    },
    title: "How Music Affects Your Brain (Plus 11 Artists To Listen To At Work)",
    text: "You’ve read all your free member-only stories, become a member to get unlimited access. Your membership fee supports the voices you want to hear more from.",
  },
  {
    isBtnOverlay: false,
    titleVariantLevel: 4,
    videoProps: {
      poster: imgPoster1,
      width: 744,
      height: 452,
      sources: [
        {
          src: video1,
          type: "video/mp4",
        },
      ],
    },
    title: "Why Short Videos Dominate Your Attention (And How Algorithms Keep You Hooked)",
    text: "Watch the full breakdown on how platforms shape your viewing habits — plus tips to regain control of your screen time.",
  },
  {
    isBtnOverlay: false,
    titleVariantLevel: 4,
    videoProps: {
      poster: imgPoster3,
      width: 744,
      height: 452,
      sources: [
        {
          src: video3,
          type: "video/mp4",
        },
      ],
    },
    title: "5 Proven Ways to Boost Focus While Working From Home",
    text: "Learn simple routines and science-backed methods that improve productivity without burning out.",
  },
];
