import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  const handleEspecialidades = () => {
    router.replace("/especialidades");
  };
  const handleProfile = () => {
    router.replace("/profile");
  };
  const handleNotification = () => {
    router.replace("/notification");
  };
  const handleSingOut = () => {
    router.replace("/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>
          SMART CARE<Text style={styles.plus}>+</Text>
        </Text>
        <Text style={styles.subtitle}>INICIO</Text>
        <Text style={styles.welcome}>BEM VINDO!</Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={handleEspecialidades}
        >
          <Text style={styles.menuText}>AGENDAR UMA CONSULTA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleProfile}>
          <Text style={styles.menuText}>MINHA CONTA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleNotification}>
          <Text style={styles.menuText}>NOTIFICAÇÕES</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleSingOut}>
          <Text style={styles.logoutText}>SAIR</Text>
        </TouchableOpacity>
      </View>
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
  welcome: {
    fontSize: 24,
    color: "#4A67E3",
    marginTop: 20,
  },
  menuContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
    flex: 1,
  },
  menuItem: {
    backgroundColor: "#F0F0F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  menuText: {
    color: "#666666",
    fontSize: 16,
    textAlign: "center",
  },
  logoutContainer: {
    padding: 20,
  },
  logoutButton: {
    backgroundColor: "#4A67E3",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  logoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
