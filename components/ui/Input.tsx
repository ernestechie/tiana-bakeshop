import React, { useMemo } from "react";
import {
  Control,
  FieldValues,
  useController,
  useFormState,
} from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { Colors } from "../../constants/colors";

interface InputProps<T = FieldValues> extends TextInputProps {
  name: string;
  label?: string;
  error?: string;
  fullWidth?: boolean;
  style?: Record<string, string | number>;
  control?: any;
  // control?: Control<T>
}

export default function Input({
  label,
  multiline,
  style,
  error,
  fullWidth = true,
  name,
  control,
  ...rest
}: InputProps) {
  const { field } = useController({
    control: control,
    name,
    defaultValue: "",
  });

  const { errors } = useFormState({
    control,
    name,
  });

  const fieldError = useMemo(() => {
    if (!errors) return null;

    const err = errors?.[name];

    if (err) return err.message?.toString();
    return error || null;
  }, [errors, name, error, field.value]);

  return (
    <View
      style={[styles.inputContainer, style, fullWidth ? styles.fullWidth : {}]}
    >
      {label && <Text style={styles.labelText}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          multiline && styles.inputMultiLine,
          errors && errors[name] && styles.error,
        ]}
        onChangeText={field.onChange ? field.onChange : undefined}
        value={field.value || ""}
        multiline={multiline}
        {...rest}
      />
      {fieldError && (
        <Text style={[styles.labelText, styles.errorText]}>{fieldError}</Text>
      )}
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
    marginBottom: 6,
    fontFamily: "open-sans-regular",
  },
  errorText: {
    color: Colors.destructive,
    marginTop: 6,
    marginBottom: 0,
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
  error: {
    borderWidth: 1,
    borderColor: Colors.destructive,
  },
});
