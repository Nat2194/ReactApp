import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

// Custom Imports
import styles from "../styles";

type props = {
  name: string;
  toMake: number;
};

const ShotsInput = ({ toMake, name }: props) => {
  const [text, setText] = useState("");

  return (
    <View style={[styles.row, styles.align]}>
      <Text style={[styles.paragraph]}>{name} made:</Text>
      <TextInput
        style={[
          {
            height: 40,
          },
          styles.border1,
          styles.borderGrey,
          styles.m30,
        ]}
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <View>
        <Text style={[styles.paragraph]}>/{toMake}</Text>
      </View>
    </View>
  );
};

export default ShotsInput;
