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
import DrillPanel from "../components/DrillPanel";
import ImageDrill from "../components/ImageDrill";

export type FinishingScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<DrillStackParamList>,
  BottomTabNavigationProp<TabStackParamList, "Practice">
>;

function FinishingScreen() {
  const navigation = useNavigation<FinishingScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <DrillPanel
      navigation={navigation}
      image={require("../assets/img/finishing.jpg")}
      name="Finishing Drills"
      drills={
        <ScrollView style={[styles.col]}>
          <ImageDrill
            nav={navigation}
            route="Mikan"
            name="Mikan Drill"
            numberLines={3}
            image={require("../assets/img/mikan.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Layup"
            name="Layup Drills"
            numberLines={3}
            image={require("../assets/img/layup.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Floater"
            name="Floaters"
            numberLines={2}
            image={require("../assets/img/trae.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Post"
            name="Post Moves"
            numberLines={3}
            image={require("../assets/img/post-moves.jpg")}
            height={150}
          />
        </ScrollView>
      }
    />
  );
}

export default FinishingScreen;
