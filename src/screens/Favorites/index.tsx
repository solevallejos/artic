import React, {useEffect, useState} from 'react';
import {List} from '../../components/index';
import ArtworkStorage from '../../storage/artworkStorage';

const Favorites = () => {
  const [savedArtwork, setSavedArtwork] = useState();

  const loadSelectedItems = async () => {
    try {
      const storedItems = await ArtworkStorage.get();
      if (storedItems) {
        try {
          setSavedArtwork(storedItems);
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

  return <List data={savedArtwork} />;
};

export default Favorites;
