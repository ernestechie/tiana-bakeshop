import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import OnboardingBanner from "../components/OnboardingBanner";
import AppButton from "../components/ui/Button";
import Input from "../components/ui/Input";
import { Colors } from "../constants/colors";
import { Screens } from "../constants/screens";
import { GlobalStyles } from "../styles/global.styles";

export default function SignUpPage() {
  const { navigate } = useNavigation<UseNavigationProps>();

  const handleGetStarted = () => {
    navigate(Screens.Explore);
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
        {/* <KeyboardAvoidingView style={styles.formWrapper} behavior="position">
          <Text style={[GlobalStyles.onboardingContentHeading]}>
            Enter your details
          </Text>
          <View style={styles.formContainer}>
            <Input label="First name" fullWidth />
            <Input label="Last name" fullWidth />
            <Input label="Phone number" fullWidth keyboardType="number-pad" />
          </View>
          <AppButton onPress={handleGetStarted}>Start ordering</AppButton>
        </KeyboardAvoidingView> */}
        <View style={styles.formWrapper}>
          <Text style={[GlobalStyles.onboardingContentHeading]}>
            Enter your details
          </Text>
          <View style={styles.formContainer}>
            {/* <Input label="First name" fullWidth /> */}
            {/* <Input label="Last name" fullWidth /> */}
            <Input
              label="Phone number"
              fullWidth
              keyboardType="number-pad"
              placeholder="Enter phone number"
            />
          </View>
          <AppButton onPress={handleGetStarted} fullWidth>
            Start ordering
          </AppButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    backgroundColor: Colors.primary,
    // height: '50%',
  },
  contentBackground: {
    // paddingTop: 50,
  },
  formWrapper: {
    flex: 1,
  },
  formContainer: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "space-around",
    // height: "100%",
    marginBottom: 16,
  },
});
