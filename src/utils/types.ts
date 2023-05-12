export namespace type {
    export type PostType = {
        id: string;
        userId: string;
        name: string;
        image: string;
        createdAt: string;
        updatedAt: string;
        deletedAt: string;
    };

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

    export type CreatePostType = {
        userId: string;
        name: string;
        image: string;
        review: string;
        temperature: number;
        skyStatus: number;
        humidity: number;
        rainfallType: number;
        windSpeed: number;
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

    export type SearchWeatherType = {
        skyCode: number;
        rainfallCode: number;
        windChill: number;
    }

    export type WeatherPostType = {
        id: string;
        name: string;
        image: string;
    };
    
    export type ImageUploadType = {
        createdAt: string;
        updatedAt: string;
        deletedAt: string;
        url: string;
    }
}