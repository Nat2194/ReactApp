import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";

// Custom imports
import UserNavigator from "./UserNavigator";
import { useNavigation } from "@react-navigation/native";
import { TabStackParamList } from "./types";
import DrillNavigator from "./DrillNavigator";

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
          if (route.name === "Profile") {
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
      <Tab.Screen name="Profile" component={UserNavigator} />
      <Tab.Screen name="Practice" component={DrillNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
