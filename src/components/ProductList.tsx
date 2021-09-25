import { Box, Flex, Grid } from "@chakra-ui/layout";
import React from "react";
import { Product } from "../types";
import { ProductItem } from "./parts/ProductItem";

interface Props {
  productList: Product[];
}

export function ProductList(props: Props) {
  const { productList } = props;
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {productList.map((product, idx) => (
        <ProductItem product={product} key={idx} boxProps={{ mb: 4 }} />
      ))}
    </Grid>
  );
}
