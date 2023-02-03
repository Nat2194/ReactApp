import React, { useLayoutEffect } from "react";
import { Dimensions, ScrollView } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

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

export type CrossoversScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<DrillStackParamList>,
  BottomTabNavigationProp<TabStackParamList, "Practice">
>;

function CrossoversScreen() {
  const navigation = useNavigation<CrossoversScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <DrillPanel
      navigation={navigation}
      image={require("../assets/crossover.jpg")}
      name="Crossover Drills"
      drills={
        <ScrollView style={[styles.col]}>
          <ImageDrill
            nav={navigation}
            route="BasicCrossover"
            name="Crossover"
            numberLines={3}
            image={require("../assets/basic-cross.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="KillerCrossover"
            name="Killer Crossover"
            numberLines={3}
            image={require("../assets/killer-cross.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="DoubleCrossover"
            name="Double Crossover"
            numberLines={3}
            image={require("../assets/double-cross.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Snatch"
            name="Snatch"
            numberLines={2}
            image={require("../assets/snatch.jpg")}
            height={150}
          />
        </ScrollView>
      }
    />
  );
}

export default CrossoversScreen;
