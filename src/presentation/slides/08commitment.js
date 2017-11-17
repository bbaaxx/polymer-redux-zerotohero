import React from "react";
import { Slide, Heading } from "spectacle";
import { getImages } from "../utils/images.js";

export const slide = (key) => (
  <Slide key={key} transition={["fade"]} bgDarken="0.5" bgImage={getImages()['commitment-sepia']} textColor="primary">
    <Heading caps size={1} textColor="primary">
      compromisos
    </Heading>
  </Slide>
);
