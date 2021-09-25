import { Avatar } from "@chakra-ui/avatar";
import { Box, ListItem, Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { Profile } from "../../types";

interface Props {
  profile: Profile;
}

export function ProfileListItem(props: Props) {
  const { profile } = props;

  return (
    <ListItem>
      <Flex>
        <Avatar size="lg" name={profile.name} src={profile.avator} />
        <Box pl={4}>
          <Text mb={2} fontSize="md">
            {profile.name}
          </Text>
          <Text fontSize="sm">{profile.introduction}</Text>
        </Box>
      </Flex>
    </ListItem>
  );
}
