import React from "react";
import { Heading, Slide, List, ListItem, Image } from "spectacle";
import { getImages } from "../utils/images.js";

export const slide = (key) => (
  <Slide key={key} transition={["fade"]} bgColor="tertiary" textColor="primary">
    <Heading size={4} textColor="primary">
      No lo se Rick ...
    </Heading>
    <List>
      <ListItem>SRP</ListItem>
      <ListItem>DRY</ListItem>
      <ListItem>...</ListItem>
    </List>
    <Image src={getImages()['your-code-smells']} width="400px" margin="20px auto 20px" />

  </Slide>
);
