import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppStore } from "./types";


const storeName = "app";

const initialState: IAppStore = {
  isLoading: false,
}

export const appSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setIsLoading(state: IAppStore, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    }
  }
})

export const appActions = {
  setIsLoading: appSlice.actions.setIsLoading,
}

export const appReducer = appSlice.reducer;
