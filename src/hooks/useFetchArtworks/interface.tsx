export interface ArtworkData {
  artwork: {
    title: string | null;
    thumbnail: string | null;
    id: string | null;
    width: number | null;
    height: number | null;
    additional_information: {
      dimensions: string | null;
      date_display: string | null;
      medium_display: string | null;
      credit_line: string | null;
      reference_number: string | null;
    };
  };
  artist: {
    artist_title: string | null;
    artist_display: string | null;
    description: string | null;
  };
}
