import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/Navbar";

export default function Profile() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>
          SMART CARE<Text style={styles.plus}>+</Text>
        </Text>
        <Text style={styles.subtitle}>EDITAR DADOS PESSOAIS</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Manuela Lange"
          placeholderTextColor="#666666"
        />
        <TextInput
          style={styles.input}
          placeholder="manuelapereira@gmail.com"
          placeholderTextColor="#666666"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="12374145678"
          placeholderTextColor="#666666"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="10/02/1998"
          placeholderTextColor="#666666"
        />
        <TextInput
          style={styles.input}
          placeholder="Feminino"
          placeholderTextColor="#666666"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>EDITAR</Text>
        </TouchableOpacity>
      </View>

      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: "center",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4A67E3",
    marginBottom: 5,
  },
  plus: {
    color: "#4A67E3",
    fontSize: 20,
  },
  subtitle: {
    fontSize: 12,
    color: "#4A67E3",
    marginBottom: 15,
  },
  form: {
    padding: 20,
    flex: 1,
  },
  input: {
    backgroundColor: "#F0F0F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    color: "#666666",
  },
  buttonContainer: {
    padding: 20,
  },
  editButton: {
    backgroundColor: "#4A67E3",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  editButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F5",
  },
  navItem: {
    alignItems: "center",
    padding: 10,
  },
  navIcon: {
    fontSize: 24,
  },
});
