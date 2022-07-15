import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/parts/Layout";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <DefaultSeo
        title="東海大学学生ロケットプロジェクト"
        description="東海大学学生ロケットプロジェクトの紹介及び活動報告を行うサイトです。"
        dangerouslySetAllPagesToNoIndex={true}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
