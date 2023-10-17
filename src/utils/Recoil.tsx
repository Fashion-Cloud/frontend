import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { LocationType } from './types';

const { persistAtom } = recoilPersist();

export const fullPageState = atom<number>({
  key: 'fullPageState',
  default: 1,
});
export const currentPageState = atom<number>({
  key: 'currentPageState',
  default: 1,
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
