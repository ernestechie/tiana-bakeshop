import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/colors";

export default function ShoppingBasketPage() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Shopping Basket Page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.white,
  },
});
