import React from 'react';
import { Svg, G, Path } from 'react-native-svg';
import { THEME } from '../theme/theme';

const Menu = () => (
  <Svg fill="none" height={50} viewBox="0 0 24 24" width={50} xmlns="http://www.w3.org/2000/svg">
    <G clipRule="evenodd" fill={THEME.COLORS.SECONDARY_TEXT} fillRule="evenodd">
      <Path d="m19.5 8.25h-15v-1.5h15z" />
      <Path d="m19.5 12.75h-15v-1.5h15z" />
      <Path d="m19.5 17.25h-15v-1.5h15z" />
    </G>
  </Svg>
);

export default Menu;
