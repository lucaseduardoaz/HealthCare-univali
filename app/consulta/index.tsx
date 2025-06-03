import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Navbar from "../components/Navbar";
import { useNavigation } from "@react-navigation/native";

export default function Consulta() {
  const navigation = useNavigation();

  const appointments = [
    {
      doctor: "Dr. João Silva",
      specialty: "Clínico Geral",
      date: "24/04/2024",
      time: "14:00",
    },
    // Add more appointments here as needed
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>
          SMART CARE<Text style={styles.plus}>+</Text>
        </Text>
        <Text style={styles.subtitle}>NOTIFICAÇÕES</Text>
      </View>

      <ScrollView style={styles.appointmentsContainer}>
        {appointments.map((appointment, index) => (
          <TouchableOpacity key={index} style={styles.appointmentItem}>
            <Text style={styles.doctorName}>{appointment.doctor}</Text>
            <Text style={styles.specialty}>{appointment.specialty}</Text>
            <Text style={styles.dateTime}>DATA: {appointment.date}</Text>
            <Text style={styles.dateTime}>HORÁRIO: {appointment.time}</Text>
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
  appointmentsContainer: {
    padding: 20,
    flex: 1,
  },
  appointmentItem: {
    backgroundColor: "#F0F0F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  doctorName: {
    color: "#666666",
    fontSize: 16,
    textAlign: "left",
    fontWeight: "bold",
  },
  specialty: {
    color: "#666666",
    fontSize: 14,
    textAlign: "left",
    marginTop: 4,
  },
  dateTime: {
    color: "#666666",
    fontSize: 14,
    textAlign: "left",
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
