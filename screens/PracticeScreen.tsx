import React, { useLayoutEffect } from "react";
import {
  ImageBackground,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image } from "@rneui/themed";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import Constants from "expo-constants";

// Custom imports
import styles from "../styles";
import { DrillStackParamList, TabStackParamList } from "../navigator/types";
import { RootStackParamList } from "../navigator/types";

export type PracticeScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<DrillStackParamList, "Overview">,
  NativeStackNavigationProp<RootStackParamList>
>;

const PracticeScreen = () => {
  const navigation = useNavigation<PracticeScreenNavigationProps>();

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={[styles.bgApp, { paddingTop: Constants.statusBarHeight }]}>
      <Image
        source={require("../assets/practice.jpg")}
        containerStyle={[
          styles.startCol,
          { height: windowHeight / 5 },
          styles.bgBlue,
        ]}
        style={[styles.image, styles.startCol]}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View
        style={[
          styles.centerRow,
          styles.pVert10,
          styles.fillW,
          styles.bgOrange,
          { height: windowHeight / 10 },
        ]}
      >
        <Text
          style={[styles.size32, styles.bold, styles.txtWhite, styles.shadow]}
        >
          Practice
        </Text>
      </View>
      <View>
        <View
          style={[
            styles.col,
            styles.fillW,
            styles.spaceEvenly,
            { height: (windowHeight * 64) / 100 },
          ]}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Shooting")}
            style={[styles.fillW, { height: "25%" }]}
          >
            <View style={[styles.col, styles.fillW, styles.centerCol]}>
              <ImageBackground
                source={require("../assets/shooting.jpg")}
                resizeMode="cover"
                style={[styles.image, styles.centerCol]}
              >
                <Text
                  numberOfLines={1}
                  style={[
                    styles.size20,
                    styles.bold,
                    styles.txtWhite,
                    styles.shadow,
                    styles.p5,
                    styles.alignCenter,
                  ]}
                >
                  Shooting
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Finishing")}
            style={[styles.fillW, { height: "25%" }]}
          >
            <View style={[styles.col, styles.fillW, styles.centerCol]}>
              <ImageBackground
                source={require("../assets/finishing.jpg")}
                resizeMode="cover"
                style={[styles.image, styles.centerCol]}
              >
                <Text
                  numberOfLines={1}
                  style={[
                    styles.size20,
                    styles.bold,
                    styles.txtWhite,
                    styles.shadow,
                    styles.p5,
                    styles.alignCenter,
                  ]}
                >
                  Finishing
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Handling")}
            style={[styles.fillW, { height: "25%" }]}
          >
            <View style={[styles.col, styles.fillW, styles.centerCol]}>
              <ImageBackground
                source={require("../assets/handling.jpg")}
                resizeMode="cover"
                style={[styles.image, styles.centerCol]}
              >
                <Text
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
                  Ball Handling
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Athleticism")}
            style={[styles.fillW, { height: "25%" }]}
          >
            <View style={[styles.col, styles.fillW, styles.centerCol]}>
              <ImageBackground
                source={require("../assets/athleticism.jpg")}
                resizeMode="cover"
                style={[styles.image, styles.centerCol]}
              >
                <Text
                  numberOfLines={1}
                  style={[
                    styles.size20,
                    styles.bold,
                    styles.txtWhite,
                    styles.shadow,
                    styles.p5,
                    styles.alignCenter,
                  ]}
                >
                  Athleticism
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PracticeScreen;
