import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import { twColor } from "./config/tailwind";

interface BadgeProps extends TouchableOpacityProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text, ...rest }) => {
  return (
    <TouchableOpacity
      {...rest}
      className="rounded-full border border-primary-500 px-4 py-2 text-lg"
    >
      <Text className="text-primary-500">{text}</Text>
    </TouchableOpacity>
  );
};

const dummyData = [
  {
    id: 1,
    name: "Action",
  },
  {
    id: 2,
    name: "Sci-fi",
  },
  {
    id: 3,
    name: "Romance",
  },
  {
    id: 4,
    name: "Comedy",
  },
  {
    id: 5,
    name: "Historical",
  },
];

const Index = () => {
  const [active, setActive] = useState(dummyData[0]);

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

      <ScrollView>
        <View className="px-4">
          <Text className="mb-4 text-3xl font-bold text-primary-500">
            {active?.name}
          </Text>
          <Text className="mb-5 text-lg text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
            esse?
          </Text>
        </View>

        <FlatList
          data={dummyData}
          horizontal
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Badge
              onPress={() => {
                setActive(item);
              }}
              text={item.name}
            />
          )}
          contentContainerStyle={{ paddingLeft: 20, columnGap: 10 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
