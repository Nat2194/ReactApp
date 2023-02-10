import React, { useLayoutEffect } from "react";
import { Text, View, ImageBackground } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import Constants from "expo-constants";

// Custom imports
import styles from "../styles";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { TabStackParamList } from "../navigator/types";
import { UserStackParamList } from "../navigator/types";
import Dashboard from "../components/Dashboard";

export type ProfileScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<UserStackParamList>,
  BottomTabNavigationProp<TabStackParamList, "Profile">
>;

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={[styles.startCol, styles.bgBlack, styles.fillH]}>
      <View style={[styles.centerRow, { height: "40%" }]}>
        <ImageBackground
          source={require("../assets/img/home.jpg")}
          resizeMode="cover"
          style={[styles.image, styles.centerCol]}
        >
          <View style={styles.centerRow}>
            <Text
              style={[
                styles.size32,
                styles.bold,
                styles.txtWhite,
                styles.shadow,
              ]}
            >
              My Profile
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={[styles.centerCol, { height: "60%" }]}>
        <Dashboard />
      </View>
    </View>
  );
};

export default ProfileScreen;
