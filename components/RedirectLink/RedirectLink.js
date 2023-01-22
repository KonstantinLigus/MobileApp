import { Text, TouchableOpacity } from "react-native";
import { redirectLink } from "./styles";

export default function RedirectLink(props) {
  return (
    <TouchableOpacity style={redirectLink.redirectLink}>
      <Text style={redirectLink.redirectLinkText}>{props.children}</Text>
    </TouchableOpacity>
  );
}
