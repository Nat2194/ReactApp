import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

// Custom imports
import styles from "../styles";
import StatPanel from "./StatPanel";

const Dashboard = () => {
  const name = "Nathan";
  return (
    <View style={[styles.fillW]}>
      <View
        style={[
          styles.centerRow,
          styles.pTop30,
          styles.pBottom10,
          styles.bgBlack,
        ]}
      >
        <Text style={[styles.txtWhite, styles.size24]}>{name}'s stats</Text>
      </View>
      <View style={[styles.centerRow, styles.spaceEvenly]}>
        <View style={[styles.centerCol, styles.align, styles.spaceEvenly]}>
          <StatPanel
            size={"40%"}
            name="Shots"
            iconName="shooter"
            color="#10b981"
          ></StatPanel>
          <StatPanel
            size={"40%"}
            name="Dribble"
            iconName="dribble-hand"
            color="#facc15"
          ></StatPanel>
        </View>
        <View style={[styles.centerCol, styles.align, styles.spaceEvenly]}>
          <StatPanel
            size={"40%"}
            name="Finishing"
            iconName="layup"
            color="#c084fc"
          ></StatPanel>
          <StatPanel
            size={"40%"}
            name="Post Moves"
            iconName="basket"
            color="#e11d48"
          ></StatPanel>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
