import {ArtworkData} from './interface';

export const setArtworkData = (
  data: any[] | undefined,
): ArtworkData[] | undefined => {
  if (Array.isArray(data)) {
    const newArray = data.map(item => ({
      artwork: {
        title: item?.title || null,
        thumbnail: item?.thumbnail?.lqip || null,
        width: item?.thumbnail?.width || null,
        height: item?.thumbnail?.height || null,
        id: item?.image_id || null,
        additional_information: {
          place_of_origin: item?.place_of_origin || 'Unknown',
          dimensions: item?.dimensions || 'Unknown',
          date_display: item?.date_display || 'Unknown',
          medium_display: item?.medium_display || 'Unknown',
          credit_line: item?.credit_line || 'Unknown',
          reference_number: item?.main_reference_number || 'Unknown',
        },
      },
      artist: {
        artist_title: item?.artist_title || 'Unknown artist',
        artist_display: item?.artist_display || null,
        description: item?.description || null,
      },
    }));
    return newArray;
  }
};
