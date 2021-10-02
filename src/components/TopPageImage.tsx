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
      <Box position="relative" bottom={["12", "18", "24", "36"]} left="12" display="flex" alignItems="center">
        <Img src="img/calmato.png" boxSize="36px" display="block" />
        <Text fontSize={["2xl", "2xl", "2xl", "4xl"]} ml="2" color="white" fontWeight="bold" >
          Calmato
        </Text>
      </Box>
    </Box>
  );
}
