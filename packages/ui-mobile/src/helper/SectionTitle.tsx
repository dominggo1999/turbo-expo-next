import React from "react";
import { Text, View } from "react-native";

export interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <View className="mb-3">
      <Text className="text-2xl font-bold">{title}</Text>
    </View>
  );
};

export default SectionTitle;
