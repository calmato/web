import { Img } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { OGPContent } from "../types/lib/ogp";

interface Props {
  href?: string;
  ogpContent: OGPContent;
}
export function OGPContentCard(props: Props) {
  const { href, ogpContent } = props;

  return (
    <Box borderRadius="lg" border="1px" borderColor="gray.300">
      <Box as="a" href={href} target="_blank" display="flex" alignItems="center" justifyContent="space-between">
        <Text pl={3} fontSize="md" fontWeight="bold" color="gray.800" display="block">
          {ogpContent.title}
        </Text>
        <Img src={ogpContent.image} display="block" objectFit="contain" w="220px" p={1} />
      </Box>
    </Box>
  );
}
