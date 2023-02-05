import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createPost } from "./styles";

export default function CreatePost(props) {
  return (
    <View>
      <ImageBackground style={createPost.contentFoto}>
        <TouchableOpacity>
          <Image source={require("../../assets/img/camera.png")} />
        </TouchableOpacity>
      </ImageBackground>
      {props.text && (
        <Text style={createPost.contentTextName}>{props.text}</Text>
      )}
      {props.name && (
        <Text style={createPost.contentNamesFoto}>{props.name}</Text>
      )}
      {props.location && (
        <View style={createPost.contentLocatsNameWrapper}>
          <Image source={require("../../assets/img/map-pin.png")} />
          <Text style={createPost.contentLocatsName}>Местность...</Text>
        </View>
      )}
    </View>
  );
}
