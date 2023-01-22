import { useFonts } from "expo-font";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header/Header";
import UserIcon from "../components/UserIcon/UserIcon";
import { postsScreen } from "../src/styles";
import Container from "../components/Container";

export default function PostsScreen() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    // <View style={postsScreen.container}>
    <>
      <Header isOutLogBtn={true}>Публикации</Header>
      <Container>
        <UserIcon />
        <View style={postsScreen.setingsWrapper}>
          <TouchableOpacity>
            <Image source={require("../assets/img/grid.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 31 }}>
            <Image source={require("../assets/img/new.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 31 }}>
            <Image source={require("../assets/img/user.png")} />
          </TouchableOpacity>
        </View>
      </Container>
    </>
    // </View>
  );
}
