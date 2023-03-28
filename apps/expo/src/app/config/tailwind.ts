import type { Config } from "tailwindcss";
import resolveConfig from "tailwindcss/resolveConfig";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tailwindConfig from "@acme/tailwind-config";

export const twConfig = resolveConfig(tailwindConfig as Config);

export const colors = twConfig.theme?.colors;

export const twColor = (...args: string[]): string => {
  let current: typeof colors | string | undefined = colors;
  for (const arg of args) {
    if (typeof current === "object") {
      current = current[arg];
    } else {
      throw new Error(`Invalid argument: ${arg}`);
    }
  }
  if (typeof current === "string") {
    return current;
  } else {
    throw new Error(`Invalid tailwind color: ${args.join(".")}`);
  }
};
