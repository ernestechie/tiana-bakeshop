import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import OnboardingBanner from "../components/OnboardingBanner";
import AppButton from "../components/ui/Button";
import { Colors } from "../constants/colors";
import { Screens } from "../constants/screens";
import { GlobalStyles } from "../styles/global.styles";

export default function OnboardingPage() {
  const { navigate } = useNavigation<UseNavigationProps>();

  const handleGetStarted = () => {
    navigate(Screens.SignUp);
  };

  return (
    <View style={GlobalStyles.screen}>
      <OnboardingBanner />
      <View
        style={[
          GlobalStyles.onboardingContentBackground,
          styles.contentBackground,
        ]}
      >
        <View
          style={{
            marginBottom: 40,
          }}
        >
          <Text style={[GlobalStyles.onboardingContentHeading]}>
            Get the freshest pastries combo
          </Text>
          <Text style={[GlobalStyles.onboardingContentSubeading]}>
            We make and deliver world best, and the freshest pastries (Wedding
            cakes, brownies, cupcakes, small chops, etc.)
          </Text>
        </View>
        <AppButton onPress={handleGetStarted}>Get started</AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    backgroundColor: Colors.primary,
    height: "50%",
  },
  contentBackground: {
    paddingTop: 50,
  },
});
