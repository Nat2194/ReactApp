import React, { useState, useCallback, useRef } from "react";
import { View, Button, Alert, Dimensions } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

import WebView from "react-native-webview";

import Constants from "expo-constants";

// Custom Imports
import styles from "../styles";

type props = {
  vidRef: string;
  width: number;
};

const VideoPlayer = ({ vidRef, width }: props) => {
  const video = React.useRef(null);
  const windowWidth = width;
  const vidHeight = windowWidth * 0.5625;

  return (
    <View style={[styles.container, { width: windowWidth }]}>
      <WebView
        originWhitelist={["*"]}
        source={{
          html: `<iframe width="100%" height="100%" src="${vidRef}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        }}
        style={[
          styles.container,
          { height: vidHeight },
          styles.fillW,
          styles.bgApp,
        ]}
      />
    </View>
  );
};

export default VideoPlayer;
