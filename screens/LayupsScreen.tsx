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

export type LayupsScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<DrillStackParamList>,
  BottomTabNavigationProp<TabStackParamList, "Practice">
>;

function LayupsScreen() {
  const navigation = useNavigation<LayupsScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <DrillPanel
      navigation={navigation}
      image={require("../assets/img/layup.jpg")}
      name="Layup Drills"
      drills={
        <ScrollView style={[styles.col]}>
          <ImageDrill
            nav={navigation}
            route="UnderhandLayup"
            name="Underhand Layup"
            numberLines={3}
            image={require("../assets/img/underhand-layup.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Eurostep"
            name="Eurostep"
            numberLines={2}
            image={require("../assets/img/eurostep.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="ReverseLayup"
            name="Reverse Layup"
            numberLines={3}
            image={require("../assets/img/reverse-layup.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="UpAndUnder"
            name="Up And Under"
            numberLines={4}
            image={require("../assets/img/up-and-under.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="SpinLayup"
            name="Spin Layup"
            numberLines={3}
            image={require("../assets/img/spin-layup.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="ShakeAndBake"
            name="Shake N Bake"
            numberLines={4}
            image={require("../assets/img/shake-n-bake.jpg")}
            height={150}
          />
        </ScrollView>
      }
    />
  );
}

export default LayupsScreen;
