import { View, Text } from "react-native";
import React from "react";
import { Button } from "../Button";

export interface CardProps {
  data: {
    title: string;
    body: string;
  };
  index: number;
}

const Card: React.FC<CardProps> = ({ data, index }) => {
  return (
    <View className="rounded-lg bg-primary-500 p-5">
      <Text className="font-bold text-xl text-background-500 mb-2">
        {index}.{` ${data.title}`}
      </Text>
      <Text className="text-sm">{data.body}</Text>
      <View className="flex flex-row justify-end mt-4">
        <Button tailwind="bg-background-700">Dummy-{index}</Button>
      </View>
    </View>
  );
};

export default Card;
