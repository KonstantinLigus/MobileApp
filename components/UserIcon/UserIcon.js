import { Text, View } from "react-native";
import { userIcon } from "./styles";

export default function UserIcon() {
  return (
    <View style={userIcon.userWrapper}>
      <View style={userIcon.userIcon}></View>
      <View style={userIcon.userInfo}>
        <Text style={userIcon.userName}>User name</Text>
        <Text>User email</Text>
      </View>
    </View>
  );
}
