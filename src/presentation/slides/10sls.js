import React from "react";
import { Heading, Slide, Image } from "spectacle";
import { getImages } from "../utils/images.js";

export const slide = (key) => (
  <Slide key={key} transition={["fade"]} bgColor="primary">
    <Heading size={3} textColor="tertiary">
      Service Layer State
    </Heading>
    <Image src={getImages()['s-l-s-diag']} margin="20px auto 20px" />
  </Slide>
);
