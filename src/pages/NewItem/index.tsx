import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { useData } from "../../hooks/data";
import { generateUniqueId } from "../../utils";

import * as S from "./styles";

const NewItem: React.FC = () => {
  const { addItem } = useData();
  const { goBack } = useNavigation();

  const [name, setName] = useState();
  const [kcal, setKcal] = useState();

  const handleOnSave = () => {
    if (name && kcal) {
      addItem({
        id: generateUniqueId(),
        name,
        kcal: Number(kcal),
        date: moment(),
      });
    }
    goBack();
  };

  return (
    <S.Container>
      <S.FormContainer>
        <S.InputArea>
          <S.Label>Nome</S.Label>
          <TextInput
            value={name}
            onChangeText={(text: string) => setName(text)}
            placeholder="Descrição"
          />
        </S.InputArea>
        <S.InputArea>
          <S.Label>Kcal</S.Label>
          <TextInput
            value={kcal}
            onChangeText={(k) => setKcal(k)}
            placeholder="Somente números"
            keyboardType="numeric"
          />
        </S.InputArea>
      </S.FormContainer>
      <S.ButtonContainer onPress={handleOnSave}>
        <S.ButtonText>Salvar</S.ButtonText>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default NewItem;
