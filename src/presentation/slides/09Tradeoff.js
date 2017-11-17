import React from "react";
import { Slide } from "spectacle";
import { getImages } from "../utils/images.js";
const notes = `
  Muchos de los proyectos no necesitan Redux ||
  Redux representa cambiar cierta libertad ||
  Lo importante es utilizar el modelo con el que los
  desarrolladores se sientan mas felices.
  `;

export const slide = (key) => (
  <Slide key={key} notes={notes} transition={["fade"]} bgDarken="0.3" bgImage={getImages()['balance-stones']} textColor="primary">
  </Slide>
);
