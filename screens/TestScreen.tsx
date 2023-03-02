// kind of a sandbox to test new features

import React, { useLayoutEffect, useState } from "react";
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
import Spawner from "../components/Spawner";

export type BoardScreenNavigationProps = BottomTabNavigationProp<
  TabStackParamList,
  "Board"
>;

const { width, height } = Dimensions.get("screen");

function TestScreen() {
  const navigation = useNavigation<BoardScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const x = width / 10;
  const y = height / 3;

  const [componentsList, setList] = useState<JSX.Element[]>([]);

  return (
    <View style={[styles.centerCol, { height: "100%" }, styles.p30]}>
      <Spawner x={x} y={y} componentsList={componentsList} setList={setList} />
      <View>{componentsList}</View>
    </View>
  );
}

export default TestScreen;
