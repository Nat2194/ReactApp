import React, { useLayoutEffect } from "react";
import {
  ImageBackground,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import Constants from "expo-constants";

// Custom imports
import styles from "../styles";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { TabStackParamList } from "../navigator/types";
import { DrillStackParamList } from "../navigator/types";

export type HandlingScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<DrillStackParamList>,
  BottomTabNavigationProp<TabStackParamList, "Practice">
>;

function HandlingScreen() {
  const navigation = useNavigation<HandlingScreenNavigationProps>();

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={[styles.startCol, { paddingTop: Constants.statusBarHeight }]}>
      <View
        style={[styles.startCol, styles.borderDarkOrange, styles.borderBottom2]}
      >
        <ImageBackground
          source={require("../assets/handling.jpg")}
          resizeMode="cover"
          style={[styles.image, { height: (25 * windowHeight) / 100 }]}
        >
          <View style={[styles.centerCol, styles.fillH]}>
            <View style={{ position: "absolute", top: 10, left: 0 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Overview")}
                style={[
                  styles.h40,
                  styles.ratio1,
                  styles.centerRow,
                  styles.bgOrange,
                  styles.round30,
                  styles.mLeft10,
                  styles.align,
                ]}
              >
                <Icon name="chevron-left" type="entypo" color={"white"}></Icon>
              </TouchableOpacity>
            </View>
            <View style={[styles.align, styles.centerCol]}>
              <Text
                numberOfLines={1}
                style={[
                  styles.size32,
                  styles.bold,
                  styles.txtWhite,
                  styles.shadow,
                ]}
              >
                Ball Handling Drills
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={[styles.startCol, { height: (windowHeight * 68) / 100 }]}>
        <ScrollView style={[styles.col]}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Handling")}
            style={[styles.startCol, { height: 150 }]}
          >
            <View style={[styles.alignStart, styles.startCol]}>
              <ImageBackground
                source={require("../assets/ball-control.jpg")}
                resizeMode="cover"
                style={[styles.image, styles.centerCol]}
              >
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={3}
                  style={[
                    styles.size20,
                    styles.bold,
                    styles.txtWhite,
                    styles.shadow,
                    styles.p5,
                    styles.alignCenter,
                  ]}
                >
                  Ball control Drills
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Handling")}
            style={[styles.startCol, { height: 150 }]}
          >
            <View style={[styles.alignStart, styles.startCol]}>
              <ImageBackground
                source={require("../assets/crossover.jpg")}
                resizeMode="cover"
                style={[styles.image, styles.centerCol]}
              >
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={2}
                  style={[
                    styles.size20,
                    styles.bold,
                    styles.txtWhite,
                    styles.shadow,
                    styles.p5,
                    styles.alignCenter,
                  ]}
                >
                  Crossovers
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Handling")}
            style={[styles.startCol, { height: 150 }]}
          >
            <View style={[styles.alignStart, styles.startCol]}>
              <ImageBackground
                source={require("../assets/btl.jpg")}
                resizeMode="cover"
                style={[styles.image, styles.centerCol]}
              >
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={3}
                  style={[
                    styles.size20,
                    styles.bold,
                    styles.txtWhite,
                    styles.shadow,
                    styles.p5,
                    styles.alignCenter,
                  ]}
                >
                  Between the Legs
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Handling")}
            style={[styles.startCol, { height: 150 }]}
          >
            <View style={[styles.alignStart, styles.startCol]}>
              <ImageBackground
                source={require("../assets/btb.jpg")}
                resizeMode="cover"
                style={[styles.image, styles.centerCol]}
              >
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={3}
                  style={[
                    styles.size20,
                    styles.bold,
                    styles.txtWhite,
                    styles.shadow,
                    styles.p5,
                    styles.alignCenter,
                  ]}
                >
                  Behind the Back
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Handling")}
            style={[styles.startCol, { height: 150 }]}
          >
            <View style={[styles.alignStart, styles.startCol]}>
              <ImageBackground
                source={require("../assets/in-n-out.jpg")}
                resizeMode="cover"
                style={[styles.image, styles.centerCol]}
              >
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={3}
                  style={[
                    styles.size20,
                    styles.bold,
                    styles.txtWhite,
                    styles.shadow,
                    styles.p5,
                    styles.alignCenter,
                  ]}
                >
                  In & Out
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Handling")}
            style={[styles.startCol, { height: 150 }]}
          >
            <View style={[styles.alignStart, styles.startCol]}>
              <ImageBackground
                source={require("../assets/spin-move.jpg")}
                resizeMode="cover"
                style={[styles.image, styles.centerCol]}
              >
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={3}
                  style={[
                    styles.size20,
                    styles.bold,
                    styles.txtWhite,
                    styles.shadow,
                    styles.p5,
                    styles.alignCenter,
                  ]}
                >
                  Spin Moves
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

export default HandlingScreen;
