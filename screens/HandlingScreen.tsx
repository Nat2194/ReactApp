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

export type HandlingScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<DrillStackParamList>,
  BottomTabNavigationProp<TabStackParamList, "Practice">
>;

function HandlingScreen() {
  const navigation = useNavigation<HandlingScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <DrillPanel
      navigation={navigation}
      image={require("../assets/handling.jpg")}
      name="Ball Handling Drills"
      drills={
        <ScrollView style={[styles.col]}>
          <ImageDrill
            nav={navigation}
            route="Athleticism"
            name="Ball Control Drills"
            numberLines={4}
            image={require("../assets/ball-control.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Athleticism"
            name="Crossovers"
            numberLines={2}
            image={require("../assets/crossover.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Athleticism"
            name="Between the Legs"
            numberLines={4}
            image={require("../assets/btl.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Athleticism"
            name="Behind the Back"
            numberLines={4}
            image={require("../assets/btb.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Athleticism"
            name="In & Out"
            numberLines={4}
            image={require("../assets/in-n-out.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Athleticism"
            name="Spin Moves"
            numberLines={3}
            image={require("../assets/spin-move.jpg")}
            height={150}
          />
        </ScrollView>
      }
    />
  );
}

export default HandlingScreen;
