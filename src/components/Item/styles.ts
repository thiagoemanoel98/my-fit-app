import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LeftArea = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View`
  width: 60px;
  height: 60px;
  border: 2px solid #1e3ba1;
  border-radius: 30px;
  margin-right: 14px;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.View`
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: 21px;
`;

export const Kcal = styled.Text`
  font-size: ${RFValue(10)}px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.5);
`;

export const TreeDotsIcon = styled(Entypo)`
  font-size: ${RFValue(16)}px;
  line-height: 21px;
  color: #1e3ba1;
`;

export const PopupButton = styled.TouchableOpacity`
  /* flex: 1; */
  padding: 8px;
  width: 120px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PopupText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: #000;
  text-align: justify;
  margin-right: 2px;
`;

export const TrashIcon = styled(EvilIcons)`
  font-size: ${RFValue(18)}px;
  line-height: 21px;
  color: #f81a1d;
`;
