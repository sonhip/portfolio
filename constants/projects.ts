import { ProjectProp } from "../components/ProjectItem";
import weatherImg from "../public/assets/projects/weather.png";
import foodImg from "../public/assets/projects/food-app.png";
import vmoImg from "../public/assets/projects/vmo-app.png";
import natureImg from "../public/assets/projects/nature-app.png";
import blogImg from "../public/assets/projects/blog-app.png";
import bankImg from "../public/assets/projects/bank-LP.png";

export const LIST_PROJECT: ProjectProp[] = [
  {
    title: "Weather App",
    bgImg: weatherImg,
    url: "https://react-weather-app-22019.web.app/",
    skills: "Reactjs, TailwindCSS",
  },
  {
    title: "Shopping App",
    bgImg: foodImg,
    url: "https://shopping-food-drink.web.app/",
    skills: "Reactjs, Redux",
  },
  {
    title: "Blog and Portfolio",
    bgImg: blogImg,
    url: "https://sontranportfolio.netlify.app/post",
    skills: "Reactjs, TailwindCSS",
  },
  {
    title: "Mini Projects Training",
    bgImg: vmoImg,
    url: "https://login-eec04.web.app",
    skills: "Reactjs, TailwindCSS, Redux",
  },
  {
    title: "Landing Page Nature",
    bgImg: natureImg,
    url: "https://sonhip.github.io/nature/",
    skills: "Html, Scss",
  },
  {
    title: "Landing Page Banking",
    bgImg: bankImg,
    url: "https://bank-landing-page-hbo.vercel.app/",
    skills: "Reactjs, TailwindCSS, Vite",
  },
];
