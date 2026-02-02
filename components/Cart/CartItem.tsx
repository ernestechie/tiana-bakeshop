import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { ProductItem } from "../../types/products";
import { formatToNaira } from "../../utils/helpers";

export type CartItemType = {
  product: ProductItem;
  quantity: number;
  id: string;
};

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.product.imageUrl,
          }}
        />
        <View>
          <Text style={styles.itemProductName}>{item.product.name}</Text>
          <Text style={styles.itemQuantity}>x {item.quantity}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.itemPrice}>
          {formatToNaira(item.quantity * item.product.price)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    objectFit: "cover",
    marginBottom: 10,
  },
  itemProductName: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginBottom: 4,
  },
  itemQuantity: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: Colors.tertiary,
    marginBottom: 8,
  },
  itemPrice: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});
