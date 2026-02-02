import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Cart from "../components/Cart/Cart";
import { Colors } from "../constants/colors";

export default function ShoppingBasketPage() {
  return (
    <View style={styles.screen}>
      <Cart />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
  },
});
