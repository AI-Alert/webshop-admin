import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import { adminSlice } from './slice/slice';

const rootReducer = combineReducers({
  adminReducer: adminSlice.reducer,
});

export const setupStore = (): Store => (
  configureStore({
    reducer: rootReducer,
  })
);

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
