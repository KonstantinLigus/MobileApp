import { useState } from "react";
import {
  Image,
  ImageBackground,
  Keyboard,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import { screenWrapper } from "./styles";

const initFormState = {
  login: "",
  email: "",
  password: "",
};

export default function ScreenWrapper(props) {
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
  };

  const calculatePaddingBottomForContainer = (isNoPadding) => {
    if (isKeyboardOpen || width > height) {
      return 20;
    }
    if (isNoPadding) {
      return 0;
    }
    return 78;
  };

  return (
    <ImageBackground
      source={require("../../assets/img/photo-bg.png")}
      style={screenWrapper.bgImage}
    >
      <TouchableWithoutFeedback onPress={onContainerTouch}>
        <View
          style={{
            ...screenWrapper.container,
            flex: 1,
            paddingBottom: calculatePaddingBottomForContainer(true),
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
          {props.children}
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}
