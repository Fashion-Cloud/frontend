import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { LocationType, WeatherType } from './types';

const { persistAtom } = recoilPersist();

export const userIdState = atom<number>({
  key: 'userIdState',
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const latitudeState = atom<number>({
  key: 'latitudeState',
  default: 0,
});

export const longitudeState = atom<number>({
  key: 'longitudeState',
  default: 0,
});

export const skyStatusState = atom<string>({
  key: 'skyStatusState',
  default: 'NONE',
});
export const rainfallTypeState = atom<string>({
  key: 'rainfallTypeState',
  default: 'NONE',
});
export const windChillState = atom<number>({
  key: 'windChillState',
  default: 26,
});

export const fullPageState = atom<number>({
  key: 'fullPageState',
  default: 1,
});
export const currentPageState = atom<number>({
  key: 'currentPageState',
  default: 1,
});

// MainDrawer에서 Home or Lookbook
export const menuState = atom<string>({
  key: 'menuState',
  default: 'Home',
  effects_UNSTABLE: [persistAtom],
});

// InfoBox에서 Weather Data
const initialWeatherInfo: WeatherType = {
  sky: 'SUNNY',
  temperature: 0,
  hourRainfall: 0,
  humidity: 0,
  rainfallType: 'NONE',
  windSpeed: 0,
  windChill: 0,
};

export const weatherDataState = atom<WeatherType>({
  key: 'weatherDataState',
  default: initialWeatherInfo,
  effects_UNSTABLE: [persistAtom],
});

// InfoBox에서 Location Data
const initialLocationInfo: LocationType = {
  fullAddress: '',
  region1depth: '',
  region2depth: '',
  region3depth: '',
};

export const locationDataState = atom<LocationType>({
  key: 'locationDataState',
  default: initialLocationInfo,
  effects_UNSTABLE: [persistAtom],
});

export const lookbookIdState = atom({
  key: 'lookbookState',
  default: '',
});
export const lookbookNameState = atom({
  key: 'lookbookNameState',
  default: '봄',
});
