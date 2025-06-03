import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/Navbar";

export default function Notification() {
  const navigation = useNavigation();

  const notifications = [
    {
      text: "CONSULTA DIA 24/04/24 - 14:00h",
    },
  ];

  const handleConsulta = () => {
    router.replace("/consulta");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>
          SMART CARE<Text style={styles.plus}>+</Text>
        </Text>
        <Text style={styles.subtitle}>NOTIFICAÇÕES</Text>
      </View>

      <ScrollView style={styles.notificationsContainer}>
        {notifications.map((notification, index) => (
          <TouchableOpacity
            key={index}
            style={styles.notificationItem}
            onPress={handleConsulta}
          >
            <Text style={styles.notificationText}>{notification.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

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
  notificationsContainer: {
    padding: 20,
    flex: 1,
  },
  notificationItem: {
    backgroundColor: "#F0F0F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  notificationText: {
    color: "#666666",
    fontSize: 14,
    textAlign: "left",
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
