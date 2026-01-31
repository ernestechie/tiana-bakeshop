import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CartToggle from "../components/Products/ProductDetails/CartToggle";
import AppButton from "../components/ui/Button";
import IconButton from "../components/ui/IconButton";
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
    <View style={[GlobalStyles.screen, styles.screen]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: productData?.imageUrl,
          }}
        />
      </View>
      <ScrollView style={styles.productDetailsContent}>
        <Text style={styles.productName}>{productData?.name}</Text>
        <View style={styles.quantityContainer}>
          <CartToggle quantity={1} />
        </View>
        <Text style={[GlobalStyles.onboardingContentSubeading]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          eveniet velit quam laboriosam corrupti itaque at aspernatur a sequi
          facere?
        </Text>
      </ScrollView>
      <View style={styles.bottomContainer}>
        {/* Favourite Icon */}
        <IconButton
          name="heart-outline"
          color={Colors.primary}
          contained
          buttonContainerStyles={{
            width: 40,
            height: 40,
          }}
          // name={isFavourited ? "heart" : "heart-outline"}
          // color={isFavourited ? Colors.primary : Colors.secondary}
        />
        <AppButton>Add to basket</AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    position: "relative",
  },
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
    padding: 24,
  },
  productName: {
    fontWeight: "bold",
    fontFamily: "open-sans-bold",
    fontSize: 24,
    marginBottom: 20,
  },
  quantityContainer: {
    marginBottom: 32,
    paddingTop: 10,
    paddingBottom: 32,
    borderBottomColor: Colors.input,
    borderBottomWidth: 1,
  },
  bottomContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
