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
import { useFonts } from "expo-font";
import { regScreenStyles } from "../src/styles";

const initFormState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [isLoginInputFocused, setIsLoginInputFocused] = useState(false);
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

  const onChangeTextOfLoginInput = (value) =>
    setFormState((prevState) => ({ ...prevState, login: value }));

  const onFocusLoginInput = () => {
    setIsLoginInputFocused(true);
    setIsKeyboardOpen(true);
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

  const onRegistrationBtnClick = () => {
    console.log(formState);
    setFormState(initFormState);
    Keyboard.dismiss();
    setIsKeyboardOpen(false);
  };

  const calculatePaddingBottomForContainer = () => {
    if (isKeyboardOpen || width > height) {
      return 20;
    }
    return 78;
  };

  return (
    <ImageBackground
      source={require("../assets/img/photo-bg.png")}
      style={regScreenStyles.bgImage}
    >
      <TouchableWithoutFeedback onPress={onContainerTouch}>
        <View
          style={{
            ...regScreenStyles.container,
            paddingBottom: calculatePaddingBottomForContainer(),
          }}
        >
          <View style={regScreenStyles.userIconWrapper}>
            <TouchableOpacity style={regScreenStyles.addUserIconBtn}>
              <Image
                source={require("../assets/img/add.png")}
                style={regScreenStyles.addUserIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={regScreenStyles.form}>
            <Text style={regScreenStyles.formTitle}>Регистрация</Text>
            <TextInput
              style={{
                ...regScreenStyles.textInput,
                borderColor: isLoginInputFocused ? "#FF6C00" : "#E8E8E8",
              }}
              placeholder="Логин"
              placeholderTextColor="#BDBDBD"
              onFocus={onFocusLoginInput}
              onBlur={() => setIsLoginInputFocused(false)}
              onChangeText={onChangeTextOfLoginInput}
              value={formState.login}
            />
            <TextInput
              style={{
                ...regScreenStyles.textInput,
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
                  ...regScreenStyles.textInput,
                  borderColor: isPasswordInputFocused ? "#FF6C00" : "#E8E8E8",
                  marginBottom: 0,
                }}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                onFocus={onFocusOfPasswordInput}
                onBlur={() => setIsPasswordInputFocused(false)}
                secureTextEntry={isPasswordHide}
                onChangeText={onChangeTextOfPasswordInput}
                value={formState.password}
              />
              <TouchableOpacity
                style={regScreenStyles.showPasswordBtn}
                onPress={() => setIsPasswordHide(!isPasswordHide)}
              >
                <Text style={regScreenStyles.showPasswordText}>
                  {isPasswordHide ? "Показать" : "Скрыть"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={regScreenStyles.registrationBtn}
              onPress={onRegistrationBtnClick}
            >
              <Text style={regScreenStyles.registrationText}>
                Зарегистрироваться
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={regScreenStyles.redirectLink}>
              <Text style={regScreenStyles.redirectLinkText}>
                Уже есть аккаунт? Войти
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}
