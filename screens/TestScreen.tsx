// kind of a sandbox to test new features

import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import Constants from "expo-constants";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";

// Custom imports
import { TabStackParamList } from "../navigator/types";
import TestButton from "../components/TestButton";
import Draggable from "../components/Draggable";
import styles from "../styles";

export type BoardScreenNavigationProps = BottomTabNavigationProp<
  TabStackParamList,
  "Board"
>;

const { width, height } = Dimensions.get("window");

function TestScreen() {
  const navigation = useNavigation<BoardScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const x = width / 10;
  const y = height / 2;

  return (
    <View style={styles.container}>
      <Draggable size={30} x={x} y={y} color={"#f26636"} />
    </View>
  );
}

export default TestScreen;
