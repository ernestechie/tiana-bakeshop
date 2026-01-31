import React from "react";
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { Colors } from "../../constants/colors";

interface InputProps extends TextInputProps {
  label?: string;
  fullWidth?: boolean;
  style?: Record<string, string | number>;
}

export default function Input({
  label,
  multiline,
  style,
  fullWidth,
  ...rest
}: InputProps) {
  return (
    <View
      style={[styles.inputContainer, style, fullWidth ? styles.fullWidth : {}]}
    >
      {label && <Text style={styles.labelText}>{label}</Text>}
      <TextInput
        style={[styles.input, multiline && styles.inputMultiLine]}
        multiline={multiline}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  fullWidth: {
    width: "100%",
  },
  labelText: {
    fontSize: 12,
    color: Colors.tertiary,
    marginBottom: 4,
    fontFamily: "open-sans-regular",
  },
  input: {
    backgroundColor: Colors.input,
    color: Colors.secondary,
    padding: 14,
    borderRadius: 8,
    fontSize: 16,
  },
  inputMultiLine: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
