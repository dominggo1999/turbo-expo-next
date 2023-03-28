import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import { twColor } from "./config/tailwind";

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-background-500 text-white">
      <Stack.Screen
        options={{
          headerTitleStyle: {
            color: "white",
          },
          headerStyle: {
            backgroundColor: twColor("primary", "500"),
          },
        }}
      />

      <Text className="text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, esse?
      </Text>
    </SafeAreaView>
  );
};

export default Index;
