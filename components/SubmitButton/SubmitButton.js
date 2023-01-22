import { Text, TouchableOpacity } from "react-native";
import { regScreenStyles } from "../../src/styles";
import { submitButton } from "./styles";

export default function SubmitButton(props) {
  return (
    <TouchableOpacity
      style={submitButton.registrationBtn}
      onPress={props.onPress}
    >
      <Text style={submitButton.registrationText}>{props.children}</Text>
    </TouchableOpacity>
  );
}
