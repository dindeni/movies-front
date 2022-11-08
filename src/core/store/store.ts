import { configureStore, PreloadedState, combineReducers } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import { movieReducer } from 'features/Movie/redux/reducer';

import { globalReducer } from '../reduxSlices/global/reducer';
import { searchReducer } from '../reduxSlices/search/reducer';
import { trendingReducer } from '../reduxSlices/trending/reducer';

const rootReducer = combineReducers({
  trending: trendingReducer,
  movie: movieReducer,
  search: searchReducer,
  global: globalReducer,
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
