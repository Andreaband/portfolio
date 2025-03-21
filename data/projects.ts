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

export const PROJECTS = [
  {
    title: "E-commerce platform",
    description: "A full-stack e-commerce solution built with React and Node.js",
    image: EcommerceImg,
    link: "https://github.com/Andreaband",
  },
  {
    title: "Task management App",
    description: "A React-based task manager with drag-and-drop functionality",
    image: TaskImg,
    link: "https://github.com/Andreaband",
  },
  {
    title: "Weather Dashboard",
    description: "A weather app using the OpenWeatherMap API and React",
    image: Weather,
    link: "https://github.com/Andreaband",
  },
];