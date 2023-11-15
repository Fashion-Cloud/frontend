export type SinglePostType = {
  id: string;
  username: string;
  title: string;
  image: string;
  review: string;
  skyStatus: string;
  rainfallType: string;
  windChill: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export type WeatherType = {
  sky: string;
  temperature: number;
  hourRainfall: number;
  humidity: number;
  rainfallType: string;
  windSpeed: number;
  windChill: number;
};

export type LocationType = {
  fullAddress: string;
  region1depth: string;
  region2depth: string;
  region3depth: string;
};

export type WeatherPostType = {
  id: string;
  title: string;
  image: string;
  skyStatus: string;
  temperature: number;
  review: string;
  rainfallType: string;
};

export type LookBookListType = {
  id: string;
  title: string;
  image: string;
  userId: string;
};
export type LookBookBoxType = {
  id: string;
  title: string;
  image: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};
export type UserPostListType = {
  id: string;
  userId: string;
  title: string;
  image: string;
  review: string;
  skyStatus: number;
  rainfallType: number;
  windChill: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};
