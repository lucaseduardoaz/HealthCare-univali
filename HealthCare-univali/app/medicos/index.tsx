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

export default function Medicos() {
  const navigation = useNavigation();

  const doctors = [
    {
      name: "Dr. João Silva",
      specialty: "Clínico Geral",
    },
    {
      name: "Dra. Maria Santos",
      specialty: "Clínico Geral",
    },
    {
      name: "Dr. Carlos Oliveira",
      specialty: "Clínico Geral",
    },
    {
      name: "Dra. Ana Costa",
      specialty: "Clínico Geral",
    },
    {
      name: "Dra. Patricia Lima",
      specialty: "Clínico Geral",
    },
    {
      name: "Dr. Roberto Souza",
      specialty: "Clínico Geral",
    },
  ];
  const handleAgenda = () => {
    router.replace("/agenda");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>
          SMART CARE<Text style={styles.plus}>+</Text>
        </Text>
        <Text style={styles.subtitle}>MÉDICOS</Text>
      </View>

      <ScrollView style={styles.doctorsContainer}>
        {doctors.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            style={styles.doctorItem}
            onPress={handleAgenda}
          >
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
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
  doctorsContainer: {
    padding: 20,
    flex: 1,
  },
  doctorItem: {
    backgroundColor: "#F0F0F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  doctorName: {
    color: "#666666",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  doctorSpecialty: {
    color: "#666666",
    fontSize: 14,
    textAlign: "center",
    marginTop: 4,
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
