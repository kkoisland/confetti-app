import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuantityState {
  value: number;
}

const initialState: QuantityState = {
  value: 100,
};

const quantitySlice = createSlice({
  name: 'quantity',
  initialState,
  reducers: {
    setQuantity: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setQuantity } = quantitySlice.actions;
export default quantitySlice.reducer;
