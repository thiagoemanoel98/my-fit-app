import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DataProvider } from "./src/hooks/data";
import Routes from "./src/routes";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <View style={styles.container}>
          <StatusBar style="inverted" />
          <Routes />
        </View>
      </DataProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
