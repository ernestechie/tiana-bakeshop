import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
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
      <KeyboardAvoidingView
        style={[GlobalStyles.onboardingContentBackground]}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
      >
        <ScrollView
          style={{
            flex: 1,
          }}
        >
          <Text style={[GlobalStyles.onboardingContentHeading]}>
            Enter your details
          </Text>
          <View style={styles.formContainer}>
            <Input
              label="First name"
              fullWidth
              placeholder="Enter first name"
            />
            <Input label="Last name" fullWidth placeholder="Enter last name" />
            <Input
              label="Phone number"
              fullWidth
              keyboardType="email-address"
              placeholder="Enter email"
            />
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
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    backgroundColor: Colors.primary,
    // height: '50%',
  },
  formWrapper: {
    flex: 1,
  },
  formContainer: {
    marginBottom: 16,
  },
});
