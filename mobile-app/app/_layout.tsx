import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <TamaguiProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen
            name="(screen)/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(screen)/auth/login"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(screen)/auth/signup"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(screen)/mainLayout/placeMenu"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(screen)/mainLayout/menuItems"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(screen)/mainLayout/payment"
            options={{ headerShown: false }}
          />
        </Stack>
      </ThemeProvider>
    // </TamaguiProvider>
  );
}
