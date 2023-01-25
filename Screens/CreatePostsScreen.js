import { useFonts } from "expo-font";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Container from "../components/Container";
import CreatePost from "../components/CreatePost/CreatePost";
import Header from "../components/Header/Header";
import {
  postsScreen,
  createPostsScreen,
  contentTextCommon,
} from "../src/styles";

export default function CreatePostsScreen() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Header isBackArrBtn={true}>Создать публикацию</Header>
      <Container>
        <CreatePost
          text={"Загрузите фото"}
          name={"Название..."}
          location={"Местность..."}
        />
        <TouchableOpacity style={createPostsScreen.contentPublicateBtn}>
          <Text
            style={[contentTextCommon, createPostsScreen.contentPublicateText]}
          >
            Опубликовать
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={createPostsScreen.contentTrashBtn}>
          <Image source={require("../assets/img/trash.png")} />
        </TouchableOpacity>
      </Container>
    </>
  );
}
