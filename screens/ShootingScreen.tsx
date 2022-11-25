import React, { useLayoutEffect } from "react";
import {
  ScrollView,
  ImageBackground,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
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
import ImageDrill from "../components/ImageDrill";

export type ShootingScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<DrillStackParamList>,
  BottomTabNavigationProp<TabStackParamList, "Practice">
>;

function ShootingScreen() {
  const navigation = useNavigation<ShootingScreenNavigationProps>();

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
          source={require("../assets/shooting.jpg")}
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
                numberOfLines={3}
                style={[
                  styles.size32,
                  styles.bold,
                  styles.txtWhite,
                  styles.shadow,
                ]}
              >
                Shooting Drills
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={[styles.startCol, { height: (windowHeight * 68) / 100 }]}>
        <ScrollView style={[styles.col]}>
          <ImageDrill
            nav={navigation}
            route="Finishing"
            name="Form Shots"
            numberLines={3}
            image={require("../assets/form.png")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Finishing"
            name="Free Throws"
            numberLines={3}
            image={require("../assets/free-throw.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Finishing"
            name="Midrange"
            numberLines={2}
            image={require("../assets/midrange.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Finishing"
            name="Ray Allen Drill"
            numberLines={4}
            image={require("../assets/ray-allen.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Finishing"
            name="3 Point Shooting"
            numberLines={4}
            image={require("../assets/curry.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Finishing"
            name="Fadeaway"
            numberLines={2}
            image={require("../assets/fadeaway.jpg")}
            height={150}
          />
          <ImageDrill
            nav={navigation}
            route="Finishing"
            name="Stepback"
            numberLines={2}
            image={require("../assets/stepback.jpg")}
            height={150}
          />
        </ScrollView>
      </View>
    </View>
  );
}

export default ShootingScreen;
