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

export type AthleticismScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<DrillStackParamList>,
  BottomTabNavigationProp<TabStackParamList, "Practice">
>;

function AthleticismScreen() {
  const navigation = useNavigation<AthleticismScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <DrillPanel
      navigation={navigation}
      image={require("../assets/img/athleticism.jpg")}
      name="Athleticism Workouts"
      drills={
        <ScrollView style={[styles.col]}>
          <ImageDrill
            nav={navigation}
            route="Plyometrics"
            name="Plyometrics"
            numberLines={2}
            image={require("../assets/img/plyometrics.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Core"
            name="Core Training"
            numberLines={3}
            image={require("../assets/img/core.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Leg"
            name="Leg Training"
            numberLines={3}
            image={require("../assets/img/legs.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Cardio"
            name="Cardio Training"
            numberLines={3}
            image={require("../assets/img/cardio.jpg")}
            height={150}
          />
        </ScrollView>
      }
    />
  );
}

export default AthleticismScreen;
