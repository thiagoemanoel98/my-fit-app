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
  handleChangeDate: (date: MomentInput) => void;
  updateCurrentDay: (date: MomentInput) => void;
  addItem : (item: ItemList) => void
}
