import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createPost } from "./styles";

export default function CreatePost({ name, location }) {
  return (
    <View>
      <ImageBackground style={createPost.contentFoto}>
        <TouchableOpacity>
          <Image source={require("../../assets/img/camera.png")} />
        </TouchableOpacity>
      </ImageBackground>
      <Text style={createPost.contentTextName}>Загрузите фото</Text>
      {name && <Text style={createPost.contentNamesFoto}>{name}</Text>}
      {location && (
        <View style={createPost.contentLocatsNameWrapper}>
          <Image source={require("../../assets/img/map-pin.png")} />
          <Text style={createPost.contentLocatsName}>{location}</Text>
        </View>
      )}
    </View>
  );
}
