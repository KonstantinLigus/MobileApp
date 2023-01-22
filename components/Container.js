import { View } from "react-native";

export default function Container(props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: 32,
        paddingHorizontal: 16,
      }}
    >
      {props.children}
    </View>
  );
}
