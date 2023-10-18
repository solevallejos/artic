import React from 'react';
import Rows from '../../components/Rows';
import {StyleSheet} from 'react-native';
import {Image, RenderHTML, Information} from '../../components/index';
import {createRows, createURL} from './helper';
import {ScrollView, Block} from './styled';
import {THEME} from '../../../assets/theme/theme';
import {LargeBody, Title} from '../../../assets/typography/typography';

const Artwork = ({route}) => {
  const {
    item: {artist, artwork},
  } = route.params;
  const row = createRows({artist, artwork});
  const imageURL = createURL(artwork?.id);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={imageURL} resizeProperty="contain" />
      <Block>
        <Title marginBottom="0">{artwork?.title}</Title>
        {artist?.artist_display && (
          <LargeBody>{artist?.artist_display}</LargeBody>
        )}
      </Block>
      {artist?.description && (
        <Block>
          <LargeBody bold>Description</LargeBody>
          <LargeBody>
            <RenderHTML content={artist?.description} />
          </LargeBody>
        </Block>
      )}
      <Block>
        <Title marginBottom="0">Additional Information</Title>
        <Rows rows={row} />
      </Block>
      <Information />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: THEME.GRID.GAP,
    paddingBottom: THEME.GRID.GUTTER,
  },
});

export default Artwork;
