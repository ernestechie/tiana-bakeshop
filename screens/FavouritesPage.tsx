import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Layout/Navbar";
import ProductsList from "../components/Products/ProductsList";
import { Colors } from "../constants/colors";
import { useFavoritesStore } from "../store/favorites-store";

export default function FavouritesPage() {
  const { favourites } = useFavoritesStore();

  return (
    <SafeAreaView style={styles.screen}>
      <Navbar />
      <ProductsList
        products={favourites}
        title="Favourite Products"
        emptyStateResourceName="favourites"
      />
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
