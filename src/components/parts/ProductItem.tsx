import { Box, BoxProps, Flex, GridItem } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React from "react";
import { Product } from "../../types";

interface Props {
  boxProps?: BoxProps;
  product: Product;
  handleClick: (linkName: string) => void;
}

export function ProductItem(props: Props) {
  const { product, handleClick } = props;

  return (
    <GridItem
      as="button"
      height="100%"
      py="8px"
      onClick={() => handleClick(product.linkName)} {...props.boxProps}
    >
      <Flex flexDirection="column">
        <Box
          textAlign="center"
          borderRadius="xl"
          backgroundImage={product.imgSrc}
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundColor="gray.50"
          height="15vh"
          width="80%"
          paddingBottom="80%"
          mx="10%"
        />
        <Text textAlign="center" textDecoration="underline" height="auto" my="8px">
          {product.name}
        </Text>
      </Flex>
    </GridItem>
  );
}
