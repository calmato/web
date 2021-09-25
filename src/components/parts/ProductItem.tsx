import { Img } from "@chakra-ui/image";
import { Box, BoxProps, Center } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React from "react";
import { Product } from "../../types";

interface Props {
  boxProps?: BoxProps;
  product: Product;
}

export function ProductItem(props: Props) {
  const { product } = props;

  return (
    <Box {...props.boxProps}>
      <Center mb={2}>
        <Img alt={product.name} src={product.imgSrc} />
      </Center>
      <Text whiteSpace="nowrap">{product.name}</Text>
    </Box>
  );
}
