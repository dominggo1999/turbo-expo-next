import React from "react";
import { FlatList, Pressable, Text, SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";
import { Container } from "../components";
import { twColor } from "../config/tailwind";

const links = [
  {
    path: "/button",
    name: "Button",
  },
  {
    path: "/container",
    name: "Container",
  },
  {
    path: "/fetch-card",
    name: "React Query",
  },
];

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-background-500">
      <Stack.Screen
        options={{
          headerTitleStyle: {
            color: "white",
          },
          headerStyle: {
            backgroundColor: twColor("primary", "500"),
          },
          headerTitle: "Components",
        }}
      />
      <FlatList
        data={links}
        keyExtractor={(link) => link.path}
        renderItem={({ item }) => {
          return (
            <Link href={item.path} asChild>
              <Pressable className="flex w-full border-b border-b-primary-400 bg-background-300 py-3 capitalize">
                <Container>
                  <Text className="text-lg text-white">{item.name}</Text>
                </Container>
              </Pressable>
            </Link>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Index;
