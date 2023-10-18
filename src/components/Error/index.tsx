import React from 'react';
import {LargeBody} from '../../../assets/typography/typography';
import Painting from '../../../assets/images/painting';
import Button from '../Button';

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({message}) => {
  return (
    <>
      <Painting />
      <LargeBody>{message}</LargeBody>
      <Button text="Try again" onPress={null} />
    </>
  );
};

export default Error;
