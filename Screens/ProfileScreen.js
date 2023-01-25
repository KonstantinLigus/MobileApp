import { useFonts } from "expo-font";
import { Text } from "react-native";
import Container from "../components/Container";
import Footer from "../components/Footer/Footer";
import Post from "../components/Post/Post";
import ScreenWrapper from "../components/ScreenWrapper/ScreenWrapper";
import UserName from "../components/UserName/UserName";
import { contentTextCommon } from "../src/styles";

export default function ProfileScreen() {
  return (
    <>
      <ScreenWrapper>
        <Container isPaddingTopNone={true}>
          <UserName>Natali Romanova</UserName>
          <Post postName={"Name"} commentsAmount={2} location={"Location..."} />
        </Container>
      </ScreenWrapper>
      <Footer />
    </>
  );
}
