import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

// Custom imports

import { DrillStackParamList } from "./types";

import PracticeScreen from "../screens/PracticeScreen";

import ShootingScreen from "../screens/ShootingScreen";

import FormShotScreen from "../screens/DrillScreen";

import FinishingScreen from "../screens/FinishingScreen";
import LayupsScreen from "../screens/LayupsScreen";
import PostScreen from "../screens/PostScreen";

import HandlingScreen from "../screens/HandlingScreen";
import CrossoversScreen from "../screens/CrossoversScreen";
import SpinMoveScreen from "../screens/SpinMoveScreen";

import AthleticismScreen from "../screens/AthleticismScreen";
import DrillScreen from "../screens/DrillScreen";

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
      <Drill.Screen name="FormShot" component={DrillScreen} />
      <Drill.Screen name="FreeThrow" component={DrillScreen} />
      <Drill.Screen name="Midrange" component={DrillScreen} />
      <Drill.Screen name="ThreePoint" component={DrillScreen} />
      <Drill.Screen name="RayAllen" component={DrillScreen} />
      <Drill.Screen name="Fadeaway" component={DrillScreen} />
      <Drill.Screen name="Stepback" component={DrillScreen} />

      <Drill.Screen name="Finishing" component={FinishingScreen} />
      <Drill.Screen name="Mikan" component={DrillScreen} />
      <Drill.Screen name="Floater" component={DrillScreen} />
      <Drill.Screen name="Layup" component={LayupsScreen} />
      <Drill.Screen name="UnderhandLayup" component={DrillScreen} />
      <Drill.Screen name="Eurostep" component={DrillScreen} />
      <Drill.Screen name="UpAndUnder" component={DrillScreen} />
      <Drill.Screen name="ReverseLayup" component={DrillScreen} />
      <Drill.Screen name="SpinLayup" component={DrillScreen} />
      <Drill.Screen name="ShakeAndBake" component={DrillScreen} />
      <Drill.Screen name="Post" component={PostScreen} />
      <Drill.Screen name="BackPivot" component={DrillScreen} />
      <Drill.Screen name="ForwardPivot" component={DrillScreen} />
      <Drill.Screen name="JumpHook" component={DrillScreen} />
      <Drill.Screen name="SkyHook" component={DrillScreen} />
      <Drill.Screen name="DropStep" component={DrillScreen} />
      <Drill.Screen name="StepThrough" component={DrillScreen} />
      <Drill.Screen name="DreamShake" component={DrillScreen} />

      <Drill.Screen name="Handling" component={HandlingScreen} />
      <Drill.Screen name="Crossover" component={CrossoversScreen} />
      <Drill.Screen name="BasicCrossover" component={DrillScreen} />
      <Drill.Screen name="KillerCrossover" component={DrillScreen} />
      <Drill.Screen name="DoubleCrossover" component={DrillScreen} />
      <Drill.Screen name="Snatch" component={DrillScreen} />
      <Drill.Screen name="SpinMoves" component={SpinMoveScreen} />
      <Drill.Screen name="ReverseSpin" component={DrillScreen} />
      <Drill.Screen name="FakeReverse" component={DrillScreen} />
      <Drill.Screen name="PennyHardaway" component={DrillScreen} />
      <Drill.Screen name="KyrieHesi" component={DrillScreen} />
      <Drill.Screen name="BallControl" component={DrillScreen} />
      <Drill.Screen name="BTL" component={DrillScreen} />
      <Drill.Screen name="BTB" component={DrillScreen} />
      <Drill.Screen name="InNOut" component={DrillScreen} />
      <Drill.Screen name="Hesitation" component={DrillScreen} />
      <Drill.Screen name="Shammgod" component={DrillScreen} />

      <Drill.Screen name="Athleticism" component={AthleticismScreen} />
      <Drill.Screen name="Plyometrics" component={DrillScreen} />
      <Drill.Screen name="Leg" component={DrillScreen} />
      <Drill.Screen name="Core" component={DrillScreen} />
      <Drill.Screen name="Cardio" component={DrillScreen} />
    </Drill.Navigator>
  );
};

export default DrillNavigator;
