import { configureStore, PreloadedState, combineReducers } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import { trendingReducer } from '../reduxSlices/trending/reducer';

const rootReducer = combineReducers({
  trending: trendingReducer,
});

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { setupStore, useAppDispatch, useAppSelector };
export type { AppDispatch, RootState, AppStore };
