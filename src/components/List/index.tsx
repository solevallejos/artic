import React, {useEffect, useState} from 'react';
import ListItem from './ListItem';
import {FlatList} from './styled';
import ArtworkStorage from '../../storage/artworkStorage';
import {ArtworkData} from '../../hooks/useFetchArtworks/interface';

interface ListProps<T> {
  data: T[];
  loadMore: () => void;
}

const List: React.FC<ListProps<any>> = ({data, loadMore}) => {
  const [selectedItems, setSelectedItems] = useState<ArtworkData[]>([]);

  const loadSelectedItems = async () => {
    try {
      const storedItems = await ArtworkStorage.get();
      if (storedItems) {
        try {
          setSelectedItems(storedItems);
        } catch (jsonParseError) {
          console.error(
            'Error parsing selected items from AsyncStorage',
            jsonParseError,
          );
        }
      }
    } catch (error) {
      console.error('Error loading selected items from AsyncStorage', error);
    }
  };

  useEffect(() => {
    loadSelectedItems();
  }, []);

  const saveArtwork = async (item: ArtworkData) => {
    let updatedSelection;

    if (
      selectedItems.some(
        selectedItem => selectedItem.artwork?.id === item?.artwork?.id,
      )
    ) {
      updatedSelection = selectedItems.filter(
        selectedItem => selectedItem.artwork?.id !== item?.artwork?.id,
      );
    } else {
      updatedSelection = [...selectedItems, item];
    }
    try {
      await ArtworkStorage.set(updatedSelection);
      setSelectedItems(updatedSelection);
    } catch (error) {
      console.error('Error updating selected items in AsyncStorage', error);
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <ListItem
          item={item}
          saveArtwork={saveArtwork}
          isSelected={selectedItems.some(
            artworkItem => artworkItem?.artwork?.id === item?.artwork?.id,
          )}
        />
      )}
      keyExtractor={(_, index) => index.toString()}
      onEndReachedThreshold={0.5}
      onEndReached={loadMore}
      initialNumToRender={10}
    />
  );
};

export default List;
