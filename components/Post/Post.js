import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { post } from "./styles";

export default function Post({
  postName,
  commentsAmount,
  location,
  likes,
  pathOfContentFoto,
}) {
  return (
    <View>
      <ImageBackground source={pathOfContentFoto} style={post.contentFoto} />
      <Text style={post.contentTextName}>{postName}</Text>
      <View style={post.infoWrapper}>
        <View style={post.commentWrapper}>
          <Image source={require("../../assets/img/message-circle.png")} />
          <Text
            style={
              commentsAmount === 0
                ? post.commentsAmount
                : { ...post.commentsAmount, color: "#212121" }
            }
          >
            {commentsAmount}
          </Text>
        </View>
        <View style={post.likesWrapper}>
          <Image source={require("../../assets/img/thumbs-up.png")} />
          <Text
            style={
              likes === 0
                ? post.commentsAmount
                : { ...post.commentsAmount, color: "#212121" }
            }
          >
            {likes}
          </Text>
        </View>
        <View style={post.contentLocatsNameWrapper}>
          <Image source={require("../../assets/img/map-pin.png")} />
          <Text style={post.contentLocatsName}>{location}</Text>
        </View>
      </View>
    </View>
  );
}
