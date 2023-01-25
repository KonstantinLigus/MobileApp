import { Image, Text, TouchableOpacity, View } from "react-native";
import { post } from "./styles";

export default function Post(props) {
  return (
    <View style={post.postContainer}>
      <View style={post.contentFoto}>
        <TouchableOpacity>
          <Image source={require("../../assets/img/camera.png")} />
        </TouchableOpacity>
      </View>
      <Text style={post.contentTextName}>{props.postName}</Text>
      <View style={post.infoWrapper}>
        <View style={post.commentWrapper}>
          <Image source={require("../../assets/img/message-circle.png")} />
          <Text style={post.commentsAmount}>{props.commentsAmount}</Text>
        </View>
        <View style={post.contentLocatsNameWrapper}>
          <Image source={require("../../assets/img/map-pin.png")} />
          <Text style={post.contentLocatsName}>{props.location}</Text>
        </View>
      </View>
    </View>
  );
}
