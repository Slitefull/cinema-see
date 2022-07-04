import { createSelector } from 'reselect';
import { IRootStore } from "@/types";


const catalogState = (state: IRootStore) => state.catalog;

const getCatalog = createSelector(catalogState, (store) => store.catalog);

export const catalogSelectors = {
  getCatalog,
};
