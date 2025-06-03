import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Navbar() {
  const handleHome = () => {
    router.replace("/home");
  };
  const handleAgenda = () => {
    router.replace("/agenda");
  };
  const handleProfile = () => {
    router.replace("/profile");
  };
  const handleNotification = () => {
    router.replace("/notification");
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem} onPress={handleHome}>
        <Text style={styles.navIcon}>🏠</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={handleAgenda}>
        <Text style={styles.navIcon}>📅</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={handleProfile}>
        <Text style={styles.navIcon}>👤</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={handleNotification}>
        <Text style={styles.navIcon}>🔔</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
