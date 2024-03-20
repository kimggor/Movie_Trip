export type MovieDataType = {
  movieId: number;
  title: string;
  plot: string;
  releaseDate: string;
  genre: string;
  audience?: number;
  peekview?: number;
  rating: number;
};

export type MoviePlaceDataType = {
  moviePlaceId: number;
  mediaType: string;
  title: string;
  placeName: string;
  placeType: string;
  description: string;
  operTime: string;
  restTime: string;
  closedDay: string;
  address: string;
  lat: number; // 위도
  lng: number; // 경도
};
