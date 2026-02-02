import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/ui/Button";
import { Colors } from "../constants/colors";
import { Screens } from "../constants/screens";

export default function OrderSuccessPage() {
  const { navigate } = useNavigation<UseNavigationProps>();

  // TODO: Fetch order details, validate order ID via params, display success message
  useEffect(() => {}, []);

  const handleTrackOrder = () => {
    // Navigate to order tracking screen, if applicable, with order id
  };

  const handleContinueShopping = () => {
    navigate(Screens.Explore);
  };

  return (
    <View style={styles.screen}>
      <Image
        source={require("../assets/images/success.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Congratulations!</Text>
      <Text style={styles.subtitle}>
        Your order has been placed, and is being attended to
      </Text>
      <View style={styles.buttonContainer}>
        <AppButton onPress={handleTrackOrder}>Track order</AppButton>
        <AppButton outlined onPress={handleContinueShopping}>
          Continue shopping
        </AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: Colors.white,
  },
  image: {
    width: 160,
    height: 160,
  },
  buttonContainer: {
    gap: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    color: Colors.tertiary,
    fontFamily: "open-sans-bold",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "open-sans-regular",
    color: Colors.secondary,
  },
});
