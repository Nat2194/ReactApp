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
    FormShot: { name: "Form Shots", image: require("../assets/img/form.png") },
    FreeThrow: {
      name: "Free Throw",
      image: require("../assets/img/free-throw.jpg"),
    },
    Midrange: {
      name: "Midrange",
      image: require("../assets/img/midrange.jpg"),
    },
    RayAllen: {
      name: "Ray Allen Drill",
      image: require("../assets/img/ray-allen.jpg"),
    },
    ThreePoint: {
      name: "3 Point Shots",
      image: require("../assets/img/curry.jpg"),
    },
    Fadeaway: {
      name: "Fadeaway",
      image: require("../assets/img/fadeaway.jpg"),
    },
    Stepback: {
      name: "Stepback",
      image: require("../assets/img/stepback.jpg"),
    },
    Mikan: { name: "Mikan Drill", image: require("../assets/img/mikan.jpg") },
    Floater: { name: "Floater", image: require("../assets/img/trae.jpg") },
    BallControl: {
      name: "Ball Control Drills",
      image: require("../assets/img/ball-control.jpg"),
    },
    BTL: { name: "Between the Legs", image: require("../assets/img/btl.jpg") },
    BTB: { name: "Behind the Back", image: require("../assets/img/btb.jpg") },
    InNOut: { name: "In & Out", image: require("../assets/img/in-n-out.jpg") },
    Plyometrics: {
      name: "Plyometrics",
      image: require("../assets/img/plyometrics.jpg"),
    },
    Core: { name: "Core Training", image: require("../assets/img/core.jpg") },
    Leg: { name: "Leg Training", image: require("../assets/img/legs.jpg") },
    Cardio: {
      name: "Cardio Training",
      image: require("../assets/img/cardio.jpg"),
    },
    UnderhandLayup: {
      name: "Underhand Layup",
      image: require("../assets/img/underhand-layup.jpg"),
    },
    Eurostep: {
      name: "Eurostep",
      image: require("../assets/img/eurostep.jpg"),
    },
    UpAndUnder: {
      name: "Up and Under",
      image: require("../assets/img/up-and-under.jpg"),
    },
    ReverseLayup: {
      name: "Reverse Layup",
      image: require("../assets/img/reverse-layup.jpg"),
    },
    SpinLayup: {
      name: "Spin Layup",
      image: require("../assets/img/spin-layup.jpg"),
    },
    ShakeAndBake: {
      name: "Shake N Bake",
      image: require("../assets/img/shake-n-bake.jpg"),
    },
    ForwardPivot: {
      name: "Forward Pivot",
      image: require("../assets/img/forward-pivot.jpg"),
    },
    BackPivot: {
      name: "Back Pivot",
      image: require("../assets/img/back-pivot.jpg"),
    },
    JumpHook: {
      name: "Jump Hook",
      image: require("../assets/img/jump-hook.jpg"),
    },
    SkyHook: { name: "Sky Hook", image: require("../assets/img/skyhook.jpg") },
    DropStep: {
      name: "Drop Step",
      image: require("../assets/img/drop-step.jpg"),
    },
    StepThrough: {
      name: "Step Through",
      image: require("../assets/img/step-through.jpg"),
    },
    DreamShake: {
      name: "Dream Shake",
      image: require("../assets/img/dream-shake.jpg"),
    },
    ReverseSpin: {
      name: "Reverse Spin",
      image: require("../assets/img/reverse-spin.jpg"),
    },
    FakeReverse: {
      name: "Fake Reverse",
      image: require("../assets/img/fake-reverse.jpg"),
    },
    PennyHardaway: {
      name: "Penny Hardaway Move",
      image: require("../assets/img/penny-hardaway.jpg"),
    },
    KyrieHesi: {
      name: "Kyrie Hesi",
      image: require("../assets/img/kyrie-hesi-spin.jpg"),
    },
    BasicCrossover: {
      name: "Crossover",
      image: require("../assets/img/basic-cross.jpg"),
    },
    KillerCrossover: {
      name: "Killer Crossover",
      image: require("../assets/img/killer-cross.jpg"),
    },
    DoubleCrossover: {
      name: "Double Crossover",
      image: require("../assets/img/double-cross.jpg"),
    },
    Snatch: { name: "Snatch", image: require("../assets/img/snatch.jpg") },
    Hesitation: {
      name: "Hesitation",
      image: require("../assets/img/hesi.jpg"),
    },
    Shammgod: {
      name: "Shammgod",
      image: require("../assets/img/shammgod.jpg"),
    },
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
