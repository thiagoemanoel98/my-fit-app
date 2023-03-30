import React from "react";
import { FlatList } from "react-native";
import moment from "moment";
import CalendarStripProps from "react-native-calendar-strip";
import { useNavigation } from "@react-navigation/native";

import Item from "../../components/Item";
import * as S from "./styles";
import { useData } from "../../hooks/data";

interface ScreenNavigationProp {
  navigate: (screen: string, params?: unknown) => void;
}

const Home: React.FC = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const { handleChangeDate, currentList, currentKcal } = useData();

  const handleOneNewItem = (): void => {
    navigate("NewItem");
  };

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
          onDateSelected={handleChangeDate}
          startingDate={moment().subtract(3, "days")}
          selectedDate={moment()}
          scrollerPaging={true}
          iconLeft={require("../../assets/arrow-left.png")}
          iconRight={require("../../assets/arrow-right.png")}
        />
        <S.HeaderTitle>Consumido no dia</S.HeaderTitle>
        <S.ContainerHighLight>
          <S.TextCounterHighLight>{currentKcal}</S.TextCounterHighLight>
          <S.HeaderTextHighLight>/kcal</S.HeaderTextHighLight>
        </S.ContainerHighLight>
      </S.Header>
      <S.BodyContainer>
        <FlatList
          data={currentList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item item={item} />}
        />

        <S.AddButton onPress={handleOneNewItem}>
          <S.AddIcon name="ios-add-circle" />
        </S.AddButton>
      </S.BodyContainer>
    </S.Container>
  );
};

export default Home;
