import React from "react";
import { Slide, Image } from "spectacle";
import { getImages } from "../utils/images.js";

export const slide = (key) => (
  <Slide key={key} transition={["fade"]} bgColor="primary"  textColor="primary">
    <Image src={getImages()['polython-banner']}/>
  </Slide>
);
