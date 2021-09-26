import { GetStaticPropsContext, NextPage, NextPageContext } from "next";
import { useRouter } from "next/dist/client/router";
import fs from "fs";
import Head from "next/head";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import { Container } from "@chakra-ui/layout";

interface Props {
  contents: string;
}

const ProducDetailPage = function ProducDetailPage(props: Props)  {
  const router = useRouter();
  const { productName } = router.query;
  const contents = props.contents;

  return (
    <>
      <Head>
        <title> {productName} - Calmato</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}>
              {contents}
          </ReactMarkdown>
        </Container>
      </main>
    </>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const fileName = `${context.params?.productName}.md`
  const filePath =  `./src/markdown/${fileName}`;
  const getFileContent = fs.readFileSync(filePath);


  return {
    props: {contents: getFileContent.toString()}, // will be passed to the page component as props
  };
}

// This function gets called at build time
export async function getStaticPaths() {
  const products = ["shs_web", "gran_cook", "presto_pay", "gran_book"];

  return {
    paths: products.map((name) => {
      return {
        params: {
          productName: name,
        },
      };
    }),
    fallback: false,
  };
}

export default ProducDetailPage;
