import { useFonts } from "expo-font";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import RedirectLink from "../components/RedirectLink/RedirectLink";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import { logInStyles } from "../src/styles";

const initFormState = {
  login: "",
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false);
  const [isPasswordInputFocused, setIsPasswordInputFocused] = useState(false);
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const [formState, setFormState] = useState(initFormState);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const { width, height } = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const onContainerTouch = () => {
    Keyboard.dismiss();
    setIsKeyboardOpen(false);
  };

  const onFocusOfEmailInput = () => {
    setIsEmailInputFocused(true);
    setIsKeyboardOpen(true);
  };

  const onChangeTextOfEmailInput = (value) =>
    setFormState((prevState) => ({ ...prevState, email: value }));

  const onFocusOfPasswordInput = () => {
    setIsPasswordInputFocused(true);
    setIsKeyboardOpen(true);
  };

  const onChangeTextOfPasswordInput = (value) =>
    setFormState((prevState) => ({
      ...prevState,
      password: value,
    }));

  const onLogInBtnClick = () => {
    console.log(formState);
    setFormState(initFormState);
    Keyboard.dismiss();
    setIsKeyboardOpen(false);
    navigation.navigate("TabRoute");
  };

  const calculatePaddingBottomForContainer = () => {
    if (isKeyboardOpen || width > height) {
      return 20;
    }
    return 144;
  };

  const onRedirectLinkClick = () => navigation.navigate("Register");

  return (
    <ImageBackground
      source={require("../assets/img/photo-bg.png")}
      style={logInStyles.bgImage}
    >
      <TouchableWithoutFeedback onPress={onContainerTouch}>
        <View
          style={{
            ...logInStyles.container,
            paddingBottom: calculatePaddingBottomForContainer(),
          }}
        >
          <View style={logInStyles.userIconWrapper}>
            <TouchableOpacity style={logInStyles.addUserIconBtn}>
              <Image
                source={require("../assets/img/add.png")}
                style={logInStyles.addUserIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={logInStyles.form}>
            <Text style={logInStyles.formTitle}>Войти</Text>
            <TextInput
              style={{
                ...logInStyles.textInput,
                borderColor: isEmailInputFocused ? "#FF6C00" : "#E8E8E8",
              }}
              placeholder="Адрес электронной почты"
              placeholderTextColor="#BDBDBD"
              onFocus={onFocusOfEmailInput}
              onBlur={() => setIsEmailInputFocused(false)}
              onChangeText={onChangeTextOfEmailInput}
              value={formState.email}
            />
            <View style={{ marginBottom: 43 }}>
              <TextInput
                style={{
                  ...logInStyles.textInput,
                  borderColor: isPasswordInputFocused ? "#FF6C00" : "#E8E8E8",
                  marginBottom: 0,
                }}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                onFocus={onFocusOfPasswordInput}
                secureTextEntry={isPasswordHide}
                onChangeText={onChangeTextOfPasswordInput}
                onBlur={() => setIsPasswordInputFocused(false)}
                value={formState.password}
              />
              <TouchableOpacity
                style={logInStyles.showPasswordBtn}
                onPress={() => setIsPasswordHide(!isPasswordHide)}
              >
                <Text style={logInStyles.showPasswordText}>
                  {isPasswordHide ? "Показать" : "Скрыть"}
                </Text>
              </TouchableOpacity>
            </View>
            <SubmitButton onPress={onLogInBtnClick}>Войти</SubmitButton>
            <RedirectLink onPress={onRedirectLinkClick}>
              Нет аккаунта? Зарегистрироваться
            </RedirectLink>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}
