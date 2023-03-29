import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ItemList } from "../../types";
import * as S from "./styles";

interface ItemListProps {
  item: ItemList;
}

const Item: React.FC = ({ item }: ItemListProps) => {
  return (
    <S.Container>
      <S.IconContainer>
        <MaterialCommunityIcons
          name="food-fork-drink"
          size={30}
          color={"#1e3ba1"}
        />
      </S.IconContainer>
      <S.InfoContainer>
        <S.Title>{item.name}</S.Title>
        <S.Kcal> {item.kcal}</S.Kcal>
      </S.InfoContainer>
    </S.Container>
  );
};

export default Item;
