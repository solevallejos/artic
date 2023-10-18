import React from 'react';
import {ActivityIndicator} from 'react-native';
import {THEME} from '../../../assets/theme/theme';
import {LargeBody} from '../../../assets/typography/typography';

interface LoaderProps {
  message: string;
}

const Loader: React.FC<LoaderProps> = ({message}) => {
  return (
    <>
      <ActivityIndicator color={THEME.COLORS.SECONDARY_TEXT} size="large" />
      <LargeBody>{message}</LargeBody>
    </>
  );
};

export default Loader;
