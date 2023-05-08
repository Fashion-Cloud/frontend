export namespace type {
    export interface PostType {
        id: string;
        userId: string;
        name: string;
        image: string;
        createdAt: string;
        updatedAt: string;
        deletedAt: string;
    };

    export interface SinglePostType {
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

    export interface CreatePostType {
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

    export interface WeatherType {
        sky: number;
        temperature: number;
        hourRainfall: number;
        humidity: number;
        rainfallType: number;
        windSpeed: number;
        windChill: number;
    }

    export interface LocationType {
        fullAddress: string;
        region1depth: string;
        region2depth: string;
        region3depth: string;
    }

    export interface SearchWeatherType {
        skyCode: number;
        rainfallCode: number;
        windChill: number;
    }

    export interface WeatherPostType {
        id: string;
        name: string;
        image: string;
    };
    
    export interface ImageUploadType {
        createdAt: string;
        updatedAt: string;
        deletedAt: string;
        url: string;
    }
}