import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
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
import DrillPage from "../components/DrillPage";
import VideoPlayer from "../components/VideoPlayer";

export type FormShotScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<DrillStackParamList>,
  BottomTabNavigationProp<TabStackParamList, "Practice">
>;

function FormShotScreen() {
  const navigation = useNavigation<FormShotScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <DrillPage
      navigation={navigation}
      image={require("../assets/form.png")}
      name="Form Shots"
      previous="Shooting"
      drill={
        <View>
          <VideoPlayer vidId="w2ifba5_1qI" />
          <Text>
            For this progression, we focus on getting our feet about shoulder
            width apart or slightly narrower. You should be in a strong,
            balanced position. Make sure to check your feet and develop
            consistency on every shot. We prefer to slightly stagger our feet or
            slightly turn them. The anatomy is different for every one. You need
            to find what works for you. Next, make an L with your shooting arm.
            Focus on pushing the ball up and out. Your elbow should finish above
            your eyes. Focus on pushing the ball through your fingers.
            Typically, you should either finish with your index finger pointing
            at the hoop or with your index/middle finger pointing at the hoop.
            Find what works best for you. When you properly shoot "up and out"
            and "push through your fingers", you will get the proper backspin on
            the ball.
          </Text>
        </View>
      }
    />
  );
}

export default FormShotScreen;
