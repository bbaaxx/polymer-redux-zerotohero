import React from "react";
import { Slide, BlockQuote, Quote, Cite } from "spectacle";
import { getImages } from "../utils/images.js";

export const slide = (key) => (
  <Slide key={key} transition={["fade"]} bgDarken="0.5" bgImage={getImages()['your-code-smells']} textColor="primary">
    <BlockQuote>
      <Quote>Los componentes son para hacer composición</Quote>
      <Cite>Ivica Crnkovic</Cite>
    </BlockQuote>
  </Slide>
);
