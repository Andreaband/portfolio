import { StaticImageData } from "next/image";
import EcommerceImg from "@/assets/images/ecommerce.jpg";
import TaskImg from "@/assets/images/task.jpg";
import Weather from "@/assets/images/weather.jpg";

interface IProject {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}

export const PROJECTS: IProject[] = [
  {
    title: "E-commerce platform",
    description: "Una soluzione di e-commerce full-stack con React e Node.js",
    image: EcommerceImg,
    link: "https://github.com/Andreaband",
  },
  {
    title: "Task management App",
    description: "Un task manager basato su React con funzionalità di trascinamento della selezione",
    image: TaskImg,
    link: "https://github.com/Andreaband",
  },
  {
    title: "Weather Dashboard",
    description: "Un'app meteo che utilizza l'API OpenWeatherMap e React",
    image: Weather,
    link: "https://github.com/Andreaband",
  },
];