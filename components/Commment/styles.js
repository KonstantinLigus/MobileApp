import { StyleSheet } from "react-native";
import { contentTextCommon } from "../../src/commonStyles";

export const comment = StyleSheet.create({
  commentWrapper: {
    flexDirection: "row",
  },
  userIcon: {
    marginRight: 16,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  commentTextWrapper: {
    flexShrink: 1,
    padding: 16,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  commentText: {
    ...contentTextCommon,
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  commentDate: {
    ...contentTextCommon,
    marginTop: 8,
    fontSize: 10,
    lineHeight: 12,
    textAlign: "right",

    color: "#BDBDBD",
  },
});
