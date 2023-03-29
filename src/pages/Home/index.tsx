import moment from "moment";
import React from "react";
import { View, Text } from "react-native";
import CalendarStripProps from "react-native-calendar-strip";

import * as S from './styles';

const Home: React.FC = () => {
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
      </S.Header>
        <S.BodyContainer>

        </S.BodyContainer>
    </S.Container>
  );
};

export default Home;
