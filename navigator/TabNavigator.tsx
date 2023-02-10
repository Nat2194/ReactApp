import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import { View } from "react-native";

// Custom imports
import UserNavigator from "./UserNavigator";
import { useNavigation } from "@react-navigation/native";
import { TabStackParamList } from "./types";
import DrillNavigator from "./DrillNavigator";
import BoardScreen from "../screens/BoardScreen";
import styles from "../styles";
import Icons from "../components/Icons";
import TestScreen from "../screens/TestScreen";

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
        keyboardHidesTabBar: true,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#000000",
          borderColor: "grey",
          padding: 5,
        },
        tapBarActiveTintColor: "#59C1CC",
        tapBarInactiveTintColor: "grey",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Profile") {
            return (
              <View
                style={[
                  { backgroundColor: focused ? "#59C1CC" : "gray" },
                  styles.ratio1,
                  styles.round30,
                  styles.fillH,
                  styles.align,
                  styles.centerCol,
                ]}
              >
                <Icon
                  name="user"
                  type="entypo"
                  color={focused ? "white" : "black"}
                ></Icon>
              </View>
            );
          } else if (route.name === "Practice") {
            return (
              <View
                style={[
                  { backgroundColor: focused ? "#fa8320" : "gray" },
                  styles.ratio1,
                  styles.round30,
                  styles.fillH,
                  styles.align,
                  styles.centerCol,
                ]}
              >
                <Icon
                  name="basketball-sharp"
                  type="ionicon"
                  color={focused ? "white" : "black"}
                ></Icon>
              </View>
            );
          } else if (route.name === "Stats") {
            return (
              <View
                style={[
                  { backgroundColor: focused ? "#e11d48" : "gray" },
                  styles.ratio1,
                  styles.round30,
                  styles.fillH,
                  styles.align,
                  styles.centerCol,
                ]}
              >
                <Icon
                  name="bar-graph"
                  type="entypo"
                  color={focused ? "white" : "black"}
                ></Icon>
              </View>
            );
          } else if (route.name === "Board") {
            return (
              <View
                style={[
                  { backgroundColor: focused ? "#10b981" : "gray" },
                  styles.ratio1,
                  styles.round30,
                  styles.fillH,
                  styles.align,
                  styles.centerCol,
                  styles.pTop5,
                ]}
              >
                <Icons
                  name={"board"}
                  size={40}
                  color={focused ? "white" : "black"}
                />
              </View>
            );
          }
        },
      })}
    >
      <Tab.Screen name="Stats" component={UserNavigator} />
      <Tab.Screen name="Profile" component={UserNavigator} />
      <Tab.Screen name="Practice" component={DrillNavigator} />
      <Tab.Screen name="Board" component={TestScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
