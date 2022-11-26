import React, { useLayoutEffect } from "react";
import { ScrollView } from "react-native";
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
import ImageDrill from "../components/ImageDrill";
import DrillPanel from "../components/DrillPanel";

export type ShootingScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<DrillStackParamList>,
  BottomTabNavigationProp<TabStackParamList, "Practice">
>;

function ShootingScreen() {
  const navigation = useNavigation<ShootingScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <DrillPanel
      navigation={navigation}
      image={require("../assets/shooting.jpg")}
      name="Shooting Drills"
      drills={
        <ScrollView style={[styles.col]}>
          <ImageDrill
            nav={navigation}
            route="FormShot"
            name="Form Shots"
            numberLines={3}
            image={require("../assets/form.png")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Finishing"
            name="Free Throws"
            numberLines={3}
            image={require("../assets/free-throw.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Finishing"
            name="Midrange"
            numberLines={2}
            image={require("../assets/midrange.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Finishing"
            name="Ray Allen Drill"
            numberLines={4}
            image={require("../assets/ray-allen.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Finishing"
            name="3 Point Shooting"
            numberLines={4}
            image={require("../assets/curry.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Finishing"
            name="Fadeaway"
            numberLines={2}
            image={require("../assets/fadeaway.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Finishing"
            name="Stepback"
            numberLines={2}
            image={require("../assets/stepback.jpg")}
            height={150}
          />
        </ScrollView>
      }
    />
  );
}

export default ShootingScreen;
