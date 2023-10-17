import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { LocationType } from '../../types';

interface LocationDataState {
  locationData: LocationType;
  setLocationData: (locationData: LocationType) => void;
}

const useLocationDataStore = create<LocationDataState>()(
  persist(
    (set) => ({
      locationData: {
        fullAddress: '',
        region1depth: '',
        region2depth: '',
        region3depth: '',
      },
      setLocationData: (locationData: LocationType) =>
        set(() => ({ locationData: locationData })),
    }),
    { name: 'locationDataStore' }
  )
);

export default useLocationDataStore;
