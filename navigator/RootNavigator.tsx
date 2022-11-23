import React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Custom imports
import TabNavigator from "./TabNavigator";

const RootStack = createNativeStackNavigator();

export type RootStackParamList = {
  Main: undefined;
  MyModal: { userId: string; name: string };
  Stats: { stats: any }; //TODO: compléter
};

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
