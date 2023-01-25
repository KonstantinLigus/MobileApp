import { View } from "react-native";

export default function Container(props) {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: props.isPaddingTopNone ? 0 : 32,
        paddingHorizontal: 16,
      }}
    >
      {props.children}
    </View>
  );
}
