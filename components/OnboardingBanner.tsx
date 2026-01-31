import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../styles/global.styles";
import Logo from "./Logo";

export default function OnboardingBanner() {
  return (
    <View style={[GlobalStyles.onboardingImageBackground]}>
      <Logo />
    </View>
  );
}

const styles = StyleSheet.create({});
