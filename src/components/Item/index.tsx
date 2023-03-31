import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ItemList } from "../../types";
import * as S from "./styles";
import Popover, { PopoverMode } from "react-native-popover-view";
import { Platform, StatusBar } from "react-native";

interface ItemListProps {
  item: ItemList;
}

const Item: React.FC = ({ item }: ItemListProps) => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <S.Container>
      <S.LeftArea>
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
      </S.LeftArea>

      <Popover
        popoverShift={{ x: -0.5 }}
        mode={PopoverMode.RN_MODAL}
        verticalOffset={
          Platform.OS === "android" ? -StatusBar.currentHeight! : 0
        }
        from={<S.TreeDotsIcon name="dots-three-vertical" />}
      >
        <S.PopupButton>
          <S.PopupText>Excluir</S.PopupText>
          <S.TrashIcon name="trash" />
        </S.PopupButton>
      </Popover>
    </S.Container>
  );
};

export default Item;
