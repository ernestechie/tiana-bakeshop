import { StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export const GlobalStyles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  onboardingImageBackground: {
    height: "40%",
    backgroundColor: Colors.primary,
  },
  onboardingContentHeading: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 24,
    color: Colors.tertiary,
    fontFamily: "open-sans-bold",
  },
  onboardingContentSubeading: {
    fontSize: 18,
    color: Colors.secondary,
    fontFamily: "open-sans-regular",
  },
  onboardingContentBackground: {
    backgroundColor: Colors.white,
    padding: 20,
    height: "60%",
  },
});
