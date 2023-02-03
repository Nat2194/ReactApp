import React, { useLayoutEffect } from "react";
import {
  ImageBackground,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Icon } from "@rneui/themed";
import Constants from "expo-constants";

// Custom imports
import styles from "../styles";
import Header from "../components/Header";
import Body from "../components/Body";

type props = {
  navigation: any;
};

const DrillPanel = ({ navigation }: props) => {
  const windowHeight = Dimensions.get("window").height;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={[styles.startCol, { paddingTop: Constants.statusBarHeight }]}>
      <Header navigation={navigation} />
      <View style={[styles.startCol, { height: (windowHeight * 68) / 100 }]}>
        <ScrollView style={[styles.col]}>
          <Body />
        </ScrollView>
      </View>
    </View>
  );
};

export default DrillPanel;
