import { Img } from "@chakra-ui/image";
import { BoxProps, Center, GridItem } from "@chakra-ui/layout";
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
    <GridItem as="button" onClick={() => handleClick(product.linkName)} {...props.boxProps}>
      <Center mb={2}>
        <Img alt={product.name} src={product.imgSrc} />
      </Center>
      <Text>{product.name}</Text>
    </GridItem>
  );
}
