import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { Screens } from "../../constants/screens";
import IconButton from "../ui/IconButton";

export default function Navbar() {
  const { navigate } = useNavigation<UseNavigationProps>();

  const handleNavigate = () => {
    navigate(Screens.Basket);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>
        Hello, <Text style={styles.username}>Tiana</Text>
      </Text>
      <View style={styles.shoppingCartIconContainer}>
        <View>
          <Text style={styles.shoppingCartQuantity}>{2}</Text>
        </View>
        <IconButton
          name="cart"
          color={Colors.primary}
          size={30}
          onPress={handleNavigate}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greetingText: {
    fontSize: 18,
    fontFamily: "open-sans",
    color: Colors.tertiary,
  },
  username: {
    fontFamily: "open-sans-bold",
  },
  shoppingCartIconContainer: {
    position: "relative",
  },
  shoppingCartQuantity: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: Colors.accent,
    color: Colors.white,
    fontFamily: "open-sans-bold",
    fontSize: 12,
    width: 18,
    height: 18,
    borderRadius: 9,
    textAlign: "center",
    textAlignVertical: "center",
    zIndex: 1,
  },
  shoppingCartQuantityText: {
    color: Colors.white,
    fontFamily: "open-sans-bold",
  },
});
