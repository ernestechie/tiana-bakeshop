import React, { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

interface AppButtonProps extends PropsWithChildren {
  mode?: "flat";
  disabled?: boolean;
  outlined?: boolean;
  fullWidth?: boolean;
  style?: Record<string, string | number>;
  onPress?: () => void;
}

export default function AppButton({
  onPress,
  mode,
  children,
  style,
  disabled,
  outlined,
  fullWidth,
}: AppButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        pressed && styles.pressed,
        fullWidth && styles.fullWidth,
      ]}
      disabled={disabled}
    >
      <View
        style={[
          styles.button,
          mode === "flat" ? styles.flatButton : {},
          outlined && styles.buttonOutlined,
          ,
          style,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            mode === "flat" ? styles.flatText : {},
            outlined && styles.buttonOutlinedText,
          ]}
        >
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 16,
    paddingHorizontal: 24,
    backgroundColor: Colors.primary,
  },
  buttonOutlined: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  buttonOutlinedText: {
    color: Colors.primary,
  },
  fullWidth: {
    width: "100%",
  },
  flatButton: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: Colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
  flatText: {
    color: Colors.primary,
    fontFamily: "open-sans-regular",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Colors.primary2,
    borderRadius: 8,
  },
});
