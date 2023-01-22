import { StyleSheet } from "react-native";

export const userIcon = StyleSheet.create({
  userWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  userIcon: {
    height: 60,
    width: 60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  userInfo: {
    marginLeft: 8,
  },
  userName: {
    fontFamily: "Roboto-Regular",
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
});
