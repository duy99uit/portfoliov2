import { fadoAppProduct, nextBlog, ratracoProduct } from "@/assets";
import { appConfig } from "./appConfig";

export const projects = [
  {
    title: "Fado Mobile App",
    desc: "Fado Mobile App is a product of Fado.vn on Android & IOS devices, users can use app for ordering products from Amazon easier.",
    img: fadoAppProduct,
    authorLogo: appConfig.logoFado,
    projectName: "Fado Mobile App",
    projectCategory: "Ecommerce App",
    time: "June - 2021",
    tagName: "Mobile",
    tagType: "mobile",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=vn.fado.android",
      appleStore: "https://apps.apple.com/vn/app/id1190022173",
    },
    technology: ["React Native", "Expo", "Native Base", "Typescript"],
    role: "Front-end",
    roleDetail: [
      "Owner listing product screens such as: Home, Search result, Campaign/event, Favorite...",
      "Research and implement tracking user with Firebase Analytics and Insider (third party partner)",
      "Implement Discount features",
      "Knowledge about Deeplink, multi-language with i18n, Mock Api, Redux Toolkit, Redux Persist",
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
    projectName: "Ratraco Solution",
    projectCategory: "Internal Accounting Webapp",
    time: "Jan - 2022",
    tagName: "Next JS",
    tagType: "web",
    links: {
      website: "https://staging-internal.woka.io/",
    },
    technology: ["NextJS", "Typescript", "Golang", "MUI v5"],
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
    title: "My Blog",
    desc: "Personal blog project after research about Notion api, Next JS",
    img: nextBlog,
    authorLogo: appConfig.logoTGDD,
    projectName: "My Blog",
    projectCategory: "Personal product",
    time: "Dec - 2021",
    tagName: "Next JS",
    tagType: "web",
    links: {
      website: "https://duyblog.vercel.app/",
    },
    technology: ["NextJS", "Typescript", "Notion", "Tailwind css"],
    role: "Owner project",
    roleDetail: [],
    teamSize: 1,
    features: [],
  },
];
