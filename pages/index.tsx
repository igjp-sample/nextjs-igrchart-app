import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Link href="./DataChart">データチャート（ステップ折れ線チャート）</Link>
        {/* <Link href="./DataSplineChart">データチャート（スプラインチャート）</Link> */}
        <Link href="./CategoryStepChart">カテゴリチャート【簡易版】（ステップ折れ線チャート）</Link>
        <Link href="./CategorySplineChart">カテゴリチャート【簡易版】（スプラインチャート）</Link>
        <Link href="./SelectList">リスト選択ページ</Link>
        
      </main>

    </div>
  );
};

export default Home;
