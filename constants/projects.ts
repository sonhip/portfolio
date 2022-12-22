import { ProjectProp } from "../components/ProjectItem";
import vmoImg from "../public/assets/projects/vmo-app.png";
import natureImg from "../public/assets/projects/nature-app.png";
import blogImg from "../public/assets/projects/blog-app.png";
import bankImg from "../public/assets/projects/bank-LP.png";
import goenImg from "../public/assets/projects/goen.png";
import marketPlaceImg from "../public/assets/projects/marketplace.png";

export const LIST_PROJECT: ProjectProp[] = [
  {
    title: "Goen Finance",
    bgImg: goenImg,
    url: "https://www.goen.finance/",
    skills: "Vuejs, TailwindCSS, Scss",
  },
  {
    title: "Marketplace NFT",
    bgImg: marketPlaceImg,
    url: "https://doragonland.mirana.market/",
    skills: "Reactjs, Redux, TailwindCSS",
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
];
