import { Text, View } from "react-native";
import { userIcon } from "./styles";

export default function UserIcon({ userName, userEmail }) {
  return (
    <View style={userIcon.userWrapper}>
      <View style={userIcon.userIcon}></View>
      <View style={userIcon.userInfo}>
        <Text style={userIcon.userName}>{userName}</Text>
        <Text>{userEmail}</Text>
      </View>
    </View>
  );
}
