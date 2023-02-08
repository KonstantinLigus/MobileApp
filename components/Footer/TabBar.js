import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity, View } from "react-native";
import { tabBar } from "./styles";

export default function TabBar({ onGridPress, onNewPress, onUserPress }) {
  const navigation = useNavigation();
  return (
    <View style={tabBar.btnsWrapper}>
      <TouchableOpacity onPress={() => navigation.navigate("PostsScreen")}>
        <Image source={require("../../assets/img/grid.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginLeft: 31 }}
        onPress={() => navigation.navigate("CreatePostsScreen")}
      >
        <Image source={require("../../assets/img/new.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginLeft: 31 }}
        onPress={() => navigation.navigate("ProfileScreen")}
      >
        <Image source={require("../../assets/img/user.png")} />
      </TouchableOpacity>
    </View>
  );
}
