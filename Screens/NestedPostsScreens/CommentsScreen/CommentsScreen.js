import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import Comment from "../../../components/Commment/Comment";
import Container from "../../../components/Container";
import { commentsScreen } from "./style";

export default function CommentsScreen() {
  return (
    <>
      <Container>
        <ImageBackground style={commentsScreen.contentFoto}>
          <TouchableOpacity>
            <Image source={require("../../../assets/img/camera.png")} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={{ marginTop: 32 }}>
          <Comment
            commentText={
              "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"
            }
            commentDate={"656565"}
            userIconOrientationLeft={false}
          />
        </View>
      </Container>
    </>
  );
}
