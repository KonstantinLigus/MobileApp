import { useFonts } from "expo-font";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Container from "../../components/Container";
import CreatePost from "../../components/CreatePost/CreatePost";
import Header from "../../components/Header/Header";
import { contentTextCommon } from "../../src/commonStyles";
import { createPostsScreen } from "./styles";

export default function CreatePostsScreen() {
  return (
    <Container>
      <CreatePost name={"Название..."} location={"Местность..."} />
      <TouchableOpacity style={createPostsScreen.contentPublicateBtn}>
        <Text
          style={[contentTextCommon, createPostsScreen.contentPublicateText]}
        >
          Опубликовать
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={createPostsScreen.contentTrashBtn}>
        <Image source={require("../../assets/img/trash.png")} />
      </TouchableOpacity>
    </Container>
  );
}
