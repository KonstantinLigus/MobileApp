import { useState } from "react";
import {
  Image,
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import { regScreenStyles } from "./styles";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import RedirectLink from "../../components/RedirectLink/RedirectLink";

const initFormState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation }) {
  const [isLoginInputFocused, setIsLoginInputFocused] = useState(false);
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false);
  const [isPasswordInputFocused, setIsPasswordInputFocused] = useState(false);
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const [formState, setFormState] = useState(initFormState);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const { width, height } = useWindowDimensions();
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
    navigation.navigate("TabRoute");
  };

  const calculatePaddingBottomForContainer = () => {
    if (isKeyboardOpen || width > height) {
      return 20;
    }
    return 78;
  };

  const onRedirectLinkClick = () => navigation.navigate("Login");

  return (
    <ImageBackground
      source={require("../../assets/img/photo-bg.png")}
      style={regScreenStyles.bgImage}
    >
      <TouchableWithoutFeedback onPress={onContainerTouch}>
        <View
          style={{
            ...regScreenStyles.container,
            paddingBottom: calculatePaddingBottomForContainer(),
          }}
        >
          <TouchableOpacity style={regScreenStyles.userIconWrapper}>
            <Image
              source={require("../../assets/img/add.png")}
              style={regScreenStyles.addUserIcon}
            />
          </TouchableOpacity>
          {/* <ScreenWrapper> */}
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
            <SubmitButton onPress={onRegistrationBtnClick}>
              Зарегистрироваться
            </SubmitButton>
            <RedirectLink onPress={onRedirectLinkClick}>
              Уже есть аккаунт? Войти
            </RedirectLink>
          </View>
          {/* </ScreenWrapper> */}
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}
