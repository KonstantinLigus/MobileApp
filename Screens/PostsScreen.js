import { useFonts } from "expo-font";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header/Header";
import UserIcon from "../components/UserIcon/UserIcon";
import { postsScreen } from "../src/styles";
import Container from "../components/Container";
import Post from "../components/Post/Post";
import Footer from "../components/Footer/Footer";

export default function PostsScreen() {
  return (
    <>
      <Header isOutLogBtn={true}>Публикации</Header>
      <Container>
        <UserIcon />
        <SafeAreaView
          style={{
            paddingTop: 32,
          }}
        >
          <ScrollView>
            <Post
              isFirstPost={true}
              postName={"Name"}
              commentsAmount={2}
              location={"Location..."}
            />
            <Post
              postName={"Name"}
              commentsAmount={2}
              location={"Location..."}
            />
            <Post
              postName={"Name"}
              commentsAmount={2}
              location={"Location..."}
            />
          </ScrollView>
        </SafeAreaView>
      </Container>
    </>
  );
}
