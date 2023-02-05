import { FlatList, SafeAreaView, View } from "react-native";
import UserIcon from "../../components/UserIcon/UserIcon";
import Container from "../../components/Container";
import Post from "../../components/Post/Post";
import { users } from "../../src/users";

const posts = users[0].posts;

export default function PostsScreen() {
  return (
    <Container>
      <UserIcon userName={users[0].user} userEmail={users[0].email} />
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: 32,
        }}
      >
        <FlatList
          ItemSeparatorComponent={<View style={{ height: 32 }} />}
          data={posts}
          renderItem={({
            item: { name, comments, location, likes, contentFoto },
          }) => (
            <Post
              postName={name}
              commentsAmount={comments}
              location={location}
              likes={likes}
              pathOfContentFoto={contentFoto}
            />
          )}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View style={{ height: 45 }} />}
        />
      </SafeAreaView>
    </Container>
  );
}
