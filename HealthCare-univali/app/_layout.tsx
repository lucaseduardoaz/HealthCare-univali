import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Login" }} />
      <Stack.Screen name="Home" options={{ title: "Home" }} />
      <Stack.Screen name="Cadastro" options={{ title: "Cadastro" }} />
    </Stack>
  );
}
