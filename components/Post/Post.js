import { useNavigation } from "@react-navigation/native";
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
  const navigation = useNavigation();
  return (
    <View>
      <Image source={pathOfContentFoto} style={post.contentFoto} />
      <Text style={post.contentTextName}>{postName}</Text>
      <View style={post.infoWrapper}>
        <TouchableOpacity
          style={post.commentWrapper}
          onPress={() => navigation.navigate("CommentsScreen")}
        >
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
        </TouchableOpacity>
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
        <TouchableOpacity
          style={post.contentLocatsNameWrapper}
          onPress={() => navigation.navigate("MapScreen")}
        >
          <Image source={require("../../assets/img/map-pin.png")} />
          <Text style={post.contentLocatsName}>{location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
