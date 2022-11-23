import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // Size

  fillW: {
    minWidth: "100%",
  },
  fillH: {
    minHeight: "100%",
  },
  h100: {
    height: 100,
  },
  h110: {
    height: 110,
  },
  h120: {
    height: 120,
  },
  h150: {
    height: 150,
  },
  h185: {
    height: 185,
  },
  maxH185: {
    maxHeight: 185,
  },

  // Color

  bgApp: {
    backgroundColor: "#e2e8f0",
  },

  bgOrange: {
    backgroundColor: "#f26636",
  },
  bgBlue: {
    backgroundColor: "blue",
  },
  bgRed: {
    backgroundColor: "red",
  },
  bgGreen: {
    backgroundColor: "green",
  },

  // Layout

  ratio1: {
    aspectRatio: 1,
  },

  round30: {
    borderRadius: 30,
  },

  // Marging

  mVert30: {
    marginVertical: 30,
  },
  mTop30: {
    marginTop: 30,
  },

  mTop50: {
    marginTop: 50,
  },

  // Padding
  p5: {
    padding: 10,
  },

  p30: {
    padding: 30,
  },

  pVert10: {
    paddingVertical: 10,
  },

  pVert30: {
    paddingVertical: 30,
  },

  pHori10: {
    paddingHorizontal: 10,
  },

  pHori30: {
    paddingHorizontal: 30,
  },

  pTop30: {
    paddingTop: 30,
  },

  pTop50: {
    paddingTop: 50,
  },

  // Flex

  row: {
    flexDirection: "row",
  },
  col: {
    flexDirection: "column",
  },
  centerRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  centerCol: {
    flexDirection: "column",
    justifyContent: "center",
  },
  startRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  startCol: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  grow0: {
    flexGrow: 0,
  },
  grow1: {
    flexGrow: 1,
  },
  grow2: {
    flexGrow: 2,
  },
  align: {
    alignItems: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  spaceEvenly: {
    justifyContent: "space-evenly",
  },

  // Shadows
  shadow: {
    textShadowColor: "#000",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },

  // Text

  txtWhite: {
    color: "white",
  },
  bold: {
    fontWeight: "bold",
  },
  size18: {
    fontSize: 18,
  },
  size20: {
    fontSize: 20,
  },
  size24: {
    fontSize: 24,
  },
  size32: {
    fontSize: 32,
  },
  size64: {
    fontSize: 64,
  },

  alignCenter: {
    textAlign: "center",
  },

  // Particular Cases
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  message: {
    color: "white",
    fontWeight: "bold",
    textShadowColor: "#333",
    fontSize: 24,
  },
});
