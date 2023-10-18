import {ArtworkInfo} from './interface';

export const createRows = (data: ArtworkInfo) => {
  const {artist, artwork} = data;
  const rows = [
    {label: 'Artist', value: artist?.artist_title || 'Unknown'},
    {label: 'Title', value: artwork?.title},
    {
      label: 'Place',
      value: artwork?.additional_information?.place_of_origin,
    },
    {label: 'Date', value: artwork?.additional_information?.date_display},
    {
      label: 'Medium',
      value: artwork?.additional_information?.medium_display,
    },
    {
      label: 'Dimensions',
      value: artwork?.additional_information?.dimensions,
    },
    {
      label: 'Credit Line',
      value: artwork?.additional_information?.credit_line,
    },
    {
      label: 'Reference Number',
      value: artwork?.additional_information?.reference_number,
    },
  ];
  return rows;
};

export const createURL = (id: string) =>
  id !== null
    ? `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`
    : null;
