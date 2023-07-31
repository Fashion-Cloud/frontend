export type SinglePostType = {
    id: string;
    userId: string;
    name: string;
    image: string;
    review: string;
    skyStatus: number;
    rainfallType: number;
    windChill: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}

export type WeatherType = {
    sky: number;
    temperature: number;
    hourRainfall: number;
    humidity: number;
    rainfallType: number;
    windSpeed: number;
    windChill: number;
}

export type LocationType = {
    fullAddress: string;
    region1depth: string;
    region2depth: string;
    region3depth: string;
}

export type WeatherPostType = {
    id: string;
    name: string;
    imageUrl: string;
};

export type LookBookListType = {
    id: string;
    name: string;
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
    name: string;
    image: string;
    review: string;
    skyStatus: number;
    rainfallType: number;
    windChill: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}