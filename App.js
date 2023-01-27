import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import { useState } from "react";
import routing from "./routes";

export default function App() {
  const isAuth = false;
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer
      theme={{ colors: { card: "#FFFFFF", border: "#FFFFFF" } }}
    >
      {routing(isAuth)}
    </NavigationContainer>
  );
}
