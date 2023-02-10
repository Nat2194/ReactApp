// kind of a sandbox to test new features

import React, { useLayoutEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import Constants from "expo-constants";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import Animated from "react-native-reanimated";
//import { PanGestureHandler, State } from "react-native-gesture-handler";

// Custom imports
import styles from "../styles";
import { TabStackParamList } from "../navigator/types";
import TestButton from "../components/TestButton";

export type BoardScreenNavigationProps = BottomTabNavigationProp<
  TabStackParamList,
  "Board"
>;

const { width, height } = Dimensions.get("window");

function BoardScreen() {
  const navigation = useNavigation<BoardScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View
      style={[
        styles.bgApp,
        styles.fillH,
        { paddingTop: Constants.statusBarHeight },
      ]}
    >
      <View style={[styles.startCol, styles.bgWood, styles.fillH]}>
        <View style={[styles.centerCol, styles.bgOrange, { height: "25%" }]}>
          <Text>Ici y aura des trucs</Text>
          <TestButton />
        </View>
        <View style={[{ height: "70%" }]}>
          <ImageBackground
            source={require("../assets/img/full-court.jpg")}
            resizeMode="contain"
            style={[styles.image, { height: "100%" }]}
          ></ImageBackground>
        </View>
      </View>
    </View>
  );
}

export default BoardScreen;
