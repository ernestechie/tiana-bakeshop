import React, { useMemo } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { products, recommendedProducts } from "../../constants/products";
import { formatToNaira } from "../../utils/helpers";
import EmptyState from "../EmptyState";
import AppButton from "../ui/Button";
import IconButton from "../ui/IconButton";
import CartItem, { CartItemType } from "./CartItem";

export default function Cart() {
  const cartItems: CartItemType[] = useMemo(() => {
    return [
      {
        id: "1",
        quantity: 2,
        product: products[0],
      },
      {
        id: "2",
        quantity: 2,
        product: recommendedProducts[0],
      },
      {
        id: "3",
        quantity: 2,
        product: products[2],
      },
      {
        id: "4",
        quantity: 3,
        product: recommendedProducts[1],
      },
    ];
  }, []);

  const cummulativeTotal = useMemo(() => {
    return cartItems?.reduce((total, item) => {
      return total + item.quantity * item.product.price;
    }, 0);
  }, [cartItems]);

  return (
    <View
      style={{
        position: "relative",
      }}
    >
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<EmptyState resource="cart items" />}
        renderItem={({ item }) => <CartItem item={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        style={{
          height: "100%",
        }}
      />

      <View style={styles.bottomContainer}>
        {/* Favourite Icon */}
        <View>
          <Text>Total</Text>
          <Text>
            <Text style={styles.itemPrice}>
              {formatToNaira(cummulativeTotal)}
            </Text>
          </Text>
        </View>
        <AppButton>Checkout</AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: Colors.input,
    marginVertical: 16,
  },
  bottomContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemPrice: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
});
