import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Custom imports
import ShootingScreen from "../screens/ShootingScreen";
import FinishingScreen from "../screens/FinishingScreen";
import HandlingScreen from "../screens/HandlingScreen";
import AthleticismScreen from "../screens/AthleticismScreen";
import { useNavigation } from "@react-navigation/native";
import { createNavigator } from "react-navigation";
import { DrillStackParamList } from "./types";
import PracticeScreen from "../screens/PracticeScreen";

const Drill = createNativeStackNavigator<DrillStackParamList>();

const DrillNavigator = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Drill.Navigator>
      <Drill.Screen name="Overview" component={PracticeScreen} />
      <Drill.Screen name="Shooting" component={ShootingScreen} />
      <Drill.Screen name="Finishing" component={FinishingScreen} />
      <Drill.Screen name="Handling" component={HandlingScreen} />
      <Drill.Screen name="Athleticism" component={AthleticismScreen} />
    </Drill.Navigator>
  );
};

export default DrillNavigator;
