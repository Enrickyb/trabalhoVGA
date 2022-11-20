import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import * as S from "./style";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Vetores Paralelos e Ortogonais</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.index>
        <div>
          <h1>Verificador de Paralelismo e Ortogonalidade entre vetores</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <Link href={"/main"}>
            <button>COMEÇAR</button>
          </Link>
        </div>
        <img src="/mainimage.png" alt="mainimage" />
      </S.index>
    </div>
  );
};

export default Index;