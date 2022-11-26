import React, { useState, useCallback, useRef } from "react";
import { View, Button, Alert } from "react-native";
import YoutubePlayer, { YoutubeIframeRef } from "react-native-youtube-iframe";

type props = {
  vidId: string;
};

const VideoPlayer = ({ vidId }: props) => {
  const playerRef = useRef<YoutubeIframeRef>(null);
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: String) => {
    if (state === "ended") {
      setPlaying(false);
    }
    if (state === "playing") {
      setPlaying(true);
    }
    if (state === "paused") {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View>
      <YoutubePlayer ref={playerRef} height={400} width={400} videoId={vidId} />

      <Button
        title="log details"
        onPress={() => {
          playerRef.current
            ?.getCurrentTime()
            .then((currentTime) => console.log({ currentTime }));

          playerRef.current
            ?.getDuration()
            .then((getDuration) => console.log({ getDuration }));
        }}
      />
    </View>
  );
};

export default VideoPlayer;
