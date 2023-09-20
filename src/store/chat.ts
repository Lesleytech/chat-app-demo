import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISelectedRoom {
  id: string;
}

const initialState = {
  selectedRoomId: null as string | null,
};

const slice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setSelectedRoomId: (ui, action: PayloadAction<typeof initialState.selectedRoomId>) => {
      ui.selectedRoomId = action.payload;
    },
  },
});

export default slice.reducer;

export const chatActions = slice.actions;
