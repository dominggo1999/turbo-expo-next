import React, { forwardRef, useCallback, useState } from "react";
import {
  Pressable,
  Text,
  type GestureResponderEvent,
  type PressableProps,
  type TextProps,
  type View,
} from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonCva = cva(
  "inline-flex items-center justify-center rounded font-medium outline-none select-none self-start",
  {
    variants: {
      variant: {
        primary: "bg-primary-500",
        secondary: "bg-secondary-500",
        danger: "bg-danger-500",
      },
      size: {
        sm: "px-3 py-2",
        md: "px-4 py-2",
        lg: "px-5 py-3",
        xl: "px-6 py-4",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      isDisabled: {
        true: "opacity-40",
      },
      isRounded: {
        true: "rounded-full",
      },
      isAspectSquare: {
        true: "aspect-square",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      fullWidth: false,
      isDisabled: false,
      isRounded: false,
      isAspectSquare: false,
    },
  },
);

const hoverCva = cva("", {
  variants: {
    variant: {
      primary: "bg-primary-400",
      secondary: "bg-secondary-400",
      danger: "bg-danger-400",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const textCva = cva("text-white font-medium", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    isAspectSquare: {
      true: "aspect-square text-center",
    },
  },
  defaultVariants: {
    size: "sm",
    isAspectSquare: false,
  },
});

export interface ButtonProps
  extends PressableProps,
    VariantProps<typeof buttonCva> {
  children: TextProps["children"];
}

const Button = forwardRef<View, ButtonProps>(
  ({ children, onPressIn, onPress, ...props }, ref) => {
    const [hoverClassName, setHoverClassName] = useState("");

    const {
      variant,
      size,
      fullWidth,
      isDisabled,
      className = "",
      isRounded,
      isAspectSquare,
    } = props;

    const handlePressIn = useCallback(
      (e: GestureResponderEvent) => {
        onPressIn && onPressIn(e);
        setHoverClassName(
          hoverCva({
            variant: variant,
          }),
        );
      },
      [onPressIn, variant],
    );

    const handlePressOut = useCallback(
      (e: GestureResponderEvent) => {
        onPress && onPress(e);
        setHoverClassName("");
      },
      [onPress],
    );

    return (
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={isDisabled}
        className={clsx(
          buttonCva({
            variant,
            size,
            fullWidth,
            isRounded,
            isAspectSquare,
            isDisabled,
          }),
          className,
          hoverClassName,
        )}
        {...props}
        ref={ref}
      >
        <Text className={textCva({ size, isAspectSquare })}>{children}</Text>
      </Pressable>
    );
  },
);

export default Button;
