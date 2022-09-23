import Footer from "@/components/Footer";
import { appConfig } from "@/config/appConfig";
import HomeContainer from "@/container/Home";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{appConfig.webMainTitle}</title>
        <link rel="icon" href="/webicon.ico" />

        <meta name="title" content={appConfig.webMainTitle} />
        <meta name="description" content={appConfig.contentSEO} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={appConfig.domain} />
        <meta property="og:title" content={appConfig.webMainTitle} />
        <meta property="og:description" content={appConfig.contentSEO} />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dxc0m9waq/image/upload/v1646512308/metatag_ftkcdv.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={appConfig.domain} />
        <meta property="twitter:title" content={appConfig.webMainTitle} />
        <meta property="twitter:description" content={appConfig.contentSEO} />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dxc0m9waq/image/upload/v1646512308/metatag_ftkcdv.jpg"
        />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HomeContainer />

      <Footer />
    </div>
  );
};

export default Home;
