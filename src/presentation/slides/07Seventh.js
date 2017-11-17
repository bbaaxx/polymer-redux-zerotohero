import React from "react";
import { Heading, Slide, List, ListItem, Image } from "spectacle";
import { getImages } from "../utils/images.js";

export const slide = (key) => (
  <Slide key={key} transition={["fade"]} bgDarken="0.5" bgColor="primary" textColor="tertiary">

    <List>
      <ListItem>Componentes reutilizables !</ListItem>
      <ListItem>Comunicacion via mediators | AKA. Container en:</ListItem>
        <Image src={getImages()['react-logo']} width="80px" />
      <ListItem>Pero principalmente ...</ListItem>
    </List>
    <Heading size={4} textColor="secondary">
      componentes reutilizables
    </Heading>
  </Slide>
);
