import React from "react";
import { Heading, Slide, List, ListItem } from "spectacle";
import { getImages } from "../utils/images.js";

const notes = `
  Decidi escribir una pequena aplicacion para ustedes. ||
  Algo simple pero no tan simple como para explicar que es Redux. ||
  {*** Muestras la app}
  `;

export const slide = (key) => (
  <Slide key={key} notes={notes} transition={["fade"]} bgImage={getImages()['super-awesome']} bgDarken="0.6" textColor="tertiary">
    <Heading size={4} textColor="primary" caps>
      Seleccion de Super Heroe
    </Heading>
    <List>
      <ListItem>Grid con tarjetas de Super heroes</ListItem>
      <ListItem>Mostrar de 10 en 10</ListItem>
      <ListItem>Navegar adelante y atras</ListItem>
      <ListItem>... usar Polymer</ListItem>
    </List>
  </Slide>
);
