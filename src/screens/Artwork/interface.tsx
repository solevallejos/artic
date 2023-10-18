export interface ArtworkInfo {
  artist: {
    artist_title: string | null;
  };
  artwork: {
    title: string | null;
    id: string | null;
    additional_information: {
      place_of_origin: string | null;
      date_display: string | null;
      medium_display: string | null;
      dimensions: string | null;
      credit_line: string | null;
      reference_number: string | null;
    };
  };
}
