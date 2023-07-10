import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

// This is the main layout of the app
// It wraps your pages with the providers they need
const RootLayout = () => {
  return (
    <SafeAreaProvider>
      {/*
          The Stack component displays the current page.
          It also allows you to configure your screens 
        */}
      <QueryClientProvider client={queryClient}>
        <Stack />
      </QueryClientProvider>

      <StatusBar />
    </SafeAreaProvider>
  );
};

export default RootLayout;
