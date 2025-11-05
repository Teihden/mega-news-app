import imgAbstract1 from "@shared/assets/images/abstract/abstract-1.jpg";
import imgAnimal1 from "@shared/assets/images/animal/animal-1.jpg";
import imgCars1 from "@shared/assets/images/cars/cars-1.jpg";
import imgCity1 from "@shared/assets/images/city/city-1.jpg";
import imgDance1 from "@shared/assets/images/dance/dance-1.jpg";
import imgFood1 from "@shared/assets/images/food/food-1.jpg";
import imgMusic1 from "@shared/assets/images/music/music-1.jpg";
import imgSport1 from "@shared/assets/images/sport/sport-1.jpg";
import imgTechnology1 from "@shared/assets/images/technology/technology-1.jpg";
import imgWeather1 from "@shared/assets/images/weather/weather-1.jpg";
import type { ILogoCarouselProps } from "../config";

export const main: ILogoCarouselProps = {
  items: [
    {
      src: imgAbstract1,
      alt: "#Abstract",
    },
    {
      src: imgAnimal1,
      alt: "#Animal",
    },
    {
      src: imgCars1,
      alt: "#Cars",
    },
    {
      src: imgCity1,
      alt: "#City",
    },
    {
      src: imgDance1,
      alt: "#Dance",
    },
    {
      src: imgFood1,
      alt: "#Food",
    },
    {
      src: imgMusic1,
      alt: "#Music",
    },
    {
      src: imgSport1,
      alt: "#Sport",
    },
    {
      src: imgTechnology1,
      alt: "#Technology",
    },
    {
      src: imgWeather1,
      alt: "#Weather",
    },
  ].map((item) => ({
    ...item,
    width: 170,
    height: 48,
  })),
};

main.items = [ ...main.items!, ...main.items! ];
