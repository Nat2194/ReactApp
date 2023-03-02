import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

// Custom imports
import styles from "../styles";
import Draggable from "./Draggable";

type props = {
  x: number;
  y: number;
  componentsList: JSX.Element[];
  setList: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
};

const Spawner = ({ x, y, componentsList, setList }: props) => {
  return (
    <View style={styles.centerCol}>
      <TouchableOpacity
        onPress={() =>
          setList((componentsList) => [
            ...componentsList,
            <Draggable
              key={"drag" + `${componentsList.length + 1}`}
              size={30}
              x={x}
              y={y}
              color={"#f26636"}
              number={componentsList.length + 1}
            />,
          ])
        }
        style={[styles.centerRow]}
      >
        <Text style={styles.p10}>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Spawner;
