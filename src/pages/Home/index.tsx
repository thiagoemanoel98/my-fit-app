import React from "react";
import { FlatList } from "react-native";
import moment from "moment";
import CalendarStripProps from "react-native-calendar-strip";
import { useNavigation } from "@react-navigation/native";

import Item from "../../components/Item";
import * as S from "./styles";

interface ScreenNavigationProp {
  navigate: (screen: string, params?: unknown) => void;
}


const Home: React.FC = () => {
  const {navigate} = useNavigation<ScreenNavigationProp>();

  const data = [
    {
      id: "kskfkdaa",
      name: "Pão",
      kcal: 400,
      date: moment(),
    },
    {
      id: "kskfkdswaa",
      name: "Arroz",
      kcal: 300,
      date: moment(),
    },
    {
      id: "kskfkdwaaa",
      name: "Macarrão",
      kcal: 400,
      date: moment(),
    },
    {
      id: "kskfkd22waa",
      name: "Feijão",
      kcal: 330,
      date: moment(),
    },
    {
      id: "kskfkdwaa33",
      name: "Carne",
      kcal: 500,
      date: moment(),
    },
  ];

  const handleOneNewItem = ():void => {
    navigate("NewItem");
  }

  return (
    <S.Container>
      <S.Header>
        <CalendarStripProps
          daySelectionAnimation={{
            type: "border",
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: "white",
          }}
          style={{ height: 100, paddingTop: 20, paddingBottom: 5 }}
          calendarHeaderStyle={{ color: "white", marginBottom: 15 }}
          dateNumberStyle={{ color: "white" }}
          dateNameStyle={{ color: "white" }}
          scrollable={true}
          highlightDateNumberStyle={{ color: "yellow" }}
          highlightDateNameStyle={{ color: "yellow" }}
          disabledDateNameStyle={{ color: "grey" }}
          disabledDateNumberStyle={{ color: "grey" }}
          iconContainer={{ flex: 0.1 }}
          onDateSelected={() => {}}
          startingDate={moment().subtract(3, "days")}
          selectedDate={moment()}
          scrollerPaging={true}
          iconLeft={require("../../assets/arrow-left.png")}
          iconRight={require("../../assets/arrow-right.png")}
        />
        <S.HeaderTitle>Consumido no dia</S.HeaderTitle>
        <S.ContainerHighLight>
          <S.TextCounterHighLight>2530</S.TextCounterHighLight>
          <S.HeaderTextHighLight>/kcal</S.HeaderTextHighLight>
        </S.ContainerHighLight>
      </S.Header>
      <S.BodyContainer>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item item={item} />}
        />

        <S.AddButton onPress={handleOneNewItem} >
          <S.AddIcon name="ios-add-circle" />
        </S.AddButton>
      </S.BodyContainer>
    </S.Container>
  );
};

export default Home;
