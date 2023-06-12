import { atom } from 'recoil';
import { WeatherType, LocationType } from './utils/types';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const skyCodeState = atom<number>({
    key: 'skyCodeState',
    default: 1,
})
export const rainfallCodeState = atom<number>({
    key: 'rainfallCodeState',
    default: 0,
})
export const windChillState = atom<number>({
    key: 'windChillState',
    default: 26,
})

export const fullPageState = atom<number>({
    key: 'fullPageState',
    default: 1,
})
export const currentPageState = atom<number>({
    key: 'currentPageState',
    default: 1,
})

const initialWeatherInfo: WeatherType = {sky: 1, temperature: 0, hourRainfall: 0, humidity: 0, rainfallType: 0, windSpeed: 0, windChill: 0}

export const weatherDataState = atom<WeatherType>({
    key: 'weatherDataState',
    default: initialWeatherInfo,
    effects_UNSTABLE: [persistAtom],
})

const initialLocationInfo: LocationType = {fullAddress: "", region1depth: "", region2depth: "", region3depth: ""}
export const locationDataState = atom<LocationType>({
    key: 'locationDataState',
    default: initialLocationInfo,
    effects_UNSTABLE: [persistAtom],
})