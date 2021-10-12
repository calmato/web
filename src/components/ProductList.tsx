import { Box, Flex, Grid } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import React, { useCallback } from "react";
import { Product } from "../types";
import { ProductItem } from "./parts/ProductItem";

interface Props {
  productList: Product[];
}

export function ProductList(props: Props) {
  const { productList } = props;
  const router = useRouter();

  const handleItemClick = useCallback(
    (linkName: string) => {
      router.push(linkName);
    },
    [router]
  );

  return (
    <Grid templateColumns="repeat(2, minmax(50%, 1fr))" gap={0}>
      {productList.map((product, idx) => (
        <ProductItem handleClick={handleItemClick} product={product} key={idx} boxProps={{ mb: 4 }} />
      ))}
    </Grid>
  );
}
