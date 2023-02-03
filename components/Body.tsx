import React, { useLayoutEffect } from "react";
import {
  ImageBackground,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Icon } from "@rneui/themed";
import Constants from "expo-constants";
import { useRoute } from "@react-navigation/native";

// Custom imports
import styles from "../styles";
import VideoPlayer from "./VideoPlayer";
import ShotsInput from "./ShotsInput";
import SubmitButton from "./SubmitButton";

type PageBody = {
  [key: string]: any;
};

const windowWidth = Dimensions.get("window").width;

const createTwoButtonAlert = () =>
  Alert.alert("Alert Title", "My Alert Msg", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);

const Body = () => {
  const windowHeight = Dimensions.get("window").height;
  const route = useRoute().name;

  var body: PageBody;

  body = {
    FormShot: (
      <View style={[styles.p20, styles.bgLightGrey]}>
        <View style={[]}>
          <Text style={[styles.paragraph]}>
            For this progression, we focus on getting our feet about shoulder
            width apart or slightly narrower.{"\n"}You should be in a strong,
            balanced position. Make sure to check your feet and develop
            consistency on every shot.{"\n"}We prefer to slightly stagger our
            feet or slightly turn them. The anatomy is different for every one.
            You need to find what works for you.{"\n"}
            {"\n"}Next, make an L with your shooting arm. Focus on pushing the
            ball up and out.{"\n"}Your elbow should finish above your eyes.
            Focus on pushing the ball through your fingers.
            {"\n"}
            {"\n"}Typically, you should either finish with your index finger
            pointing at the hoop or with your index/middle finger pointing at
            the hoop.
            {"\n"}Find what works best for you. When you properly shoot "up and
            out" and "push through your fingers", you will get the proper
            backspin on the ball.
          </Text>
        </View>
        <ShotsInput name="Form shots" toMake={20} />
        <SubmitButton onPress={createTwoButtonAlert} />
        <View style={[styles.centerCol]}>
          <View style={[styles.centerRow, styles.pVert10]}>
            <Text style={[styles.paragraph]}>
              Watch this video to learn more !
            </Text>
          </View>
          <View
            style={[styles.centerRow]}
            renderToHardwareTextureAndroid={true}
          >
            <VideoPlayer
              vidRef="https://www.youtube.com/embed/C9w8J5AAaME"
              width={windowWidth}
            ></VideoPlayer>
          </View>
        </View>
      </View>
    ),
    FreeThrow: (
      <View style={[styles.p20]}>
        <View style={[]}>
          <Text style={[styles.paragraph]}>
            For this progression, we focus on getting our feet about shoulder
            width apart or slightly narrower. You should be in a strong,
            balanced position. Make sure to check your feet and develop
            consistency on every shot. We prefer to slightly stagger our feet or
            slightly turn them. The anatomy is different for every one. You need
            to find what works for you. Next, make an L with your shooting arm.
            Focus on pushing the ball up and out. Your elbow should finish above
            your eyes. Focus on pushing the ball through your fingers.
            Typically, you should either finish with your index finger pointing
            at the hoop or with your index/middle finger pointing at the hoop.
            Find what works best for you. When you properly shoot "up and out"
            and "push through your fingers", you will get the proper backspin on
            the ball.
          </Text>
        </View>
        <ShotsInput name="Form shots" toMake={20} />
        <SubmitButton onPress={createTwoButtonAlert} />
        <View style={[styles.centerCol]}>
          <View style={[styles.centerRow, styles.pVert10]}>
            <Text style={[styles.paragraph]}>
              Watch this video to learn more !
            </Text>
          </View>
          <View
            style={[styles.centerRow]}
            renderToHardwareTextureAndroid={true}
          >
            <VideoPlayer
              vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
              width={windowWidth}
            ></VideoPlayer>
          </View>
        </View>
      </View>
    ),
    Midrange: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    RayAllen: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    ThreePoint: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    Fadeaway: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    Stepback: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    Mikan: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    Floater: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    BallControl: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    BTL: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    BTB: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    InNOut: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    Plyometrics: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    Core: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    Leg: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    Cardio: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    UnderhandLayup: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    Eurostep: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    UpAndUnder: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    ReverseLayup: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    SpinLayup: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    ShakeAndBake: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://www.youtube.com/embed/C9w8J5AAaME"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    ForwardPivot: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    BackPivot: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    JumpHook: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    SkyHook: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    DropStep: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    StepThrough: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    DreamShake: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    ReverseSpin: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    FakeReverse: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    PennyHardaway: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    KyrieHesi: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    BasicCrossover: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    KillerCrossover: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    DoubleCrossover: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    Snatch: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    Hesitation: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
    Shammgod: (
      <View style={[styles.p20]}>
        <VideoPlayer
          vidRef="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          width={windowWidth}
        ></VideoPlayer>
        <Text style={[styles.paragraph]}>
          For this progression, we focus on getting our feet about shoulder
          width apart or slightly narrower. You should be in a strong, balanced
          position. Make sure to check your feet and develop consistency on
          every shot. We prefer to slightly stagger our feet or slightly turn
          them. The anatomy is different for every one. You need to find what
          works for you. Next, make an L with your shooting arm. Focus on
          pushing the ball up and out. Your elbow should finish above your eyes.
          Focus on pushing the ball through your fingers. Typically, you should
          either finish with your index finger pointing at the hoop or with your
          index/middle finger pointing at the hoop. Find what works best for
          you. When you properly shoot "up and out" and "push through your
          fingers", you will get the proper backspin on the ball.
        </Text>
      </View>
    ),
  };

  return body[route];
};

export default Body;
