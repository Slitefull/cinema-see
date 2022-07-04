import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICatalogElement, ICatalogStore } from "@/pages/catalog/types";


const storeName = "catalog";

const initialState: ICatalogStore = {
  catalog: [],
}

export const catalogSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setCatalog(state: ICatalogStore, action: PayloadAction<ICatalogElement[]>) {
      state.catalog = action.payload;
    }
  }
})

export const catalogActions = {
  setCatalog: catalogSlice.actions.setCatalog,
};

export const catalogReducer = catalogSlice.reducer;
