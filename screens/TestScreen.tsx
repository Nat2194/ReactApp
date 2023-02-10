// kind of a sandbox to test new features

import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import Constants from "expo-constants";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";

// Custom imports
import { TabStackParamList } from "../navigator/types";
import TestButton from "../components/TestButton";

export type BoardScreenNavigationProps = BottomTabNavigationProp<
  TabStackParamList,
  "Board"
>;

const { width, height } = Dimensions.get("window");

const { cond, eq, add, set, Value, event, interpolateNode, Extrapolate } =
  Animated;

function TestScreen() {
  const navigation = useNavigation<BoardScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const dragX = new Value(0);
  const dragY = new Value(0);

  const offsetX = new Value(width / 2);
  const offsetY = new Value(height / 2);

  const gestureState = new Value(-1);

  const transX = cond(
    eq(gestureState, State.ACTIVE),
    add(offsetX, dragX),
    set(offsetX, add(offsetX, dragX))
  );

  const transY = cond(
    eq(gestureState, State.ACTIVE),
    add(offsetY, dragY),
    set(offsetY, add(offsetY, dragY))
  );

  const opacity = interpolateNode(transY, {
    inputRange: [0, height],
    outputRange: [0.1, 1],
  });

  /*const onGestureEvent = Animated.event([
    {
      nativeEvent: {
        translationX: dragX,
        translationY: dragY,
        state: gestureState,
      },
    },
  ]);*/

  const onGestureEvent = () => {
    console.log("X= " + dragX);
    console.log("Y= " + dragY);
  };

  return (
    <View style={styles.container}>
      <PanGestureHandler
        maxPointers={1}
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onGestureEvent}
      >
        <Animated.View
          style={[
            styles.box,
            {
              opacity: opacity,
              transform: [
                {
                  translateX: transX,
                },
                {
                  translateY: transY,
                },
              ],
            },
          ]}
        />
      </PanGestureHandler>
    </View>
  );
}

const CIRCLE_SIZE = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: "tomato",
    marginLeft: -(CIRCLE_SIZE / 2),
    marginTop: -(CIRCLE_SIZE / 2),
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    borderColor: "#000",
  },
});

export default TestScreen;
