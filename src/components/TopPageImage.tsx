import { Img } from "@chakra-ui/image";
import { Box, Center } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  src: string;
}

export function TopPageImage(props: Props) {
  return (
    <Box position="relative" w="100%">
      <Img src={props.src} alt="calmato top page image" objectFit="contain" w="100%" />
      <Box position="absolute" bottom={["12px", "24px", "48px", "60px"]} left="24px" display="flex" alignItems="center">
        <Img src="img/calmato.png" boxSize="36px" display="block" />
        <Text fontSize={["2xl", "2xl", "3xl", "4xl"]} ml="2" color="white" fontWeight="bold" >
          Calmato
        </Text>
      </Box>
    </Box>
  );
}
