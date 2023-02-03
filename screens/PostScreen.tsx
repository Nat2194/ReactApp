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

export type PostScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<DrillStackParamList>,
  BottomTabNavigationProp<TabStackParamList, "Practice">
>;

function PostScreen() {
  const navigation = useNavigation<PostScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <DrillPanel
      navigation={navigation}
      image={require("../assets/post-moves.jpg")}
      name="Post Moves"
      drills={
        <ScrollView style={[styles.col]}>
          <ImageDrill
            nav={navigation}
            route="BackPivot"
            name="Back Pivot"
            numberLines={3}
            image={require("../assets/back-pivot.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="ForwardPivot"
            name="Forward Pivot"
            numberLines={3}
            image={require("../assets/forward-pivot.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="JumpHook"
            name="Jump Hook"
            numberLines={3}
            image={require("../assets/jump-hook.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="SkyHook"
            name="Sky Hook"
            numberLines={3}
            image={require("../assets/skyhook.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="DropStep"
            name="Drop Step"
            numberLines={3}
            image={require("../assets/drop-step.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="StepThrough"
            name="Step Through"
            numberLines={4}
            image={require("../assets/step-through.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Fadeaway"
            name="Fadeaway"
            numberLines={2}
            image={require("../assets/fadeaway.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="DreamShake"
            name="Dream Shake"
            numberLines={3}
            image={require("../assets/dream-shake.jpg")}
            height={150}
          />
        </ScrollView>
      }
    />
  );
}

export default PostScreen;
