import React, { useState } from "react";
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

export default function Agenda() {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const calendar = {
    month: "Abril",
    days: Array.from({ length: 31 }, (_, i) => i + 1),
  };

  const morningSlots = ["08:00", "09:00", "10:00", "11:00"];
  const afternoonSlots = ["13:00", "14:00", "15:00", "16:00"];

  const renderCalendarDays = () => {
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
    return (
      <View>
        <View style={styles.weekDaysContainer}>
          {weekDays.map((day, index) => (
            <Text key={index} style={styles.weekDayText}>
              {day}
            </Text>
          ))}
        </View>
        <View style={styles.daysContainer}>
          {calendar.days.map((day) => (
            <TouchableOpacity
              key={day}
              style={[
                styles.dayButton,
                selectedDate === day && styles.selectedDay,
              ]}
              onPress={() => setSelectedDate(day)}
            >
              <Text
                style={[
                  styles.dayText,
                  selectedDate === day && styles.selectedDayText,
                ]}
              >
                {day}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      router.replace("/notification");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>
          SMART CARE<Text style={styles.plus}>+</Text>
        </Text>
        <Text style={styles.subtitle}>AGENDAMENTO</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.doctorSection}>
          <Text style={styles.doctorName}>Dr. João Silva</Text>
          <Text style={styles.specialty}>Clínico Geral</Text>
        </View>

        <View style={styles.calendarSection}>
          <View style={styles.monthSelector}>
            <Text>
              {"<"} {calendar.month} {">"}
            </Text>
          </View>
          {renderCalendarDays()}
        </View>

        <View style={styles.timeSlotsSection}>
          <Text style={styles.sectionTitle}>HORÁRIOS DISPONÍVEIS</Text>
          <View style={styles.timeGrid}>
            <View style={styles.timeColumn}>
              <Text style={styles.periodTitle}>MANHÃ</Text>
              {morningSlots.map((time, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.timeSlot,
                    selectedTime === time && styles.selectedTimeSlot,
                  ]}
                  onPress={() => handleTimeSelect(time)}
                >
                  <Text
                    style={[
                      styles.timeText,
                      selectedTime === time && styles.selectedTimeText,
                    ]}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.timeColumn}>
              <Text style={styles.periodTitle}>TARDE</Text>
              {afternoonSlots.map((time, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.timeSlot,
                    selectedTime === time && styles.selectedTimeSlot,
                  ]}
                  onPress={() => handleTimeSelect(time)}
                >
                  <Text
                    style={[
                      styles.timeText,
                      selectedTime === time && styles.selectedTimeText,
                    ]}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.scheduleButton,
            (!selectedDate || !selectedTime) && styles.scheduleButtonDisabled,
          ]}
          onPress={handleSchedule}
          disabled={!selectedDate || !selectedTime}
        >
          <Text style={styles.scheduleButtonText}>AGENDAR</Text>
        </TouchableOpacity>
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
  content: {
    flex: 1,
    padding: 20,
  },
  doctorSection: {
    backgroundColor: "#F0F0F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  doctorName: {
    fontSize: 16,
    color: "#666666",
    fontWeight: "bold",
  },
  specialty: {
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
  },
  calendarSection: {
    backgroundColor: "#F0F0F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  monthSelector: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  weekDaysContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  weekDayText: {
    color: "#666666",
    width: 30,
    textAlign: "center",
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  dayButton: {
    width: "14.28%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dayText: {
    color: "#666666",
  },
  selectedDay: {
    backgroundColor: "#4A67E3",
    borderRadius: 20,
  },
  selectedDayText: {
    color: "#FFFFFF",
  },
  timeSlotsSection: {
    backgroundColor: "#F0F0F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 10,
  },
  timeGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeColumn: {
    flex: 1,
  },
  periodTitle: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
    marginBottom: 10,
  },
  timeSlot: {
    padding: 8,
    alignItems: "center",
    marginBottom: 5,
    borderRadius: 20,
  },
  selectedTimeSlot: {
    backgroundColor: "#4A67E3",
  },
  timeText: {
    color: "#666666",
    fontSize: 14,
  },
  selectedTimeText: {
    color: "#FFFFFF",
  },
  scheduleButton: {
    backgroundColor: "#4A67E3",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  scheduleButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  scheduleButtonDisabled: {
    backgroundColor: "#A0A0A0",
  },
});
