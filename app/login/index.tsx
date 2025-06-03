import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";
import { theme } from "../styles/theme";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    console.log("chamando botão");
    router.replace("/home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.logo}>
            SMART CARE<Text style={styles.plus}>+</Text>
          </Text>
          <Text style={styles.subtitle}>{t("login.title")}</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder={t("login.cpfPlaceholder")}
            value={cpf}
            onChangeText={setCpf}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder={t("login.passwordPlaceholder")}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
          <Text style={styles.forgotPassword}>{t("login.forgotPassword")}</Text>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>{t("login.button")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    width: theme.dimensions.screenWidth,
    height: theme.dimensions.screenHeight,
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: 5,
  },
  plus: {
    color: theme.colors.primary,
    fontSize: 20,
  },
  subtitle: {
    fontSize: 12,
    color: theme.colors.primary,
    marginBottom: 15,
  },
  form: {
    padding: 20,
    backgroundColor: theme.colors.background,
    alignItems: "center",
  },
  input: {
    backgroundColor: theme.colors.inputBackground,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: "100%",
  },
  forgotPassword: {
    color: theme.colors.primary,
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  loginButton: {
    width: 121,
    height: 35,
    backgroundColor: "rgba(70, 92, 168, 1)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
