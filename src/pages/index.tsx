import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeContainer from "@/container/Home";
import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import NavBar from "@/components/NavBar";
import { appConfig } from "@/config/appConfig";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{appConfig.webMainTitle}</title>
        <link rel="icon" href="/webicon.ico" />

        <meta name="title" content="Doan The Duy | Front End Developer" />
        <meta
          name="description"
          content="Mobile App & Web Front End Developer, work with React, React Native,TypeScript"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://duy99uit.github.io/" />
        <meta
          property="og:title"
          content="Doan The Duy | Front End Developer"
        />
        <meta
          property="og:description"
          content="Mobile App & Web Front End Developer, using React, React Native, TypeScript"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dxc0m9waq/image/upload/v1646512308/metatag_ftkcdv.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://duy99uit.github.io/" />
        <meta
          property="twitter:title"
          content="Doan The Duy | Front End Developer"
        />
        <meta
          property="twitter:description"
          content="Mobile App & Web Front End Developer, work with React, React Native,TypeScript"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dxc0m9waq/image/upload/v1646512308/metatag_ftkcdv.jpg"
        />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <IntroSection />

      <HomeContainer />

      <Footer />
    </div>
  );
};

export default Home;
