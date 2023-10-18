import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {THEME} from '../../../assets/theme/theme';
import {LargeBody} from '../../../assets/typography/typography';
import Container from '../Container';
import { LoaderContainer } from './styled';

interface LoaderProps {
  message: string;
}

const Loader: React.FC<LoaderProps> = ({message}) => {
  return (
    <Container>
      <LoaderContainer>
      <ActivityIndicator color={THEME.COLORS.SECONDARY_TEXT} size="large" />
      <LargeBody>{message}</LargeBody>
      </LoaderContainer>
    </Container>
  );
};

export default Loader;
