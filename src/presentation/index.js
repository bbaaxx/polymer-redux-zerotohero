import React from "react";
import { Deck } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";

import { getTheme } from "./utils/theme";
import { getSlides } from "./utils/slides";
import { getImages } from "./utils/images";
import { importStyles } from "./utils/styles";

importStyles();

preloader(getImages());

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={getTheme()}
      >
        {getSlides().map((slide) => slide)}
      </Deck>
    );
  }
}
