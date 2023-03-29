import React from "react";
import { Stack } from "expo-router";

import { twColor } from "../config/tailwind";

export interface ScreenProps {
  title?: string;
}

const Screen: React.FC<ScreenProps> = ({ title = "Component Page" }) => {
  return (
    <Stack.Screen
      options={{
        animation: "none",
        headerTitleStyle: {
          color: "white",
        },
        headerStyle: {
          backgroundColor: twColor("primary", "500"),
        },
        headerTitle: title,
      }}
    />
  );
};

export default Screen;
