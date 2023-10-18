import React from 'react';
import {LargeBody} from '../../../assets/typography/typography';
import Painting from '../../../assets/images/painting';
import {Button, Container} from '../../components/index';
import { ErrorContainer } from './styled';

interface ErrorProps {
  message: string;
  reloadNavigation: () => void;
}

const Error: React.FC<ErrorProps> = ({message, reloadNavigation}) => {
  return (
    <Container>
      <ErrorContainer>
        <Painting />
        <LargeBody>{message}</LargeBody>
        <Button text="Try again" onPress={reloadNavigation} />
      </ErrorContainer>
    </Container>
  );
};

export default Error;
