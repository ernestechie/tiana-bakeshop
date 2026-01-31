import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { products } from "../constants/products";
import { GlobalStyles } from "../styles/global.styles";
import { RootStackParamList } from "../types/navigation";
import { ProductItem } from "../types/products";

export default function ProductDetailsScreen() {
  const { setOptions } = useNavigation<UseNavigationProps>();
  const { params } = useRoute<RouteProp<RootStackParamList>>();

  const [productData, setProductData] = useState<ProductItem | null>(null);

  // //
  useEffect(() => {
    if (!params?.productId) return;
    const productId = params.productId;

    const foundProduct = products.find((product) => product.id === productId);
    if (!foundProduct || !foundProduct.id) return;

    setProductData(foundProduct);

    setOptions({
      title: foundProduct.name || "Product Details",
    });
  }, [setOptions, params?.productId]);

  return (
    <View style={[GlobalStyles.screen, styles.screen]}>
      <Text>Product Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});
