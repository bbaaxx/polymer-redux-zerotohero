import React from "react";
import { Slide, BlockQuote, Quote, Cite } from "spectacle";
import { getImages } from "../utils/images.js";

export const slide = (key) => (
  <Slide
    key={key}
    transition={["fade"]}
    bgImage={getImages()['audience-applause']}
    bgDarken="0.8"
  >
    <BlockQuote>
      <Quote>Gracias !</Quote>
      <Cite>Yo</Cite>
    </BlockQuote>
  </Slide>
);
