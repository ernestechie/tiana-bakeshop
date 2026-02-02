import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

import { ProductItem } from "../../types/products";
import EmptyState from "../EmptyState";
import ProductCard from "./ProductCard";

interface ProductsListProps {
  title?: string;
  products: ProductItem[];
}

export default function ProductsList({ title, products }: ProductsListProps) {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={products}
        horizontal={products && products.length > 0}
        style={styles.productList}
        keyExtractor={(product) => product.id}
        ListEmptyComponent={<EmptyState resource="products" />}
        alwaysBounceHorizontal={false}
        renderItem={({ item: product }) => {
          return (
            <ProductCard
              product={product}
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
