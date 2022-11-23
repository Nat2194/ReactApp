import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";

// Custom imports
import UserScreen from "../screens/UserScreen";
import PracticeScreen from "../screens/PracticeScreen";
import { useNavigation } from "@react-navigation/native";

export type TabStackParamList = {
  User: undefined;
  Practice: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tapBarActiveTintColor: "#59C1CC",
        tapBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "User") {
            return (
              <Icon
                name="user"
                type="entypo"
                color={focused ? "#59C1CC" : "gray"}
              ></Icon>
            );
          } else if (route.name === "Practice") {
            return (
              <Icon
                name="basketball-sharp"
                type="ionicon"
                color={focused ? "#fa8320" : "gray"}
              ></Icon>
            );
          }
        },
      })}
    >
      <Tab.Screen name="User" component={UserScreen} />
      <Tab.Screen name="Practice" component={PracticeScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
