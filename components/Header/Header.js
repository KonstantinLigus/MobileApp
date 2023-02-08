import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { header } from "./styles";

export default function Header({ headerTitle, isOutLogBtn, isBackArrBtn }) {
  const navigation = useNavigation();
  return (
    <View style={header.titleWrapper}>
      <Text style={header.title}>{headerTitle}</Text>
      {isOutLogBtn && (
        <TouchableOpacity style={header.outLogBtn}>
          <Image source={require("../../assets/img/log-out.png")} />
        </TouchableOpacity>
      )}
      {isBackArrBtn && (
        <TouchableOpacity
          style={header.backArrBtn}
          onPress={() => navigation.goBack()}
        >
          <Image source={require("../../assets/img/arrow-left.png")} />
        </TouchableOpacity>
      )}
    </View>
  );
}
