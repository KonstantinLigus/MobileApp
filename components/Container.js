import { View } from "react-native";

export default function Container({ isPaddingTopNone, children }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: isPaddingTopNone ? 0 : 32,
        paddingHorizontal: 16,
      }}
    >
      {children}
    </View>
  );
}
