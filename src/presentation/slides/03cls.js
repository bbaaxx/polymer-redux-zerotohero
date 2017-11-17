import React from "react";
import { Heading, Slide, Image } from "spectacle";
import { getImages } from "../utils/images.js";

export const slide = (key) => (
  <Slide key={key} transition={["fade"]} bgColor="secondary">
    <Heading size={4} textColor="primary">
      Component Layer State
    </Heading>
    <Image src={getImages()['c-l-s-diag']} margin="20px auto 20px" />
  </Slide>
);
