import React from "react";
import { Pressable, Text, View } from "react-native";

const Box = () => {
  return (
    <View>
      <Pressable
        onPress={() => {
          console.log("TEst");
        }}
      >
        <Text className="mt-10 text-xl font-bold text-white">Test Test</Text>
      </Pressable>
    </View>
  );
};

export default Box;
