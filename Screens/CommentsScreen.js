import { useFonts } from "expo-font";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Comment from "../components/Commment/Comment";
import { comment } from "../components/Commment/styles";
import Container from "../components/Container";
import CreatePost from "../components/CreatePost/CreatePost";
import Header from "../components/Header/Header";
import { createPostsScreen, postsScreen } from "../src/styles";

export default function CommentsScreen() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Header isBackArrBtn={true}>Комментарии</Header>
      <Container>
        <CreatePost />
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
