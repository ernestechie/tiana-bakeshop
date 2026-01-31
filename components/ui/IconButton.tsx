import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { OpaqueColorValue, Pressable, StyleSheet, View } from "react-native";

interface IconButtonProps {
  size?: number;
  name: any;
  color?: string | OpaqueColorValue;
  buttonContainerStyles?: Record<string, string | number>;
  onPress?: () => void;
}

export default function IconButton({
  size = 24,
  name,
  color,
  buttonContainerStyles,
  onPress,
}: IconButtonProps) {
  if (!name || typeof name !== "string") return null;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={[styles.buttonContainer, buttonContainerStyles]}>
        <Ionicons name={name as any} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 4,
    // marginHorizontal: 8,
    // marginVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
