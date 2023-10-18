import React from 'react';
import { Svg, G, Path } from 'react-native-svg';
import { THEME } from '../theme/theme';

const Painting = () => (
<Svg viewBox="0 0 280 350" xmlns="http://www.w3.org/2000/svg" width="300" height="200" style={{ marginBottom: 16}}>
<Path
  d="m2 0h276v350h-276zm12 338h19c2-38 17-60 19-62 1-1 4-15 4-29 0-8 3-17 13-28 10-12-6-61 2-101 8-44 25-55 35-59 9-4 19-6 23-6 0 0-6 13-6 24 1 4-12-2-25 18-8 13-13 61 7 82 13 15 23 14 23 14v26s-54 25-45 40c5 9 20 13 36 15l1-2 10-11 4 1v4l-8 8c28 1 58-5 58-5s31-24 49-23c-1-2-2-4-5-6-8-4-10-6-27-8-25-3-35-18-38-31l-5-5c-1-2 0-1 1-4 0 0 14-20 14-50 0-31-6-63-43-62-1-7 2-21 5-25 99-4 77 99 79 120 0 16-4 41 40 80 5 5 9 11 12 18v-259h-252z"
  fill={THEME.COLORS.MAIN_TEXT}
  fillRule="evenodd"
/>
<Path d="m137 125h11v9h-11zm-19 0h10v9h-10zm-7 35v-7q6-5 12-6l12-2 12 2 12 6v7l-12-5-12-1-12 1z" />
</Svg>
);

export default Painting;


