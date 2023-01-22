import { Image, Text, TouchableOpacity, View } from "react-native";
import { header } from "./styles";

export default function Header(props) {
  return (
    <View style={header.titleWrapper}>
      <Text style={header.title}>{props.children}</Text>
      {props.isOutLogBtn && (
        <TouchableOpacity style={header.outLogBtn}>
          <Image source={require("../../assets/img/log-out.png")} />
        </TouchableOpacity>
      )}
      {props.isBackArrBtn && (
        <TouchableOpacity style={header.backArrBtn}>
          <Image source={require("../../assets/img/arrow-left.png")} />
        </TouchableOpacity>
      )}
    </View>
  );
}
