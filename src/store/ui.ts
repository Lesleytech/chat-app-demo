import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  modals: {
    newRoom: {
      visible: false,
      data: null,
    },
    joinRoom: {
      visible: false,
      data: null as string | null,
    },
  },
};

type ModalNames = keyof typeof initialState.modals;

const slice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openModal: <T extends ModalNames>(
      ui: Draft<typeof initialState>,
      { payload }: PayloadAction<{ name: T; data?: (typeof initialState.modals)[T]['data'] }>,
    ) => {
      ui.modals[payload.name].visible = true;
      if (payload.data) ui.modals[payload.name].data = payload.data;
    },
    closeModal: (ui, action: PayloadAction<ModalNames>) => {
      ui.modals[action.payload].visible = false;
      ui.modals[action.payload].data = null;
    },
  },
});

export default slice.reducer;

export const uiActions = slice.actions;
