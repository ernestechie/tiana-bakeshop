import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Layout/Navbar";
import ProductsList from "../components/Products/ProductsList";
import SearchNav from "../components/SearchNav";
import { Colors } from "../constants/colors";

export default function ExplorePage() {
  return (
    <SafeAreaView style={styles.screen}>
      <Navbar />
      <SearchNav />
      <ProductsList title="Recommended Combo" />
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
