import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import Container from "../../components/Container";
import TabBar from "../../components/Footer/Footer";
import Post from "../../components/Post/Post";
import ScreenWrapper from "../../components/ScreenWrapper/ScreenWrapper";
import { screenWrapper } from "../../components/ScreenWrapper/styles";
import UserName from "../../components/UserName/UserName";
import { users } from "../../src/users";

const posts = users[0].posts;

export default function ProfileScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/img/photo-bg.png")}
      style={screenWrapper.bgImage}
    >
      <View
        style={{
          ...screenWrapper.container,
          flex: 1,
          paddingBottom: 0,
        }}
      >
        <View style={screenWrapper.userIconWrapper}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/img/add.png")}
              style={screenWrapper.addUserIcon}
            />
          </TouchableOpacity>
        </View>
        <Container isPaddingTopNone={true}>
          <SafeAreaView>
            <FlatList
              ListHeaderComponent={<UserName>{users[0].user}</UserName>}
              ListHeaderComponentStyle={{ marginBottom: 32 }}
              ItemSeparatorComponent={<View style={{ height: 32 }} />}
              data={posts}
              renderItem={({
                item: { name, comments, location, likes, contentFoto },
              }) => {
                return (
                  <Post
                    postName={name}
                    commentsAmount={comments}
                    location={location}
                    likes={likes}
                    pathOfContentFoto={contentFoto}
                  />
                );
              }}
              keyExtractor={(item) => item.id}
              ListFooterComponent={
                <TabBar
                  onGridPress={() => navigation.navigate("PostsScreen")}
                  onNewPress={() => navigation.navigate("CreatePostsScreen")}
                  onUserPress={() => navigation.navigate("ProfileScreen")}
                />
              }
              ListFooterComponentStyle={{ marginTop: 45 }}
            />
          </SafeAreaView>
        </Container>
      </View>
    </ImageBackground>
  );
}
