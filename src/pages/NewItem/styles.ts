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
  background-color: #248cdc;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const Label = styled.Text`
  color: #474747;
  font-size: 16px;
  
`;

export const InputArea = styled.View`
  width: 90%;
  border-bottom-width: 1px;
  border-bottom-color: #474747;
  margin-bottom: 28px;
`;
