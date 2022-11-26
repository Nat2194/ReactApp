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

type props = {
  navigation: any;
  drill: any;
  image: any;
  name: String;
  previous: String;
};

const DrillPanel = ({ navigation, drill, image, name, previous }: props) => {
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
          source={image}
          resizeMode="cover"
          style={[styles.image, { height: (25 * windowHeight) / 100 }]}
        >
          <View style={[styles.centerCol, styles.fillH]}>
            <View style={{ position: "absolute", top: 10, left: 0 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate(previous)}
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
                {name}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={[styles.startCol, { height: (windowHeight * 68) / 100 }]}>
        <ScrollView style={[styles.col]}>{drill}</ScrollView>
      </View>
    </View>
  );
};

export default DrillPanel;
