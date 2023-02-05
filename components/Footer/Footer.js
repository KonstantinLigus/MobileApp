import { Image, TouchableOpacity, View } from "react-native";
import { tabBar } from "./styles";

export default function TabBar({ onGridPress, onNewPress, onUserPress }) {
  return (
    <View style={tabBar.btnsWrapper}>
      <TouchableOpacity onPress={onGridPress}>
        <Image source={require("../../assets/img/grid.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 31 }} onPress={onNewPress}>
        <Image source={require("../../assets/img/new.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 31 }} onPress={onUserPress}>
        <Image source={require("../../assets/img/user.png")} />
      </TouchableOpacity>
    </View>
  );
}
