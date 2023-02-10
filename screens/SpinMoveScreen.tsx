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

export type SpinMoveScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<DrillStackParamList>,
  BottomTabNavigationProp<TabStackParamList, "Practice">
>;

function SpinMoveScreen() {
  const navigation = useNavigation<SpinMoveScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <DrillPanel
      navigation={navigation}
      image={require("../assets/img/spin-move.jpg")}
      name="Spin Moves"
      drills={
        <ScrollView style={[styles.col]}>
          <ImageDrill
            nav={navigation}
            route="ReverseSpin"
            name="Reverse"
            numberLines={2}
            image={require("../assets/img/reverse-spin.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="FakeReverse"
            name="Fake Reverse"
            numberLines={3}
            image={require("../assets/img/fake-reverse.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="PennyHardaway"
            name="Peny Hardaway Move"
            numberLines={4}
            image={require("../assets/img/penny-hardaway.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="KyrieHesi"
            name="Kyrie Hesi"
            numberLines={3}
            image={require("../assets/img/kyrie-hesi-spin.jpg")}
            height={150}
          />
        </ScrollView>
      }
    />
  );
}

export default SpinMoveScreen;
