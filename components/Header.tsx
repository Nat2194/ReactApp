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
import { useRoute } from "@react-navigation/native";

// Custom imports
import styles from "../styles";

type props = {
  navigation: any;
};

type PageHeader = {
  [key: string]: { image: any; name: string };
};

const Header = ({ navigation }: props) => {
  const windowHeight = Dimensions.get("window").height;
  const route = useRoute().name;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  var header: PageHeader;

  header = {
    FormShot: { name: "Form Shots", image: require("../assets/form.png") },
    FreeThrow: {
      name: "Free Throw",
      image: require("../assets/free-throw.jpg"),
    },
    Midrange: { name: "Midrange", image: require("../assets/midrange.jpg") },
    RayAllen: {
      name: "Ray Allen Drill",
      image: require("../assets/ray-allen.jpg"),
    },
    ThreePoint: {
      name: "3 Point Shots",
      image: require("../assets/curry.jpg"),
    },
    Fadeaway: { name: "Fadeaway", image: require("../assets/fadeaway.jpg") },
    Stepback: { name: "Stepback", image: require("../assets/stepback.jpg") },
    Mikan: { name: "Mikan Drill", image: require("../assets/mikan.jpg") },
    Floater: { name: "Floater", image: require("../assets/trae.jpg") },
    BallControl: {
      name: "Ball Control Drills",
      image: require("../assets/ball-control.jpg"),
    },
    BTL: { name: "Between the Legs", image: require("../assets/btl.jpg") },
    BTB: { name: "Behind the Back", image: require("../assets/btb.jpg") },
    InNOut: { name: "In & Out", image: require("../assets/in-n-out.jpg") },
    Plyometrics: {
      name: "Plyometrics",
      image: require("../assets/plyometrics.jpg"),
    },
    Core: { name: "Core Training", image: require("../assets/core.jpg") },
    Leg: { name: "Leg Training", image: require("../assets/legs.jpg") },
    Cardio: { name: "Cardio Training", image: require("../assets/cardio.jpg") },
    UnderhandLayup: {
      name: "Underhand Layup",
      image: require("../assets/underhand-layup.jpg"),
    },
    Eurostep: { name: "Eurostep", image: require("../assets/eurostep.jpg") },
    UpAndUnder: {
      name: "Up and Under",
      image: require("../assets/up-and-under.jpg"),
    },
    ReverseLayup: {
      name: "Reverse Layup",
      image: require("../assets/reverse-layup.jpg"),
    },
    SpinLayup: {
      name: "Spin Layup",
      image: require("../assets/spin-layup.jpg"),
    },
    ShakeAndBake: {
      name: "Shake N Bake",
      image: require("../assets/shake-n-bake.jpg"),
    },
    ForwardPivot: {
      name: "Forward Pivot",
      image: require("../assets/forward-pivot.jpg"),
    },
    BackPivot: {
      name: "Back Pivot",
      image: require("../assets/back-pivot.jpg"),
    },
    JumpHook: { name: "Jump Hook", image: require("../assets/jump-hook.jpg") },
    SkyHook: { name: "Sky Hook", image: require("../assets/skyhook.jpg") },
    DropStep: { name: "Drop Step", image: require("../assets/drop-step.jpg") },
    StepThrough: {
      name: "Step Through",
      image: require("../assets/step-through.jpg"),
    },
    DreamShake: {
      name: "Dream Shake",
      image: require("../assets/dream-shake.jpg"),
    },
    ReverseSpin: {
      name: "Reverse Spin",
      image: require("../assets/reverse-spin.jpg"),
    },
    FakeReverse: {
      name: "Fake Reverse",
      image: require("../assets/fake-reverse.jpg"),
    },
    PennyHardaway: {
      name: "Penny Hardaway Move",
      image: require("../assets/penny-hardaway.jpg"),
    },
    KyrieHesi: {
      name: "Kyrie Hesi",
      image: require("../assets/kyrie-hesi-spin.jpg"),
    },
    BasicCrossover: {
      name: "Crossover",
      image: require("../assets/basic-cross.jpg"),
    },
    KillerCrossover: {
      name: "Killer Crossover",
      image: require("../assets/killer-cross.jpg"),
    },
    DoubleCrossover: {
      name: "Double Crossover",
      image: require("../assets/double-cross.jpg"),
    },
    Snatch: { name: "Snatch", image: require("../assets/snatch.jpg") },
    Hesitation: { name: "Hesitation", image: require("../assets/hesi.jpg") },
    Shammgod: { name: "Shammgod", image: require("../assets/shammgod.jpg") },
  };

  return (
    <View
      style={[styles.startCol, styles.borderDarkOrange, styles.borderBottom2]}
    >
      <ImageBackground
        source={header[route].image}
        resizeMode="cover"
        style={[styles.image, { height: (25 * windowHeight) / 100 }]}
      >
        <View style={[styles.centerCol, styles.fillH]}>
          <View style={{ position: "absolute", top: 10, left: 0 }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
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
              {header[route].name}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;
