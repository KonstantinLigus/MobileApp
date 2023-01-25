import { StyleSheet } from "react-native";
import { contentTextCommon } from "../../src/styles";

export const post = StyleSheet.create({
  postContainer: {
    paddingVertical: 32,
  },
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
  contentLocatsNameWrapper: {
    marginLeft: 49,
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
