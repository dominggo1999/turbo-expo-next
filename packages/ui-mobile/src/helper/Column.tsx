import React from "react";
import { View, type ViewProps } from "react-native";
import clsx from "clsx";

import SectionTitle from "./SectionTitle";

export interface ColumnProps extends ViewProps {
  title: string;
}

const Column: React.FC<ColumnProps> = ({ title, className, children }) => {
  return (
    <View className={clsx("mb-7 flex flex-col", className)}>
      <SectionTitle title={title} />
      <View className="flex-col gap-y-3">{children}</View>
    </View>
  );
};

export default Column;
