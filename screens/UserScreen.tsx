import React, { useLayoutEffect } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

// Custom imports
import styles from "../styles";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { TabStackParamList } from "../navigator/TabNavigator";
import { RootStackParamList } from "../navigator/RootNavigator";

export type UserScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "User">,
  NativeStackNavigationProp<RootStackParamList>
>;

const UserScreen = () => {
  const navigation = useNavigation<UserScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.centerRow}>
        <Text style={styles.message}>Salut</Text>
      </View>
    </ScrollView>
  );
};

export default UserScreen;
