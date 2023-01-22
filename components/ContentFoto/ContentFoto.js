import { Image, Text, View } from "react-native";
import { contentFoto } from "./styles";

export default function ContentFoto(props) {
  return (
    <>
      <View style={contentFoto.contentFoto}>
        <Image source={require("../../assets/img/camera.png")} />
      </View>
      {props.children && (
        <Text style={contentFoto.contentText}>{props.children}</Text>
      )}
    </>
  );
}
