import React from "react";
import { List } from "@chakra-ui/layout";
import { Profile } from "../types";
import { ProfileListItem } from "./parts/ProfileListItem";

interface Props {
  profileList: Profile[];
}

export function ProfileList(props: Props) {
  const { profileList } = props;

  return (
    <List spacing={4}>
      {profileList.map((profile, idx) => (
        <ProfileListItem profile={profile} key={idx} />
      ))}
    </List>
  );
}
