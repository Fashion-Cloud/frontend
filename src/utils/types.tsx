export namespace type {
    export interface PostType {
        id: string;
        userId: string;
        name: string;
        image: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date;
    };

    export interface WeatherType {
        sky: string;
        place: string;
        temperature: number;
        hourRainfall: number;
        humidity: number;
        rainfallType: number;
        windSpeed: number;
    }
}