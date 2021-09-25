import { Img } from "@chakra-ui/image";
import { Box, BoxProps, Center } from "@chakra-ui/layout";
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
    <Box
      as="button"
      onClick={() => handleClick(product.linkName)}
      {...props.boxProps}
    >
      <Center mb={2}>
        <Img alt={product.name} src={product.imgSrc} />
      </Center>
      <Text whiteSpace="nowrap">{product.name}</Text>
    </Box>
  );
}
