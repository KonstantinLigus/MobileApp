import { StyleSheet } from "react-native";

export const screenWrapper = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    paddingTop: 119,
  },
  container: {
    // alignItems: "center",
    paddingTop: 92,
    paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  userIconWrapper: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addUserIcon: {
    position: "absolute",
    right: -12.5,
    bottom: -100,
    width: 25,
    height: 25,
  },
});
