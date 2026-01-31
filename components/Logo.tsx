import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Logo() {
  return null;

  return (
    <View style={styles.imageContainer}>
      <Image source={require("../assets/logo.png")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});
