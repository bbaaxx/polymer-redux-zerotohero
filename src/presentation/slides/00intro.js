import React from "react";
import { Slide, Heading, Text, Image } from "spectacle";
import { getImages } from "../utils/images.js";

export const slide = (key) => (
  <Slide key={key} transition={["zoom"]} bgColor="primary">
    <Image src={getImages()['polymer-loves-redux']} margin="0px auto 40px" />
    <Heading size={4} caps lineHeight={1} textColor="secondary">
      Comunicacion entre componentes
    </Heading>
    <Text caps margin="10px 0 0" textColor="tertiary" size={1} fit bold>
      Polython 2017 - CDMX
    </Text>
  </Slide>
);
