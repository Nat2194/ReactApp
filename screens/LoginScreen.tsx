import React, { useLayoutEffect, useState } from "react";
import { Text, View, ImageBackground, TextInput, Alert } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";

// Custom imports
import styles from "../styles";
import { TabStackParamList } from "../navigator/types";
import { UserStackParamList } from "../navigator/types";
import SubmitButton from "../components/SubmitButton";

export type LoginScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<UserStackParamList>,
  BottomTabNavigationProp<TabStackParamList, "Profile">
>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [text, setText] = useState("");

  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

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
        <TextInput
          style={[
            {
              height: 40,
            },
            styles.border1,
            styles.borderDarkOrange,
            styles.pLeft20,
            styles.round30,
            styles.mHori30,
          ]}
          placeholderTextColor="white"
          placeholder="Enter your e-mail"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <TextInput
          style={[
            {
              height: 40,
            },
            styles.border1,
            styles.borderDarkOrange,
            styles.m30,
            styles.pLeft20,
            styles.round30,
          ]}
          placeholderTextColor="white"
          placeholder="Enter a password"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <SubmitButton onPress={createTwoButtonAlert()} />
      </View>
    </View>
  );
};

export default LoginScreen;
