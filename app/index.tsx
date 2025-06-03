import { Text, View } from "react-native";
import Main from "./Main";
import Navbar from "./components/Navbar";
import './i18n';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 1)",
      }}
    >
      <Main />
    </View>
  );
}