import { StyleSheet } from "react-native";

export const header = StyleSheet.create({
  titleWrapper: {
    flexDirection: "row",
    height: 88,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 55,
    paddingBottom: 11,
    borderWidth: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    elevation: 1.1,
  },
  title: {
    flex: 1,
    fontFamily: "Roboto-Regular",
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: -0.408,
    color: "#212121",
  },
  outLogBtn: {
    position: "absolute",
    right: 16,
    bottom: 10,
  },
  backArrBtn: {
    position: "absolute",
    left: 16,
    bottom: 10,
  },
});
