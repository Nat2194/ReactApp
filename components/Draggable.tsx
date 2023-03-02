import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

// Custom imports
import styles from "../styles";

type props = {
  size: any;
  color: any;
  x: number;
  y: number;
  number: number;
};

const Draggable = ({ size, color, x, y, number }: props) => {
  const pan = useRef(new Animated.ValueXY({ x, y })).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}
      >
        <View
          style={[
            styles.ball,
            styles.centerCol,
            { height: size, width: size, backgroundColor: color },
          ]}
        >
          <View style={[styles.centerRow]}>
            <Text>{number}</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default Draggable;
