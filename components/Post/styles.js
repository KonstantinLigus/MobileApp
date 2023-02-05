import { StyleSheet } from "react-native";
import { contentTextCommon } from "../../src/styles";

export const post = StyleSheet.create({
  contentFoto: {
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
  },
  contentTextName: {
    ...contentTextCommon,
    marginTop: 8,
    color: "#212121",
  },
  infoWrapper: {
    marginTop: 8,
    flexDirection: "row",
  },
  commentWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentsAmount: {
    ...contentTextCommon,
    marginLeft: 6,
  },
  likesWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 24,
  },
  contentLocatsNameWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  contentLocatsName: {
    ...contentTextCommon,
    marginLeft: 4,
    color: "#212121",
    textDecorationLine: "underline",
  },
});
