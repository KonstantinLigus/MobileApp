import { StyleSheet } from "react-native";
import { contentTextCommon } from "../../src/commonStyles";

export const post = StyleSheet.create({
  contentFoto: {
    width: "100%",
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
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
