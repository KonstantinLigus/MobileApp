import { Text, TouchableOpacity } from "react-native";
import { redirectLink } from "./styles";

export default function RedirectLink({ children, onPress }) {
  return (
    <TouchableOpacity style={redirectLink.redirectLink} onPress={onPress}>
      <Text style={redirectLink.redirectLinkText}>{children}</Text>
    </TouchableOpacity>
  );
}
