import React, { useCallback, useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { TopPageImage } from "../components/TopPageImage";
import { Box, Container } from "@chakra-ui/layout";
import { Text, Flex, useDisclosure } from "@chakra-ui/react";
import { ContentsSwitcher } from "../components/templates/ContentsSwitcher";
import { CategoryName } from "../types";
import { Navigation } from "../components/Navigation";
import { DrawerMenu } from "../components/DrawerMenu";
import SEOHead from "../components/SEOHead";

const categories: CategoryName[] = ["Product", "Profile", "Contact"];

const Home: NextPage = () => {
  const [selected, setSelected] = useState<number>(0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClickCategory = useCallback(
    (idx: number) => {
      setSelected(idx);
      onClose();
    },
    [onClose]
  );

  return (
    <>
      <SEOHead />

      <main>
        <TopPageImage src="img/asset1.jpg" />

        <Container maxW="container.lg">
          <Flex pt={8} px={8} justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontSize="4xl">About</Text>
              <Text mb={4}>Category: {categories[selected]}</Text>
            </Box>
            <Box display={{ base: "block", md: "none" }}>
              <DrawerMenu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                <Navigation categories={categories} activeIdx={selected} handleClickCategory={handleClickCategory} />
              </DrawerMenu>
            </Box>
          </Flex>
          <Box p={4}>
            <Flex>
              <Box flex="1">
                <ContentsSwitcher contentType={categories[selected]} />
              </Box>

              <Box pl={2} display={{ base: "none", md: "block" }}>
                <Text mb={4}>Category</Text>
                <Navigation categories={categories} activeIdx={selected} handleClickCategory={handleClickCategory} />
              </Box>
            </Flex>
          </Box>
        </Container>
      </main>

      <footer className={styles.footer}>© Calmato. All rights reserved.</footer>
    </>
  );
};

export default Home;
