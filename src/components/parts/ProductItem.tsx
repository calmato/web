import { Box, BoxProps, GridItem } from "@chakra-ui/layout";
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
    <GridItem as="button" py="16px" onClick={() => handleClick(product.linkName)} {...props.boxProps}>
      <Box
        textAlign="center"
        borderRadius="xl"
        backgroundImage={product.imgSrc}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundColor="gray.50"
        boxSize="80%"
        paddingBottom="100%"
        marginLeft="10%"
      />
      <Text
        textAlign="center"
        textDecoration="underline"
        height="auto"
      >
        {product.name}
      </Text>
    </GridItem>
  );
}
