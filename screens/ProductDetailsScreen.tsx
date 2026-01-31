import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
import { products } from "../constants/products";
import { GlobalStyles } from "../styles/global.styles";
import { RootStackParamList } from "../types/navigation";
import { ProductItem } from "../types/products";

export default function ProductDetailsScreen() {
  const { setOptions } = useNavigation<UseNavigationProps>();
  const { params } = useRoute<RouteProp<RootStackParamList>>();

  const [isFetchingData, setIsFetchingData] = useState(true);
  const [productData, setProductData] = useState<ProductItem | null>(null);

  // //
  useEffect(() => {
    if (!params?.productId) return;
    const productId = params.productId;

    const foundProduct = products.find((product) => product.id === productId);
    if (!foundProduct || !foundProduct.id) return;

    setTimeout(() => {
      setIsFetchingData(false);
      setProductData(foundProduct);
      setOptions({
        title: foundProduct.name || "Product Details",
      });
    }, 3000);
  }, [setOptions, params?.productId]);

  if (isFetchingData) {
    return (
      <ActivityIndicator
        style={{
          flex: 1,
        }}
        color={Colors.white}
      />
    );
  }

  return (
    <View style={[GlobalStyles.screen]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: productData?.imageUrl,
          }}
        />
      </View>
      <View style={styles.productDetailsContent}></View>
      {/* <Text style={styles.productName}>{product.name}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
    padding: 20,
  },
  image: {
    height: 260,
    width: 260,
    borderRadius: "100%",
    objectFit: "cover",
    marginBottom: 10,
  },
  productDetailsContent: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    overflow: "scroll",
  },
});
