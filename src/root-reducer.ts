import { combineReducers } from 'redux';
import { appReducer } from './app/store';
import { catalogReducer } from "./pages/catalog/store";


export const rootReducer = combineReducers({
  app: appReducer,
  catalog: catalogReducer,
});
