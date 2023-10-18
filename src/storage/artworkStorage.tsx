import AsyncStorage from '@react-native-async-storage/async-storage';

const ArtworkStorage = {
  get: async () => {
    try {
      const artworkItem = await AsyncStorage.getItem('artworks');
      if (artworkItem !== null) {
        return JSON.parse(artworkItem);
      } else {
        return null;
      }
    } catch (err) {
      console.error('There was an issue saving the artwork');
      return null;
    }
  },
  set: async (artworks: any) => {
    try {
      const artworkItem = JSON.stringify(artworks);
      await AsyncStorage.setItem('artworks', artworkItem);
    } catch (err) {
      console.error('There was an issue retrieving artworks');
    }
  },
};

export default ArtworkStorage;
