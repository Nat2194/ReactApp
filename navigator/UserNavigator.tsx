import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Custom imports
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import { useNavigation } from "@react-navigation/native";
import { UserStackParamList } from "./types";

const User = createNativeStackNavigator<UserStackParamList>();

const UserNavigator = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <User.Navigator>
      <User.Screen name="Overview" component={ProfileScreen} />
      <User.Screen name="Login" component={LoginScreen} />
    </User.Navigator>
  );
};

export default UserNavigator;
