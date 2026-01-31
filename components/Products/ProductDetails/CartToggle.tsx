import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../constants/colors";
import IconButton from "../../ui/IconButton";

interface CartToggleProps {
  onIncrement?: () => void;
  onDecrement?: () => void;
  quantity: number;
}

export default function CartToggle({
  onIncrement,
  onDecrement,
  quantity,
}: CartToggleProps) {
  const [maxQuantity, setMaxQuantity] = useState(10);

  const buttonContainerStyles = useMemo(() => {
    return {
      width: 40,
      height: 40,
    };
  }, []);

  const incrementDisabled = useMemo(() => {
    return quantity >= maxQuantity;
  }, [quantity, maxQuantity]);

  const decrementDisabled = useMemo(() => {
    return quantity <= 1;
  }, [quantity]);

  return (
    <View style={styles.container}>
      <IconButton
        name="remove"
        contained
        buttonContainerStyles={{
          ...buttonContainerStyles,
          backgroundColor: decrementDisabled
            ? Colors.input
            : Colors.primaryMuted,
        }}
        disabled={decrementDisabled}
        color={decrementDisabled ? Colors.secondary : Colors.primary}
      />
      <Text style={styles.quantity}>{quantity}</Text>
      <IconButton
        name="add"
        contained
        buttonContainerStyles={{
          ...buttonContainerStyles,
          backgroundColor: incrementDisabled
            ? Colors.input
            : Colors.primaryMuted,
        }}
        disabled={incrementDisabled}
        color={incrementDisabled ? Colors.secondary : Colors.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    width: 160,
  },
  quantity: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.secondary,
  },
});
