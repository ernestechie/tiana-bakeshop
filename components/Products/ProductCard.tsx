import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { Screens } from "../../constants/screens";
import { ProductItem } from "../../types/products";
import IconButton from "../ui/IconButton";

interface ProductCardProps {
  product: ProductItem;
  containerStyles?: object;
}

export default function ProductCard({
  product,
  containerStyles,
}: ProductCardProps) {
  const { navigate } = useNavigation<UseNavigationProps>();

  const isFavourited = +product.id % 2 === 0;

  const navigateToProductDetails = () => {
    navigate(Screens.ProductDetails, { productId: product.id });
  };

  return (
    <View style={[styles.productCard, containerStyles]}>
      {/* Favourite Icon */}
      <View style={styles.favouriteButton}>
        <IconButton
          name={isFavourited ? "heart" : "heart-outline"}
          color={isFavourited ? Colors.primary : Colors.secondary}
        />
      </View>

      {/* Image container */}
      <View style={styles.imageContainer}>
        <Pressable onPress={navigateToProductDetails}>
          <Image
            style={styles.image}
            source={{
              uri: product.imageUrl,
            }}
          />
        </Pressable>
        <Text style={styles.productName}>{product.name}</Text>
      </View>
      <View style={styles.productDetails}>
        <View style={styles.productPriceContainer}>
          <Text style={styles.productPrice}>
            N{product.price.toLocaleString()}
          </Text>
          <IconButton name={"add"} size={20} color={Colors.primary} contained />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: Colors.white,
    elevation: 2,
    shadowColor: Colors.lightGrey,
    shadowRadius: 8,
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "flex-end",
    width: 180,
    height: 220,
    marginRight: 14,
    position: "relative",
    borderColor: Colors.input,
    borderWidth: 1,
  },
  imageContainer: {
    marginBottom: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    objectFit: "cover",
    marginBottom: 10,
  },
  productDetails: {
    width: "100%",
  },
  productName: {
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "open-sans-bold",
    fontSize: 15,
  },
  productPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productPrice: {
    fontWeight: "bold",
    color: Colors.primary,
    fontSize: 15,
    fontFamily: "open-sans-bold",
  },
  favouriteButton: {
    position: "absolute",
    top: 5,
    right: 10,
  },
});
