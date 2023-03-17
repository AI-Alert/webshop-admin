import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState } from '../../models/store/store';

const initialState: IInitialState = {
  loading: false,
  errors: '',
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    loadStarted(state) {
      state.loading = true;
    },
    loadCompleted(state) {
      state.loading = false;
    },
    fetchError(state, action: PayloadAction<string>) {
      state.errors = action.payload;
    },
    // getQualification(state, action: PayloadAction<IQualification[]>) {
    //   state.qualification = action.payload;
    // },
  },
});
