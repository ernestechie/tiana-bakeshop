import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

import { useFavoritesStore } from "../../store/favorites-store";
import { ProductItem } from "../../types/products";
import EmptyState from "../EmptyState";
import ProductCard from "./ProductCard";

interface ProductsListProps {
  title?: string;
  emptyStateResourceName?: string;
  products: ProductItem[];
}

export default function ProductsList({
  title,
  products,
  emptyStateResourceName,
}: ProductsListProps) {
  const { favourites, addFavourite, removeFavourite } = useFavoritesStore();

  const handleToggleFavourites = (product: ProductItem) => {
    const isFavourite = favourites.some((fav) => fav.id === product.id);

    if (isFavourite) {
      removeFavourite(product);
    } else {
      addFavourite(product);
    }
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
