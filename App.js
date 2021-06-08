import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Appearance,
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text>Hello world</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
