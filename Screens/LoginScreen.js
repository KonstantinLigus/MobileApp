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

const initFormState = {
  login: "",
  email: "",
  password: "",
};

export default function LoginScreen() {
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
  };

  const calculatePaddingBottomForContainer = () => {
    if (isKeyboardOpen || width > height) {
      return 20;
    }
    return 144;
  };

  return (
    <ImageBackground
      source={require("../assets/img/photo-bg.png")}
      style={styles.bgImage}
    >
      <TouchableWithoutFeedback onPress={onContainerTouch}>
        <View
          style={{
            ...styles.container,
            paddingBottom: calculatePaddingBottomForContainer(),
          }}
        >
          <View style={styles.userIconWrapper}>
            <TouchableOpacity style={styles.addUserIconBtn}>
              <Image
                source={require("../assets/img/add.png")}
                style={styles.addUserIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            <Text style={styles.formTitle}>Войти</Text>

            <TextInput
              style={{
                ...styles.textInput,
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
                  ...styles.textInput,
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
                style={styles.showPasswordBtn}
                onPress={() => setIsPasswordHide(!isPasswordHide)}
              >
                <Text style={styles.showPasswordText}>
                  {isPasswordHide ? "Показать" : "Скрыть"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.logInBtn}
              onPress={() => onLogInBtnClick()}
            >
              <Text style={styles.logInText}>Войти</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.redirectLink}>
              <Text style={styles.redirectLinkText}>
                Нет аккаунта? Зарегистрироваться
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 92,
    paddingBottom: 144,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  userIconWrapper: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addUserIconBtn: {
    position: "absolute",
    right: -12.5,
    bottom: 14,
  },
  addUserIcon: {
    width: 25,
    height: 25,
  },
  form: {
    width: "100%",
    paddingHorizontal: 16,
  },
  formTitle: {
    marginBottom: 33,
    fontFamily: "Roboto-Regular",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.16,
    color: "#212121",
  },
  textInput: {
    height: 50,
    marginBottom: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  showPasswordBtn: {
    position: "absolute",
    right: 32,
    top: 14,
  },
  showPasswordText: {
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
    fontWeight: "400",
  },
  logInBtn: {
    height: 51,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  logInText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
  },
  redirectLink: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    color: "#1B4371",
  },
  redirectLinkText: {
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
  },
});
