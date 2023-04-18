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
}