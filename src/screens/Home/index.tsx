import React from 'react';
import {Error, Loader, List, Container} from '../../components/index';
import {useFetchArtworks} from '../../hooks/useFetchArtworks/useFetchArtworks';

const Home = () => {
  const {artworks, error, loading, loadMore} = useFetchArtworks();

  return (
    <Container>
      {loading && <Loader message={loading} />}
      {error && <Error message={error} />}
      {artworks && <List data={artworks} loadMore={loadMore} />}
    </Container>
  );
};

export default Home;
