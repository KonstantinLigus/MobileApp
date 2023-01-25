import { Image, Text, View } from "react-native";
import { comment } from "./styles";

export default function Comment(props) {
  return (
    <View style={comment.commentWrapper}>
      {props.userIconOrientationLeft && <Image style={comment.userIcon} />}
      <View style={comment.commentTextWrapper}>
        <Text style={comment.commentText}>{props.commentText}</Text>
        <Text style={comment.commentDate}>{props.commentDate}</Text>
      </View>
      {!props.userIconOrientationLeft && (
        <Image
          style={{ ...comment.userIcon, marginRight: 0, marginLeft: 16 }}
        />
      )}
    </View>
  );
}
