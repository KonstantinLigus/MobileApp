import { Image, Text, TouchableOpacity, View } from "react-native";
import { post } from "./styles";

export default function Post({
  postName,
  commentsAmount,
  location,
  isFirstPost,
}) {
  return (
    <View style={{ paddingVertical: isFirstPost ? 0 : 32 }}>
      <View style={post.contentFoto}>
        <TouchableOpacity>
          <Image source={require("../../assets/img/camera.png")} />
        </TouchableOpacity>
      </View>
      <Text style={post.contentTextName}>{postName}</Text>
      <View style={post.infoWrapper}>
        <View style={post.commentWrapper}>
          <Image source={require("../../assets/img/message-circle.png")} />
          <Text style={post.commentsAmount}>{commentsAmount}</Text>
        </View>
        <View style={post.contentLocatsNameWrapper}>
          <Image source={require("../../assets/img/map-pin.png")} />
          <Text style={post.contentLocatsName}>{location}</Text>
        </View>
      </View>
    </View>
  );
}
