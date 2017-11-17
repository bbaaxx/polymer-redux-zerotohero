import React from "react";
import { Heading, Slide, Text, Image } from "spectacle";
import { getImages } from "../utils/images.js";

export const slide = (key) => (
  <Slide key={key} transition={["fade"]} bgColor="primary">
    <Heading size={6} textColor="tertiary">
      Yo @bbaaxx =)
    </Heading>
      <Image src={getImages()['this-is-me']} width="400px" margin="20px auto 20px" />
      <Text size={6} textColor="secondary">
        JavaScript Junkie, Papá, y trabajo en:
      </Text>
      <Image src={getImages()['sngular-logo']} width="300px" margin="20px auto 20px" />
  </Slide>
);
