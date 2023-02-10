import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // Size

  fillW: {
    minWidth: "100%",
  },
  fillH: {
    minHeight: "100%",
  },

  h10: {
    height: 10,
  },

  h20: {
    height: 20,
  },

  h30: {
    height: 30,
  },

  h40: {
    height: 40,
  },

  h50: {
    height: 50,
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

  bgBlack: {
    backgroundColor: "black",
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
  bgLightGrey: {
    backgroundColor: "#E5E4E2",
  },
  bgGrey: {
    backgroundColor: "#A9A9A9",
  },
  bgDarkGrey: {
    backgroundColor: "#71797E",
  },
  bgWood: {
    backgroundColor: "#ba926c",
  },

  // Layout

  ratio1: {
    aspectRatio: 1,
  },

  round15: {
    borderRadius: 15,
  },

  round20: {
    borderRadius: 20,
  },

  round25: {
    borderRadius: 25,
  },

  round30: {
    borderRadius: 30,
  },

  // Marging

  m30: {
    margin: 30,
  },

  mVert10: {
    marginVertical: 10,
  },

  mVert30: {
    marginVertical: 30,
  },

  mHori30: {
    marginHorizontal: 30,
  },

  mTop30: {
    marginTop: 30,
  },

  mTop50: {
    marginTop: 50,
  },

  mLeft10: {
    marginLeft: 10,
  },

  // Padding
  p5: {
    padding: 5,
  },

  p10: {
    padding: 10,
  },

  p15: {
    padding: 15,
  },

  p20: {
    padding: 20,
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

  pTop40: {
    paddingTop: 40,
  },

  pTop50: {
    paddingTop: 50,
  },

  pBottom10: {
    paddingBottom: 10,
  },

  pBottom30: {
    paddingBottom: 30,
  },

  pBottom40: {
    paddingBottom: 40,
  },

  pBottom50: {
    paddingBottom: 50,
  },

  pLeft10: {
    paddingLeft: 10,
  },
  pLeft20: {
    paddingLeft: 20,
  },

  // Position

  bottom: {
    position: "relative",
    bottom: 0,
  },

  top: {
    position: "relative",
    top: 0,
  },

  left: {
    position: "relative",
    left: 0,
  },

  right: {
    position: "relative",
    right: 0,
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
  endRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  endCol: {
    flexDirection: "column",
    justifyContent: "flex-end",
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
  alignStart: {
    alignItems: "flex-start",
  },
  alignEnd: {
    alignSelf: "flex-end",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  spaceEvenly: {
    justifyContent: "space-evenly",
  },
  spaceStart: {
    justifyContent: "flex-start",
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
  size14: {
    fontSize: 14,
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

  // Borders

  border1: {
    borderWidth: 1,
  },
  border3: {
    borderWidth: 3,
  },
  border5: {
    borderWidth: 5,
  },

  borderVert1: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },

  borderVert3: {
    borderBottomWidth: 3,
    borderTopWidth: 3,
  },

  borderVert5: {
    borderBottomWidth: 5,
    borderTopWidth: 5,
  },

  borderHori1: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },

  borderHori3: {
    borderLeftWidth: 3,
    borderRightWidth: 3,
  },

  borderHori5: {
    borderLeftWidth: 5,
    borderRightWidth: 5,
  },

  borderTop1: {
    borderTopWidth: 1,
  },

  borderTop2: {
    borderTopWidth: 2,
  },

  borderTop3: {
    borderTopWidth: 3,
  },

  borderTop5: {
    borderTopWidth: 5,
  },

  borderTop10: {
    borderTopWidth: 10,
  },

  borderBottom1: {
    borderBottomWidth: 1,
  },

  borderBottom2: {
    borderBottomWidth: 2,
  },

  borderBottom3: {
    borderBottomWidth: 3,
  },

  borderBottom5: {
    borderBottomWidth: 5,
  },

  borderBottom10: {
    borderBottomWidth: 10,
  },

  borderApp: {
    borderColor: "#e2e8f0",
  },

  borderWhite: {
    borderColor: "white",
  },

  borderBlack: {
    borderColor: "black",
  },

  borderGrey: {
    borderColor: "#94a3b8",
  },

  borderDarkGrey: {
    borderColor: "#1f2937",
  },

  borderOrange: {
    borderColor: "#f26636",
  },

  borderDarkOrange: {
    borderColor: "#db5c30",
  },

  // Particular Cases
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },

  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#e2e8f0",
  },
  video: {
    alignSelf: "center",
    height: 200,
  },

  buttons: {
    borderRadius: 30,
    aspectRatio: 1,
  },

  paragraph: {
    fontSize: 18,
  },

  // Tests

  testButton: {
    backgroundColor: "blue",
    color: "white",
    paddingHorizontal: 15,
    paddingVertical: 32,
    textAlign: "center",
    fontSize: 16,
  },

  testButtons: {
    display: "flex",
    justifyContent: "center",
  },
});
