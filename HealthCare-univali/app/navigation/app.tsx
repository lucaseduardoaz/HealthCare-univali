import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import Login from "../login/index";
import Home from "../home/index";
import Cadastro from "../Cadastro/index";
import Perfil from "../profile/index";
import Especialidades from "../especialidades/index";
import Medicos from "../medicos/index";
import Agenda from "../agenda/index";
import Notification from "../notification/index";
import Consulta from "../consulta/index";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Especialidades" component={Especialidades} />
        <Stack.Screen name="Medicos" component={Medicos} />
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="Consulta" component={Consulta} />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
