import { MomentInput } from "moment";

export interface ItemList {
  id: string;
  name: string;
  kcal: number;
  date: MomentInput;
}

export interface DataProviderData {
  currentData: MomentInput;
  currentKcal: number;
  currentList: ItemList[];
  handleChangeDate: (item: ItemList) => void;
  addItem : (item: ItemList) => void
}
