import React from "react";
import { StyleSheet, View } from "react-native";

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
