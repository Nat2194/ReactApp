import React from "react";
import { ImageBackground, Text, View, TouchableOpacity } from "react-native";

// Custom imports
import styles from "../styles";

type props = {
  nav: any;
  route: String;
  name: String;
  numberLines: number;
  image: any;
  height: any;
};

const ImageDrill = ({
  nav,
  route,
  name,
  numberLines,
  image,
  height,
}: props) => {
  return (
    <TouchableOpacity
      onPress={() => nav.navigate(route)}
      style={[styles.startCol, { height: height }]}
    >
      <View style={[styles.alignStart, styles.startCol]}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={[styles.image, styles.centerCol]}
        >
          <Text
            adjustsFontSizeToFit
            numberOfLines={numberLines}
            style={[
              styles.size20,
              styles.bold,
              styles.txtWhite,
              styles.shadow,
              styles.p5,
              styles.alignCenter,
            ]}
          >
            {name}
          </Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default ImageDrill;
