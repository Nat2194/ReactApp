import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

// Custom imports
import styles from "../styles";

const TestButton = () => {
  return (
    <View style={[styles.testButtons]}>
      <TouchableOpacity style={[styles.testButton]}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestButton;
