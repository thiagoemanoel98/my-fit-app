import React from 'react';
import { View } from 'react-native';

import * as S from "./styles";

const NewItem: React.FC = () => {
    return (
        <S.Container>
            <S.FormContainer>

            </S.FormContainer>
            <S.ButtonContainer>
                <S.ButtonText>
                    Salvar
                </S.ButtonText>
            </S.ButtonContainer>
        </S.Container>
    )
}

export default NewItem;