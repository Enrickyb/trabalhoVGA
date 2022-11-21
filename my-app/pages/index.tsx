import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../src/components/Header";
import Index from "../src/components/Index";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Vetores Paralelos e Ortogonais</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <Index />
    </div>
  );
};

export default Home;
