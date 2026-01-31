import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./ui/Input";

export default function SearchNav() {
  return (
    <View style={styles.container}>
      <View>
        <Input placeholder="Search for products..." />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
});
