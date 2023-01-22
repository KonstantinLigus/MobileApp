import { StyleSheet } from "react-native";

export const regScreenStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 92,
    paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  userIconWrapper: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addUserIconBtn: {
    position: "absolute",
    right: -12.5,
    bottom: 14,
  },
  addUserIcon: {
    width: 25,
    height: 25,
  },
  form: {
    width: "100%",
    paddingHorizontal: 16,
  },
  formTitle: {
    marginBottom: 33,
    fontFamily: "Roboto-Regular",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.16,
    color: "#212121",
  },
  textInput: {
    height: 50,
    marginBottom: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  showPasswordBtn: {
    position: "absolute",
    right: 32,
    top: 14,
  },
  showPasswordText: {
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
    fontWeight: "400",
  },
  redirectLink: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    color: "#1B4371",
  },
  redirectLinkText: {
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
  },
});

export const logInStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 92,
    paddingBottom: 144,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  userIconWrapper: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addUserIconBtn: {
    position: "absolute",
    right: -12.5,
    bottom: 14,
  },
  addUserIcon: {
    width: 25,
    height: 25,
  },
  form: {
    width: "100%",
    paddingHorizontal: 16,
  },
  formTitle: {
    marginBottom: 33,
    fontFamily: "Roboto-Regular",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.16,
    color: "#212121",
  },
  textInput: {
    height: 50,
    marginBottom: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  showPasswordBtn: {
    position: "absolute",
    right: 32,
    top: 14,
  },
  showPasswordText: {
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
    fontWeight: "400",
  },
  logInBtn: {
    height: 51,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  logInText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
  },
});

export const postsScreen = StyleSheet.create({
  setingsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    height: 83,
    width: "100%",
    paddingTop: 9,
    borderWidth: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    elevation: 1.1,
  },
});

export const createPostsScreen = StyleSheet.create({
  // dublicate styles with ContentFoto
  contentText: {
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  // dublicate styles with ContentFoto
  contentTextWrapper: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  contentTextDecorate: {
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderColor: " #E8E8E8",
  },
  contentPublicateBtn: {
    marginTop: 32,
  },
  contentPublicateText: {
    height: 51,
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#F6F6F6",
    backgroundColor: "#F6F6F6",
  },
  contentTrashBtn: {
    marginTop: 50,
    alignItems: "center",
  },
});
