import { Img } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  src: string;
}

export function TopPageImage(props: Props) {
  return (
    <Box position="relative" w="100%">
      <Img src={props.src} alt="calmato top page image" objectFit="contain" />
      <Text
        fontSize="4xl"
        position="absolute"
        bottom="12"
        left="16"
        color="white"
        fontWeight="bold"
      >
        Calmato Portfolio
      </Text>
    </Box>
  );
}
