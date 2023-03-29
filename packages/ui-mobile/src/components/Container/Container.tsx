import React from "react";
import { View, type ViewProps } from "react-native";
import clsx from "clsx";

export type ContainerProps = ViewProps;

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <View {...restProps} className={clsx("flex-1 px-4", className)}>
      {children}
    </View>
  );
};

export default Container;
