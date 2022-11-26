import React, { useLayoutEffect } from "react";
import {
  ImageBackground,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import Constants from "expo-constants";

// Custom imports
import styles from "../styles";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { TabStackParamList } from "../navigator/types";
import { DrillStackParamList } from "../navigator/types";
import DrillPanel from "../components/DrillPanel";
import ImageDrill from "../components/ImageDrill";

export type FinishingScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<DrillStackParamList>,
  BottomTabNavigationProp<TabStackParamList, "Practice">
>;

function FinishingScreen() {
  const navigation = useNavigation<FinishingScreenNavigationProps>();

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <DrillPanel
      navigation={navigation}
      image={require("../assets/finishing.jpg")}
      name="Finishing Drills"
      drills={
        <ScrollView style={[styles.col]}>
          <ImageDrill
            nav={navigation}
            route="Shooting"
            name="Mikan Drill"
            numberLines={3}
            image={require("../assets/mikan.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Handling"
            name="Layup Drills"
            numberLines={3}
            image={require("../assets/reverse-layup.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Handling"
            name="Floaters"
            numberLines={2}
            image={require("../assets/trae.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Handling"
            name="Post Moves"
            numberLines={3}
            image={require("../assets/post-moves.jpg")}
            height={150}
          />
        </ScrollView>
      }
    />
  );
}

export default FinishingScreen;
