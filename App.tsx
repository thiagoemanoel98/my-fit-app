import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DataProvider } from "./src/hooks/data";
import Routes from "./src/routes";

export default function App() {
  return (
    <DataProvider>
      <View style={styles.container}>
        <StatusBar style="inverted" />
        <Routes />
      </View>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
