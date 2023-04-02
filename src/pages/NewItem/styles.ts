import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: space-between;
`;

export const FormContainer = styled.View`
  margin-top: 60px;
  align-items: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.secundary};
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${RFValue(14)}px;
`;

export const InputArea = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 28px;
`;
