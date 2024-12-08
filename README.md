# Portfolio using Astro

Welcome to the code behind my personal website [elirizk.me](https://elirizk.me). I have built it using Astro, and it is greatly inspired by one of their existing templates. I might renovate it soon enough, but until then I'll keep it open source. 

## Prerequisites

- Node.js (version 8.2.5 or higher)

## Installation

To install the dependencies, run the following command in the root directory:

```sh
npm install
```

## Running in Development Mode
To run it in dev mode, just run the following command in the root directory:

```
npm run dev
```

## Building for Production
To build the project for production, run:
```
npm run build
```

## Image Mapping

The `ImageComponent.astro` file in the `src/components` directory maps the image imports in order to use them with Astro's built-in Image component. So, after adding an asset in the `src/assets` directory, make sure to add its mapped import function in `src/components/ImageComponent.astro`. I acknowledge that might not be the best way of doing things, but it works. I am not the most experienced front end developper, so if anyone has a better idea for rendering images in Astro, please let me know.

## Contributing

If you would like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.