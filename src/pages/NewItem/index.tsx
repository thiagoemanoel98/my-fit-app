import React, { useState } from "react";
import { TextInput, View } from "react-native";

import * as S from "./styles";

const NewItem: React.FC = () => {
  const [name, setName] = useState();
  const [kcal, setKcal] = useState();

  const handleOnSave = () => {
    console.log(name, kcal);
  };

  return (
    <S.Container>
      <S.FormContainer>
        <S.InputArea>
          <S.Label>Nome</S.Label>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
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
      <S.ButtonContainer>
        <S.ButtonText>Salvar</S.ButtonText>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default NewItem;
