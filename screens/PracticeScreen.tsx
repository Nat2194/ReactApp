import React, { useLayoutEffect } from "react";
import { Text, View, ActivityIndicator, Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image } from "@rneui/themed";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import Constants from "expo-constants";

// Custom imports
import styles from "../styles";
import { DrillStackParamList } from "../navigator/types";
import { RootStackParamList } from "../navigator/types";
import ImageDrill from "../components/ImageDrill";

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
          <ImageDrill
            nav={navigation}
            route="Shooting"
            name="Shooting"
            numberLines={2}
            image={require("../assets/shooting.jpg")}
            height={"25%"}
          />
          <ImageDrill
            nav={navigation}
            route="Finishing"
            name="Finishing"
            numberLines={2}
            image={require("../assets/finishing.jpg")}
            height={"25%"}
          />
          <ImageDrill
            nav={navigation}
            route="Handling"
            name="Ball Handling"
            numberLines={3}
            image={require("../assets/handling.jpg")}
            height={"25%"}
          />
          <ImageDrill
            nav={navigation}
            route="Athleticism"
            name="Athleticism"
            numberLines={2}
            image={require("../assets/athleticism.jpg")}
            height={"25%"}
          />
        </View>
      </View>
    </View>
  );
};

export default PracticeScreen;
