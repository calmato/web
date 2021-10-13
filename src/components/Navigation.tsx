import React from "react";
import { List, ListItem, Text } from "@chakra-ui/react";
import { CategoryName } from "../types";

interface Props {
  categories: CategoryName[];
  activeIdx: number;
  handleClickCategory: (idx: number) => void;
}

export function Navigation(props: Props) {
  const { categories, activeIdx, handleClickCategory } = props;

  return (
    <>
      <List>
        {categories.map((name, idx) => (
          <ListItem key={idx} as="button" display="block" mb={4} onClick={() => handleClickCategory(idx)}>
            <Text fontSize={"2xl"} {...(idx === activeIdx ? { fontWeight: "bold" } : { color: "gray" })}>
              {name}
            </Text>
          </ListItem>
        ))}
      </List>
    </>
  );
}
