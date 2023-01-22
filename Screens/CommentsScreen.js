import { useFonts } from "expo-font";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Container from "../components/Container";
import ContentFoto from "../components/ContentFoto/ContentFoto";
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
        <ContentFoto />
      </Container>
    </>
  );
}
