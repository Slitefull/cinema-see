import { ICatalogStore } from "./pages/catalog/types";
import { IAppStore } from "./app/types";


export interface IRootStore {
  app: IAppStore;
  catalog: ICatalogStore;
}
