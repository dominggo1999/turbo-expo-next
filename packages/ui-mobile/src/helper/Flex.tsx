import React from "react";
import { View, type ViewProps } from "react-native";
import clsx from "clsx";

import SectionTitle from "./SectionTitle";

export interface FlexProps extends ViewProps {
  title: string;
}

const Flex: React.FC<FlexProps> = ({ title, className, children }) => {
  return (
    <View className={clsx("mb-7 flex flex-col", className)}>
      <SectionTitle title={title} />
      <View className="flex-row flex-wrap gap-3">{children}</View>
    </View>
  );
};

export default Flex;
