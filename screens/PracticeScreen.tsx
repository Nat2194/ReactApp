import React, { useLayoutEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Image } from "@rneui/themed";

// Custom imports
import styles from "../styles";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { TabStackParamList } from "../navigator/TabNavigator";
import { RootStackParamList } from "../navigator/RootNavigator";

export type PracticeScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Practice">,
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
    <View style={[styles.bgApp]}>
      <Image
        source={require("../assets/practice.jpg")}
        containerStyle={[
          styles.startCol,
          { height: windowHeight / 4 },
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
            styles.row,
            styles.fillW,
            styles.spaceEvenly,
            styles.mVert30,
            { height: (windowHeight * 6) / 10 },
          ]}
        >
          <View
            style={[
              styles.col,
              styles.spaceEvenly,
              styles.align,
              styles.mVert30,
            ]}
          >
            <View
              style={[
                styles.align,
                styles.centerRow,
                styles.bgOrange,
                styles.h120,
                styles.ratio1,
                styles.round30,
              ]}
            >
              <Text
                adjustsFontSizeToFit
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
            </View>
            <View
              style={[
                styles.align,
                styles.centerRow,
                styles.bgOrange,
                styles.h120,
                styles.ratio1,
                styles.round30,
              ]}
            >
              <Text
                adjustsFontSizeToFit
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
            </View>
          </View>
          <View
            style={[
              styles.col,
              styles.spaceEvenly,
              styles.align,
              styles.mVert30,
            ]}
          >
            <View
              style={[
                styles.align,
                styles.centerRow,
                styles.bgOrange,
                styles.h120,
                styles.ratio1,
                styles.round30,
              ]}
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
                Ball{"\n"}Handling
              </Text>
            </View>
            <View
              style={[
                styles.align,
                styles.centerRow,
                styles.bgOrange,
                styles.h120,
                styles.ratio1,
                styles.round30,
              ]}
            >
              <Text
                adjustsFontSizeToFit
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
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PracticeScreen;
