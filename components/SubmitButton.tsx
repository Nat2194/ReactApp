import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

// Custom imports
import styles from "../styles";

type props = {
  onPress: any;
};

const SubmitButton = ({ onPress }: props) => {
  return (
    <View style={[styles.fillW, styles.centerRow]}>
      <TouchableOpacity
        style={[
          styles.bgOrange,
          styles.round25,
          styles.p15,
          styles.align,
          styles.centerCol,
        ]}
        onPress={onPress}
      >
        <Text style={[styles.txtWhite, styles.size18]}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubmitButton;
