import React, { useMemo } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { products } from "../../constants/products";

import ProductCard from "./ProductCard";

interface ProductsListProps {
  title: string;
}

export default function ProductsList({ title }: ProductsListProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={products}
        horizontal
        style={styles.productList}
        keyExtractor={(product) => product.id}
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
  },
  productList: {},
});
