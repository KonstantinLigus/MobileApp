import { Image, TouchableOpacity, View } from "react-native";
import { footer } from "./styles";

export default function Footer(props) {
  return (
    <View style={footer.btnsWrapper}>
      <TouchableOpacity>
        <Image source={require("../../assets/img/grid.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 31 }}>
        <Image source={require("../../assets/img/new.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 31 }}>
        <Image source={require("../../assets/img/user.png")} />
      </TouchableOpacity>
    </View>
  );
}
