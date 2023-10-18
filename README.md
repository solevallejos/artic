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
* [Typescript](https://www.typescriptlang.org/)
* [Fast Image](https://github.com/DylanVann/react-native-fast-image)
* [React Native HTML View](https://github.com/jsdf/react-native-htmlview)

## API Reference
Base URL https://api.artic.edu/

#### Get all the artworks
```http
  GET /api/v1/artworks?page=${page}&limit=${limit}
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page`    | `number` | Value necessary for pagination.                     |


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `limit`   | `number` | Limit the ammount of data retrieved         |


## Unresolved Issues
### Unrecognized Font-Family by iOS
Despite being installed in all the correct places in the project, iOS cannot recognize the installed fonts. I attempted to resolve this issue with various methods, [including this one](https://www.pixeldock.com/blog/uifont-problem-when-using-more-than-2-custom-fonts-of-the-same-font-family/), but they were not successful. Default system fonts for each operating system were used to avoid potential problems. The original design idea was to use the Sabon and IdealSans fonts in the same way they are used on the website.

### Deprecated Prop-types
React Native HTML View uses deprecated prop-types, which results in an error every time the project is loaded. The solution involves using a patch, but as this could potentially cause issues, it was decided to leave the error as is.