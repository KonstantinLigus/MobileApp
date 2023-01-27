import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CommentsScreen from "./Screens/CommentsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

import { Image, TouchableOpacity } from "react-native";

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthRoute = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <AuthStack.Screen
      name="Register"
      component={RegistrationScreen}
      options={{ headerShown: false }}
    />
    <AuthStack.Screen
      name="TabRoute"
      component={TabRoute}
      options={{ headerShown: false }}
    />
  </AuthStack.Navigator>
);

const TabRoute = () => (
  <>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          alignItems: "center",
          height: 83,
          paddingTop: 9,
          borderTopWidth: 0.5,
          borderTopColor: "rgba(0, 0, 0, 0.3)",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={"PostsScreen"}
        component={PostsScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("PostsScreen")}
            >
              <Image source={require("./assets/img/grid.png")} />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name={"CreatePostsScreen"}
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TouchableOpacity
              style={{ marginLeft: 31 }}
              onPress={() => navigation.navigate("CreatePostsScreen")}
            >
              <Image source={require("./assets/img/new.png")} />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name={"ProfileScreen"}
        component={ProfileScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TouchableOpacity
              style={{ marginLeft: 31 }}
              onPress={() => navigation.navigate("ProfileScreen")}
            >
              <Image source={require("./assets/img/user.png")} />
            </TouchableOpacity>
          ),
        })}
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
