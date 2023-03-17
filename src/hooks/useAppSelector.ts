import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppStore } from '../store/store';

export type RootState = ReturnType<AppStore['getState']>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
