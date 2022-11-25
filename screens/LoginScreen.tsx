import React, { useLayoutEffect, useState } from "react";
import { Text, View, ImageBackground, TextInput } from "react-native";

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

  return (
    <View style={styles.centerCol}>
      <View style={styles.centerRow}>
        <ImageBackground
          source={require("../assets/home.jpg")}
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
      <TextInput
        style={[
          {
            height: 40,
          },
          styles.border1,
          styles.borderGrey,
          styles.m30,
        ]}
        placeholder="Enter your name"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <TextInput
        style={[
          {
            height: 40,
          },
          styles.border1,
          styles.borderGrey,
          styles.m30,
        ]}
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
          styles.borderGrey,
          styles.m30,
        ]}
        placeholder="Enter a password"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
};

export default LoginScreen;
