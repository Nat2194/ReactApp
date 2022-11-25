import React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Custom imports
import TabNavigator from "./TabNavigator";
import DrillNavigator from "./DrillNavigator";
import { RootStackParamList } from "./types";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
        <RootStack.Screen name="Drill" component={DrillNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
