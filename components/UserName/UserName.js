import { Text } from "react-native";
import { contentTextCommon } from "../../src/styles";

export default function UserName(props) {
  return (
    <Text
      style={{
        ...contentTextCommon,
        fontWeight: "500",
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
        letterSpacing: 0.01,
        color: "#212121",
      }}
    >
      {props.children}
    </Text>
  );
}
