import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreatePostsScreen from "./Screens/CreatePostsScreen/CreatePostsScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

import TabBar from "./components/Footer/TabBar";
import Header from "./components/Header/Header";
import { getHeaderTitle } from "./helpers/getheaderTitle";
import { getHeadersButtonChoice } from "./helpers/getHeadersButtonChoice";
import PostsDafaultScreen from "./Screens/NestedPostsScreens/PostsDafaultScreen/PostsDafaultScreen";
import CommentsScreen from "./Screens/NestedPostsScreens/CommentsScreen/CommentsScreen";
import MapScreen from "./Screens/NestedPostsScreens/MapScreen/MapScreen";

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const NestedPostsScreens = createNativeStackNavigator();

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
          const headerTitle = "Создать публикацию";
          const isOutLogBtn = getHeadersButtonChoice.isOutLogBtn(route.name);
          const isBackArrBtn = getHeadersButtonChoice.isBackArrBtn(route.name);
          return (
            <Header
              headerTitle={headerTitle}
              isOutLogBtn={isOutLogBtn}
              isBackArrBtn={isBackArrBtn}
            />
          );
        },
      }}
      tabBar={({ state }) => {
        if (state.index === 2) {
          return null;
        }
        return <TabBar />;
      }}
    >
      <Tab.Screen
        name={"PostsScreen"}
        component={PostsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name={"CreatePostsScreen"} component={CreatePostsScreen} />
      <Tab.Screen
        name={"ProfileScreen"}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  </>
);

const PostsScreen = () => (
  <NestedPostsScreens.Navigator
    screenOptions={{
      header: ({ route }) => {
        const headerTitle = getHeaderTitle(route.name);
        const isOutLogBtn = getHeadersButtonChoice.isOutLogBtn(route.name);
        const isBackArrBtn = getHeadersButtonChoice.isBackArrBtn(route.name);
        return (
          <Header
            headerTitle={headerTitle}
            isOutLogBtn={isOutLogBtn}
            isBackArrBtn={isBackArrBtn}
          />
        );
      },
    }}
  >
    <NestedPostsScreens.Screen
      name={"PostsDafaultScreen"}
      component={PostsDafaultScreen}
    />
    <NestedPostsScreens.Screen
      name={"CommentsScreen"}
      component={CommentsScreen}
    />
    <NestedPostsScreens.Screen name={"MapScreen"} component={MapScreen} />
  </NestedPostsScreens.Navigator>
);

const routing = (isAuth) => {
  if (!isAuth) {
    return <AuthRoute />;
  }
  return <TabRoute />;
};

export default routing;
