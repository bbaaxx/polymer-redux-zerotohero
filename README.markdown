# Spectacle Boilerplate

## Reference

The Spectacle core API is available at [https://github.com/FormidableLabs/spectacle/blob/master/README.markdown](https://github.com/FormidableLabs/spectacle/blob/master/README.markdown).

## Development

After downloading the boilerplate, your first order of business is to open terminal and run `yarn`. (or `npm install` if you're about that life)

Next, run `rm -R .git` to remove the existing version control.

Then, to start up the local server, run `npm start`

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll

Then go to the ./presentation/slides folder and edit at will.

### Auto import slides
There is a helper available to automagically import all slides in the `slides`
directory found at `./presentation/slides.js`. This loader requires you to return
a `slide` function that takes a `key` parameter and returns a keyed `Slide` element.

Below is the simplest example for a `slide` implementation.

    import React from "react";
    import { Slide } from "spectacle";

    export const slide = key => <Slide key={key}>stuff</Slide>;

### Auto import and preload images
There is also a helper to auto-load your images stored in the `/assets` dir,
it will attempt to auto import any of these `(gif|svg|jpg|jpeg|tiff|png)`.

Then you use it like this (given `./assets/puppies.jpg`):

    import { getImages } from '../images';
    import React from "react";
    import { Slide } from "spectacle";

    export const slide = key => <Slide key={key} bgImage={getImages().puppies}>stuff</Slide>;
     // ref to base64 image content

## Build & Deployment

Building the dist version of the project is as easy as running `npm run build`

If you want to deploy the slideshow to surge, run `npm run deploy`
