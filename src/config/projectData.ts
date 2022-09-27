import { fadoAppProduct, nextBlog, ratracoProduct } from "@/assets";
import { appConfig } from "./appConfig";

export const projects = [
  {
    title: "Fado Mobile App",
    desc: "Fado Mobile App is a product of Fado.vn on Android & IOS devices, users can use app for ordering products from Amazon easier.",
    img: fadoAppProduct,
    authorLogo: appConfig.logoFado,
    authorName: "Fado Mobile App",
    date: "React Native - Ecommerce App",
    time: "2021",
    tagName: "Mobile",
    tagType: "mobile",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=vn.fado.android",
      appleStore: "https://apps.apple.com/vn/app/id1190022173",
    },
    technology: "React Native, Expo, Native Base, Typescript",
    role: "Front-end",
    roleDetail: [
      "Owner listing product screens such as: Home screen, Search product screen, Landing product screen, Favorite screen...",
      " Research and implement tracking user with Firebase Analytics and Insider (third party partner)",
      "Implement Discount features",
      "Knowledge about Deeplink, Multi-language with i18n, Mock Api, Redux Toolkit, Redux Persist",
    ],
    teamSize: 4,
    features: [
      "Easily search for products from many categories such as technology, beauty, health care, fashion, ... with full information about prices, colors, sizes, ...",
      "Update popular shopping trends, discounted products around the world",
      "Easily track order status through the app",
      "Tracking user for revenue optimization and push notifcation, voucher, gift with Insider & Google Analytics",
    ],
  },
  {
    title: "Ratraco Solution Webapp",
    desc: " Ratraco is a Railway Logistics Solution project, built for internal use only, used for managing orders delivered by rail. The main users of the project are sales staff, accountants, shipping department",
    img: ratracoProduct,
    authorLogo: appConfig.logoFado,
    authorName: "Ratraco Solution Webapp",
    date: "Next JS - Internal product",
    time: "Jan - 2022",
    tagName: "Next JS",
    tagType: "web",
    links: {},
    technology: "NextJS, Typescript, Golang, MUI v5, Axios, Mock Adapter,...",
    role: "Front-end",
    roleDetail: [
      "Created UI, base component, wrapped component,...",
      "Implemented feature customer management, feature statistics profit, revenue",
      "Validated form with React Hook Form & Yup",
      "Knew about server side rendering (SSR) & client side rendering (CLR)",
    ],
    teamSize: 5,
    features: [],
  },
  {
    title: "A Quick Guide to WordPress Hosting",
    desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
    img: nextBlog,
    authorLogo: appConfig.logoTGDD,
    authorName: "Micheal",
    date: "Jan 4 2022",
    tagName: "Next JS",
    tagType: "web",
  },
];
