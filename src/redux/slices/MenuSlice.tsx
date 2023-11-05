import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MenuState {
    selectedItem:string
}

const initialState: MenuState = {
    selectedItem:''
};

export const MenuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setSelectedItem: (state, action: PayloadAction<string>) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { setSelectedItem } = MenuSlice.actions;

export default MenuSlice.reducer;