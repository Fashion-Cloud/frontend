import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { LocationType, WeatherType } from './types';

const { persistAtom } = recoilPersist();

export const userIdState = atom<string>({
  key: 'userIdState',
  default: '550e8400-e29b-41d4-a716-446655440000',
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

// FashionList, SearchBox
// export const skyCodeState = selector({
//     key: 'skyCodeState',
//     get: async ({ get }) => {
//         const latitude = get(latitudeState);
//         const longitude = get(longitudeState);

//         if(latitude && longitude) {
//             try{
//                 const response = await axios.get(`/api/v1/weather?latitude=${latitude}&longitude=${longitude}`, {
//                     headers: {
//                         Accept: 'application/json'
//                     },
//                     withCredentials: true
//                 });
//                 return response.data.data?.sky;
//             } catch(error) {
//                 throw error;
//             }
//         }
//     }
// })
export const skyCodeState = atom<number>({
  key: 'skyCodeState',
  default: 1,
});
export const rainfallCodeState = atom<number>({
  key: 'rainfallCodeState',
  default: 0,
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
  sky: 1,
  temperature: 0,
  hourRainfall: 0,
  humidity: 0,
  rainfallType: 0,
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
