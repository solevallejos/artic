import {useEffect, useState} from 'react';
import artworkInstance from '../../axios/artworksInstance';
import {setArtworkData} from './helper';
import {URLS} from '../../axios/constants';
import {ArtworkData} from './interface';

export const useFetchArtworks = () => {
  const [artworks, setArtworks] = useState<ArtworkData[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const limit = 100;

  const fetchData = async () => {
    setLoading('Retrieving artwork');
    try {
      const response = await artworkInstance.get(URLS.ARTWORKS(page, limit));
      const newArtworks = setArtworkData(response?.data?.data);
      setArtworks(prevArtworks =>
        page === 1
          ? (newArtworks as ArtworkData[])
          : [...prevArtworks!, ...(newArtworks as ArtworkData[])],
      );
      setPage(page + 1);
    } catch (err) {
      setArtworks(null);
      setError('There was an error retrieving the data.');
    } finally {
      setLoading(null);
      setError(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const loadMore = () => {
    fetchData();
  };

  return {artworks, error, loading, loadMore};
};
