# Art Institute of Chicago app 🖼️ 
Users can select their favorite artworks by tapping the star in the upper-left corner and view them later by selecting "Go to Favorites". Additionally, when selecting an image, users can access detailed information about the artwork.

## UI Design
I decided to replicate the design of the mobile version of the website. I used the same color palette, component layout, and typography (please see the clarification in the Issues section).

## Installing the application
To install this project please follow this instructions:

1. Clone the repository:
```bash
git clone https://github.com/solevallejos/artic.git
```

2. Go to the project;s directory:
```bash
cd <project_directory>
```

3. Install all the necessary dependencies:
```bash
npm install
```

If you are using iOS, navigate to the correct directory and install its necessary dependencies:
```bash
cd ios
pod install
cd ..
```
To run this project on Android, write the following command:
```bash
npx react-native run-android
```

To run this project on iOS, write the following command:
```bash
npx react-native run-ios
```

## Assets

### Color palette
- ![#b50838](https://placehold.co/15x15/b50838/b50838.png) `#b50838`
- ![#1a1a1a](https://placehold.co/15x15/1a1a1a/1a1a1a.png) `#1a1a1a`
- ![#767676](https://placehold.co/15x15/767676/767676.png) `#767676`
- ![#edeef1](https://placehold.co/15x15/edeef1/edeef1.png) `#edeef1`
- ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) `#FFFFFF`


## Project structure
```
assets/
src/
├── axios
├── components
├── context
├── helpers
├── hooks
└── screens
```

## Libraries used
* [React Native Navigation](https://reactnavigation.org/docs/navigating)
* [Styled Components](https://styled-components.com/)
* [Axios](https://axios-http.com/)
* [React Native Safe Area Context](react-native-safe-area-context)
* [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
* [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
* [React Native SVG](https://github.com/software-mansion/react-native-svg)
* [React Native SVG Transformer](https://github.com/kristerkari/react-native-svg-transformer)
* [React Native Splash Screen](https://www.npmjs.com/package/react-native-splash-screen)
* [Typescript](https://www.typescriptlang.org/)
* [Fast Image](https://github.com/DylanVann/react-native-fast-image)
* [React Native HTML View](https://github.com/jsdf/react-native-htmlview)


## Unresolved Detected Issues
### Font-Family unrecognized by iOS
A pesar de estar instalada en todos los lugares correctos del proyecto, iOS no puede reconocer las tipografias instaladas. Intente arreglarlo de muchas formas, inclusive de esta [forma](https://www.pixeldock.com/blog/uifont-problem-when-using-more-than-2-custom-fonts-of-the-same-font-family/#8230) y desafortunadamente, no lo pude solucionar. Se usaron las tipogafias por default de cada SO para prevenir problemas.
La idea del diseño original, era utilizar las tipografias Sabon y IdealSans de la misma manera que se utilizan en la pagina.

### Deprecated Prop-types
React Native HTML View uses deprecated prop-types and it shows an error everytime the project is loaded. The solution is using a patch, pero como esto podia ocasionar potenciales problemas, decidi dejar el error.