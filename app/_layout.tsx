import { SplashScreen, Stack } from "expo-router";
import "./globals.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Rubick-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubick-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubick-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubick-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubick-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubick-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack />;
}
