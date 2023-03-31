import React, { createContext, useContext, useEffect, useState } from "react";
import { DataProviderData, ItemList } from "../types";
import moment, { MomentInput } from "moment";
import Item from "../components/Item";
import { filterIsToday, getLocalStorage, setLocalStorage } from "../utils";

interface Props {
  children: React.ReactNode;
}

const DataContext = createContext<DataProviderData>({} as DataProviderData);

export const DataProvider: React.FC<Props> = ({ children }) => {
  const [currentData, setCurrentData] = useState<MomentInput>(moment());
  const [currentKcal, setCurrentKcal] = useState(0);
  const [currentList, setCurrentList] = useState<ItemList[]>([]);
  const [listAllItens, setListAllItens] = useState<ItemList[]>([]);

  const getStorageData = async () => {
    const response = await getLocalStorage();
    setListAllItens(response);
  };

  const addItem = async (item: ItemList) => {
    if (listAllItens) {
      const newList = [...listAllItens, item];
      setListAllItens(newList);
      await setLocalStorage(newList);
      updateCurrentDay();
    } else {
      setListAllItens([item]);
      await setLocalStorage([item]);
      updateCurrentDay();
    }
    setCurrentData(moment());
  };

  const removeItem = async (itemParsed: ItemList) => {
    let newList = listAllItens.filter(function (item) {
      return item.id !== itemParsed.id;
    });

    setListAllItens(newList);
    await setLocalStorage(newList);
    updateCurrentDay();
    setCurrentData(moment());
  };

  const updateCurrentDay = () => {
    if (listAllItens) {
      const filteredList = listAllItens.filter((item) =>
        filterIsToday(item.date, currentData)
      );

      const countKcal = filteredList.reduce((acc, currentValue) => {
        return acc + currentValue.kcal;
      }, 0);

      setCurrentList(filteredList);
      setCurrentKcal(countKcal);
    }
  };

  const handleChangeDate = async (date: MomentInput) => {
    setCurrentData(date);
  };

  useEffect(() => {
    updateCurrentDay();
  }, [currentData, listAllItens]);

  useEffect(() => {
    getStorageData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        currentData,
        currentKcal,
        currentList,
        addItem,
        handleChangeDate,
        updateCurrentDay,
        removeItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("use into of Data Context");

  return context;
};
