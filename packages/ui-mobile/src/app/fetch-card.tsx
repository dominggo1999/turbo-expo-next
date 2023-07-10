import {
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Text,
} from "react-native";
import React from "react";
import { Container, Card, Button } from "../components";
import { useQuery } from "@tanstack/react-query";
import { twColor } from "../components";
import { Screen } from "../helper";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const FetchCard = () => {
  // Fetch 10 post from jsonplaceholder using react query

  const { isLoading, data } = useQuery<Post[]>(["posts"], async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  });

  if (isLoading) {
    return (
      <View className="mt-10 py-10">
        <ActivityIndicator size="large" color={twColor("primary", "500")} />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Screen title="React Query Demo" />

      {/* Render flatlist with cards using data from the query */}
      <FlatList
        className="px-4 pt-10 bg-background"
        data={data?.slice(0, 10)}
        renderItem={({ item, index }) => <Card index={index + 1} data={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return <View className="h-4" />;
        }}
      />
    </SafeAreaView>
  );
};

export default FetchCard;
