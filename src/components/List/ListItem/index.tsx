import React, {useCallback} from 'react';
import {View} from 'react-native';
import Favorites from '../../../../assets/images/favorites';
import {useNavigation} from '@react-navigation/native';
import {Card, Pressable, SaveArtwork} from './styled';
import {THEME} from '../../../../assets/theme/theme';
import {ArtworkData} from '../../../hooks/useFetchArtworks/interface';
import {Title, LargeBody} from '../../../../assets/typography/typography';
import {Image} from '../../index';

interface ListItemProps {
  item: ArtworkData;
  isSelected: boolean;
  saveArtwork: () => null;
}

const ListItem: React.FC<ListItemProps> = ({item, isSelected, saveArtwork}) => {
  const navigation = useNavigation();
  const {artwork, artist} = item;
  const hasImage = artwork?.thumbnail !== null;

  const goToImageInformation = useCallback(
    (item: ArtworkData) => {
      navigation.navigate('Artwork', {item});
    },
    [navigation, item],
  );

  return (
    <Card>
      {hasImage && (
        <SaveArtwork onPress={() => saveArtwork(item)}>
          <Favorites isSelected={isSelected} />
        </SaveArtwork>
      )}
      <Pressable onPress={() => goToImageInformation(item)}>
        <View>
          <Image source={artwork?.thumbnail} resizeProperty="cover" />
        </View>
        <Title marginBottom="0">{artwork?.title}</Title>
        <LargeBody color={THEME.COLORS.SECONDARY_TEXT}>
          {artist?.artist_title}
        </LargeBody>
      </Pressable>
    </Card>
  );
};

export default React.memo(ListItem);
