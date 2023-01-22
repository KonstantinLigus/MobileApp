import { useFonts } from "expo-font";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Container from "../components/Container";
import ContentFoto from "../components/ContentFoto/ContentFoto";
import Header from "../components/Header/Header";
import { postsScreen, createPostsScreen } from "../src/styles";

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
      {/* <View style={createPostsScreen.contentWrapper}> */}
      <Container>
        <ContentFoto>Загрузите фото</ContentFoto>
        <Text
          style={[
            { ...createPostsScreen.contentText, marginTop: 48 },
            createPostsScreen.contentTextDecorate,
          ]}
        >
          Название...
        </Text>
        <View
          style={[
            createPostsScreen.contentTextWrapper,
            createPostsScreen.contentTextDecorate,
          ]}
        >
          <Image source={require("../assets/img/map-pin.png")} />
          <Text style={{ ...createPostsScreen.contentText, marginLeft: 4 }}>
            Местность...
          </Text>
        </View>
        <TouchableOpacity style={createPostsScreen.contentPublicateBtn}>
          <Text
            style={[
              createPostsScreen.contentText,
              createPostsScreen.contentPublicateText,
            ]}
          >
            Опубликовать
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={createPostsScreen.contentTrashBtn}>
          <Image source={require("../assets/img/trash.png")} />
        </TouchableOpacity>
      </Container>
      {/* </View> */}
    </>
  );
}
