import React from 'react';
import {StyleSheet} from 'react-native';
import {ImageNotAvailable} from './styled';
import FastImage from 'react-native-fast-image';
import {THEME} from '../../../assets/theme/theme';
import {LargeBody} from '../../../assets/typography/typography';

interface ImageProps {
  source: string | null;
  resizeProperty: string;
}

const Image: React.FC<ImageProps> = ({source, resizeProperty = 'contain'}) => {
  return source ? (
    <FastImage
      style={styles.image}
      source={{
        uri: source,
        priority: FastImage.priority.normal,
      }}
      resizeMode={resizeProperty}
    />
  ) : (
    <ImageNotAvailable>
      <LargeBody>Image not available.</LargeBody>
    </ImageNotAvailable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    marginBottom: THEME.GRID.GUTTER,
  },
});

export default Image;
