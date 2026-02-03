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

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, SubmitHandler, useForm } from "react-hook-form";
import OnboardingBanner from "../components/OnboardingBanner";
import AppButton from "../components/ui/Button";
import Input from "../components/ui/Input";
import { Colors } from "../constants/colors";
import { Screens } from "../constants/screens";
import { authFormSchema, AuthFormSchemaType } from "../schemas/auth";
import { GlobalStyles } from "../styles/global.styles";

export default function SignUpPage() {
  const { navigate } = useNavigation<UseNavigationProps>();

  const form = useForm<AuthFormSchemaType>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    resolver: zodResolver(authFormSchema),
    reValidateMode: "onChange",
  });

  const { handleSubmit, register, control } = form;

  const onSubmit = (data: AuthFormSchemaType) => {
    console.log(data);
    navigate(Screens.Explore);
  };

  return (
    <View style={GlobalStyles.screen}>
      <OnboardingBanner />
      <KeyboardAvoidingView
        style={[GlobalStyles.onboardingContentBackground]}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={20}
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
              placeholder="Enter first name"
              control={control}
              {...register("firstName")}
            />
            <Input
              label="Last name"
              placeholder="Enter last name"
              control={control}
              {...register("lastName")}
            />
            <Input
              label="Phone number"
              keyboardType="number-pad"
              placeholder="Enter phone number"
              control={control}
              {...register("phoneNumber")}
            />
            <Input
              label="Email address"
              keyboardType="email-address"
              placeholder="Enter email"
              control={control}
              autoCapitalize="none"
              {...register("email")}
            />
          </View>
          <AppButton onPress={handleSubmit(onSubmit)} fullWidth>
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
