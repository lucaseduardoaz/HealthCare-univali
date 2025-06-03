import React from "react";
import { View } from "react-native";
import Login from "../login";
import { useTranslation } from 'react-i18next';

export default function Main() {
  return (
    <View>
      <Login />
    </View>
  );
}
