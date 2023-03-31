import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: #1e3ba1;
  padding-top: ${RFValue(26)}px;

  position: relative;
`;

export const Header = styled.View`
  flex: 1;
  max-height: 240px;
  background-color: #1e3ba1;
  align-content: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  line-height: 21px;
  color: #fff;
  text-align: center;
  margin-top: ${RFValue(16)}px;
`;

export const ContainerHighLight = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const TextCounterHighLight = styled.Text`
  font-size: ${RFValue(62)}px;
  line-height: 80px;
  color: #fff;
`;

export const HeaderTextHighLight = styled.Text`
  font-size: 18px;
  line-height: 21px;
  color: #fff;
`;

export const BodyContainer = styled.View`
  flex: 2;
  width: 100%;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 10px 20px;
`;

export const ListArea = styled.View`
  width: 100%;
`;

export const AddButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const AddIcon = styled(Ionicons)`
  font-size: 54px;
  color: #1e3ba1;
`;

export const NoDataArea = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const NoDataImage = styled.Image`
  width: ${RFValue(350)}px;
  height: ${RFValue(250)}px;
`;
export const NoDataText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: #000;
`;
