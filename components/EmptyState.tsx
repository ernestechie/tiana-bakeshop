import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";

interface EmptyStateProps {
  message?: string;
  resource?: string;
}

export default function EmptyState({ message, resource }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        {message || `No ${resource || "resources"} available`}
      </Text>
      <Ionicons name="folder-open" size={32} color={Colors.secondary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: 340,
  },
  message: {
    fontSize: 18,
    marginBottom: 12,
    fontFamily: "open-sans",
    color: Colors.secondary,
  },
});
