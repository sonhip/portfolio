import { ProjectProp } from '../components/ProjectItem';
import natureImg from '../public/assets/projects/nature-app.png';
import bankImg from '../public/assets/projects/bank-LP.png';
import goenImg from '../public/assets/projects/goen.png';
import marketPlaceImg from '../public/assets/projects/marketplace.png';
import smartReaderImg from '../public/assets/projects/smart-reader.png';
import smarbotImg from '../public/assets/projects/smartbot.png';
import sdkImg from '../public/assets/projects/web-sdk.png';

export const LIST_PROJECT: ProjectProp[] = [
  {
    title: 'Goen Finance',
    bgImg: goenImg,
    url: 'https://www.goen.finance/',
    skills: 'Vuejs, TailwindCSS, Scss',
  },
  {
    title: 'Marketplace NFT',
    bgImg: marketPlaceImg,
    url: 'https://doragonland.mirana.market/',
    skills: 'Reactjs, Redux, TailwindCSS',
  },
  {
    title: 'VNPT Smartbot',
    bgImg: smarbotImg,
    url: 'https://console-smartbot.vnpt.vn/user/signin',
    skills: 'Reactjs, TailwindCSS, Redux, SSO login',
  },
  {
    title: 'VNPT Smart Reader',
    bgImg: smartReaderImg,
    url: 'https://console-smartreader.vnpt.vn/login',
    skills: 'Angular, SCSS, SSO login',
  },
  {
    title: 'Web SDK-Ekyc',
    bgImg: sdkImg,
    url: 'https://ekyc-sdk.s3.ap-southeast-1.amazonaws.com/index.html',
    skills: 'Reactjs, TailwindCSS, SCSS, Redux',
  },
  {
    title: 'Landing Page Nature',
    bgImg: natureImg,
    url: 'https://sonhip.github.io/nature/',
    skills: 'HTML, SCSS',
  },
  {
    title: 'Landing Page Banking',
    bgImg: bankImg,
    url: 'https://bank-landing-page-hbo.vercel.app/',
    skills: 'Reactjs, TailwindCSS, Vite',
  },
];
