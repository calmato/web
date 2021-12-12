import { GetStaticPropsContext } from "next";
import { useRouter } from "next/dist/client/router";
import fs from "fs";

import styles from "../styles/Home.module.css";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Box, Container, ListItem, UnorderedList } from "@chakra-ui/layout";
import { Heading, Table, Tbody, Td, Text, Thead, Tr } from "@chakra-ui/react";
import remarkToc from "remark-toc";
import { extractURL, getOGPContent } from "../lib";
import { OGPContent } from "../types/lib/ogp";
import { OGPContentCard } from "../components/OGPContentCard";
import { ImageSlider } from "../components/ImagesSlider";
import SEOHead from "../components/SEOHead";
import { generateOGPImage } from "../lib/text2svg";

interface Props {
  contents: string;
  linkOgpContentList: OGPContent[];
  title: string;
  images: { url: string }[];
  ogpImage: string;
}

const ProductDetailPage = function ProductDetailPage(props: Props) {
  const router = useRouter();
  const { productName } = router.query;
  const { contents, linkOgpContentList, images, title, ogpImage } = props;
  return (
    <>
      <SEOHead title={`${productName} - Calmato`} ogTitle={title} ogImage={ogpImage} />

      <main>
        <Container>
          <Heading size="lg" textAlign="center" my={4}>
            {title}
          </Heading>
          <ImageSlider width="100%" height="400px" images={images} />
          <Box>
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkToc]}
              components={{
                div: ({ children }) => <Box>{children}</Box>,
                h1: ({ children }) => <Heading as="h1">{children}</Heading>,
                h2: ({ children }) => (
                  <Text as="h2" fontSize="4xl" mb={4}>
                    {children}
                  </Text>
                ),
                p: ({ children }) => <Text mb={4}>{children}</Text>,
                ul: ({ children }) => (
                  <UnorderedList spacing={2} my={3}>
                    {children}
                  </UnorderedList>
                ),
                li: ({ children }) => <ListItem>{children}</ListItem>,
                table: ({ children }) => (
                  <Box overflowX="auto">
                    <Table variant="simple" my={2} borderRadius="lg">
                      {children}
                    </Table>
                  </Box>
                ),
                thead: ({ children }) => <Thead backgroundColor="gray.100">{children}</Thead>,
                tr: ({ children }) => <Tr>{children}</Tr>,
                td: ({ children }) => <Td>{children}</Td>,
                tbody: ({ children }) => <Tbody>{children}</Tbody>,
                a: ({ children, href }) => {
                  const ogpContent = linkOgpContentList.find((item) => item.id === href);
                  return ogpContent ? (
                    <OGPContentCard href={href} ogpContent={ogpContent} />
                  ) : (
                    <a href={href}>{children}</a>
                  );
                },
              }}
            >
              {contents}
            </ReactMarkdown>
          </Box>
        </Container>
      </main>

      <footer className={styles.footer}>© Calmato. All rights reserved.</footer>
    </>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const fileName = `${context.params?.productName}.md`;
  const filePath = `./src/markdown/${fileName}`;
  const imagePath = `./src/markdown/${context.params?.productName}/image.json`;
  const titlePath = `./src/markdown/${context.params?.productName}/title.json`;
  const getFileContent = fs.readFileSync(filePath);
  const images = JSON.parse(fs.readFileSync(imagePath).toString());
  const { title } = JSON.parse(fs.readFileSync(titlePath).toString());

  const linkOgpContentList: OGPContent[] = [];

  for (const link of extractURL(getFileContent.toString())) {
    const res = await getOGPContent(link);
    res.result && res.content && linkOgpContentList.push(res.content);
  }

  const productName = context.params?.productName;

  if (typeof productName === "string" && !fs.existsSync(`./public/img/ogp/${productName}.png`)) {
    await generateOGPImage(title, productName);
  }

  const ogpImage =
    productName && fs.existsSync(`./public/img/ogp/${productName}.png`)
      ? `img/ogp/${productName}.png`
      : "img/ogp/calmato.png";

  return {
    props: { contents: getFileContent.toString(), linkOgpContentList, images, title, ogpImage }, // will be passed to the page component as props
  };
}

// This function gets called at build time
export async function getStaticPaths() {
  const products = ["shs_web", "kamijima_farm", "gran_cook", "presto_pay", "gran_book"];

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

export default ProductDetailPage;
