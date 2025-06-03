import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../styles/theme";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    dataNascimento: "",
    genero: "",
    cpf: "",
    rg: "",
    senha: "",
  });
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.logo}>
            SMART CARE<Text style={styles.plus}>+</Text>
          </Text>
          <Text style={styles.subtitle}>CADASTRO</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="NOME COMPLETO"
            value={formData.nome}
            onChangeText={(text) => setFormData({ ...formData, nome: text })}
          />
          {/* Add other inputs similarly */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CONFIRMAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  },
  input: {
    backgroundColor: theme.colors.inputBackground,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
