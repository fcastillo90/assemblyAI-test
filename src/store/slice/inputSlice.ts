import { InputState } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: InputState = {
  firstEntry: '',
  secondEntry: ''
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    cleanEntries: (state) => {
      state.firstEntry = '';
      state.secondEntry = '';
    },
    checkEquality: (state, action: PayloadAction<InputState>) => {
      state.firstEntry = action.payload.firstEntry;
      state.secondEntry = action.payload.secondEntry;
    },
  },
})

// Action creators are generated for each case reducer function
export const { checkEquality, cleanEntries } = inputSlice.actions