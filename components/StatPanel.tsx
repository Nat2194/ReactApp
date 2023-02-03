import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createIconSetFromFontello } from "@expo/vector-icons";
import { useFonts } from "expo-font";

// Custom imports
import styles from "../styles";
import Icons from "./Icons";

type props = {
  name: string;
  iconName: string;
  color: string;
  size: any;
};

const StatPanel = ({ name, color, size, iconName }: props) => {
  return (
    <TouchableOpacity
      style={[
        styles.centerCol,
        { height: size, borderColor: color, margin: 0 },
        styles.border1,
        styles.bgBlack,
        styles.round30,
        styles.ratio1,
        styles.align,
      ]}
    >
      <Icons name={iconName} size={40} color={color} />
      <Text
        style={[
          styles.size14,
          styles.bold,
          { color: color },
          styles.shadow,
          styles.p5,
          styles.alignCenter,
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default StatPanel;
