import { StyleSheet } from "react-native";
import { contentTextCommon } from "../../src/styles";

export const createPost = StyleSheet.create({
  contentFoto: {
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
  },
  contentTextName: {
    marginTop: 8,
    ...contentTextCommon,
  },
  contentNamesFoto: {
    marginTop: 48,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderColor: " #E8E8E8",
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  contentLocatsNameWrapper: {
    marginTop: 32,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: " #E8E8E8",
  },
  contentLocatsName: {
    marginLeft: 8,
    ...contentTextCommon,
  },
});
