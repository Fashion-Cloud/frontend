import { atom } from 'recoil';

export const fullPageState = atom<number>({
  key: 'fullPageState',
  default: 1,
});
export const currentPageState = atom<number>({
  key: 'currentPageState',
  default: 1,
});

export const lookbookNameState = atom({
  key: 'lookbookNameState',
  default: '봄',
});
