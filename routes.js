import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CommentsScreen from "./Screens/CommentsScreen/CommentsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen/CreatePostsScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import PostsScreen from "./Screens/PostsScreen/PostsScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

import TabBar from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { getHeaderTitle } from "./helpers/getheaderTitle";
import { getHeadersButtonChoice } from "./helpers/getHeadersButtonChoice";

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthRoute = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegistrationScreen} />
    <AuthStack.Screen name="TabRoute" component={TabRoute} />
  </AuthStack.Navigator>
);

const TabRoute = () => (
  <>
    <Tab.Navigator
      screenOptions={{
        header: ({ route }) => {
          const title = getHeaderTitle(route.name);
          const isOutLogBtn = getHeadersButtonChoice.isOutLogBtn(route.name);
          const isBackArrBtn = getHeadersButtonChoice.isBackArrBtn(route.name);
          return (
            <Header
              headerTitle={title}
              isOutLogBtn={isOutLogBtn}
              isBackArrBtn={isBackArrBtn}
            />
          );
        },
      }}
      tabBar={({ navigation, state }) => {
        if (state.index === 2) {
          return null;
        }
        return (
          <TabBar
            onGridPress={() => navigation.navigate("PostsScreen")}
            onNewPress={() => navigation.navigate("CreatePostsScreen")}
            onUserPress={() => navigation.navigate("ProfileScreen")}
          />
        );
      }}
    >
      <Tab.Screen name={"PostsScreen"} component={PostsScreen} />
      <Tab.Screen name={"CreatePostsScreen"} component={CreatePostsScreen} />
      <Tab.Screen
        name={"ProfileScreen"}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  </>
);

const routing = (isAuth) => {
  if (!isAuth) {
    return <AuthRoute />;
  }
  return <TabRoute />;
};

export default routing;
