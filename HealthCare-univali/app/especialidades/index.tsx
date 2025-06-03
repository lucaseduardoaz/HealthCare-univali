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

export default function Especialidades() {
  const navigation = useNavigation();

  const specialties = [
    "CLÍNICO GERAL",
    "GERIATRIA",
    "GINECOLOGIA E OBSTETRÍCIA",
    "NUTRIÇÃO CLÍNICA",
    "PEDIATRIA",
  ];

  const handleMedicos = () => {
    router.replace("/medicos");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>
          SMART CARE<Text style={styles.plus}>+</Text>
        </Text>
        <Text style={styles.subtitle}>ESPECIALIDADES</Text>
      </View>

      <ScrollView style={styles.specialtiesContainer}>
        {specialties.map((specialty, index) => (
          <TouchableOpacity
            key={index}
            style={styles.specialtyItem}
            onPress={handleMedicos}
          >
            <Text style={styles.specialtyText}>{specialty}</Text>
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
  specialtiesContainer: {
    padding: 20,
    flex: 1,
  },
  specialtyItem: {
    backgroundColor: "#F0F0F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  specialtyText: {
    color: "#666666",
    fontSize: 16,
    textAlign: "center",
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
