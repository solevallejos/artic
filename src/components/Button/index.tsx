import React from 'react';
import {Button as View} from './styled';
import {THEME} from '../../../assets/theme/theme';
import {LargeBody} from '../../../assets/typography/typography';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({text, onPress}) => (
  <View onPress={onPress}>
    <LargeBody color={THEME.COLORS.BACKGROUND}>{text}</LargeBody>
  </View>
);

export default Button;
