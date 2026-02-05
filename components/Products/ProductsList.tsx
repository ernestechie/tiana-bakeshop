import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

import { useFavoritesStore } from "../../store/favorites-store";
import { ProductItem } from "../../types/products";
import EmptyState from "../EmptyState";
import ProductCard from "./ProductCard";

import * as Notifications from "expo-notifications";

interface ProductsListProps {
  title?: string;
  emptyStateResourceName?: string;
  products: ProductItem[];
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function ProductsList({
  title,
  products,
  emptyStateResourceName,
}: ProductsListProps) {
  const { favourites, addFavourite, removeFavourite } = useFavoritesStore();

  const handleToggleFavourites = async (product: ProductItem) => {
    const isFavourite = favourites.some((fav) => fav.id === product.id);

    if (isFavourite) {
      removeFavourite(product);
    } else {
      addFavourite(product);
    }

    // TODO: Schedule a local notification
    await scheduleNotification(product, isFavourite);
  };

  const scheduleNotification = async (
    product: ProductItem,
    isFavourite: boolean,
  ) => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Tiana Bakeshop",
        body: `${product.name} has been ${isFavourite ? "removed from" : "added to"} your favourites.`,
        data: {
          product,
        },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 5,
      },
    });
  };

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={products}
        horizontal={products && products.length > 0}
        style={styles.productList}
        keyExtractor={(product) => product.id}
        ListEmptyComponent={
          <EmptyState resource={emptyStateResourceName || "products"} />
        }
        alwaysBounceHorizontal={false}
        renderItem={({ item: product }) => {
          const isfavourite = favourites.some((fav) => fav.id === product.id);
          return (
            <ProductCard
              product={product}
              isFavourite={isfavourite}
              onToggleFavourites={handleToggleFavourites}
              // containerStyles={{
              //   backgroundColor: Colors.primaryMuted,
              // }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 16,
    fontFamily: "open-sans-bold",
    color: Colors.tertiary,
  },
  container: {
    height: 280,
    marginBottom: 32,
  },
  productList: {
    flex: 1,
  },
});
