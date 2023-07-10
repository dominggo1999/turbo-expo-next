import type { ExpoConfig } from "@expo/config";

const defineConfig = (): ExpoConfig => ({
  name: "ui-mobile",
  slug: "ui-mobile",
  scheme: "ui-mobile",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#192132",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "your.bundle.identifier",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#192132",
    },
  },
  extra: {
    eas: {
      projectId: "67683fb4-6f39-448f-ab9a-00834893dc59",
    },
  },
  plugins: ["./expo-plugins/with-modify-gradle.js", "expo-router"],
  owner: "arnold_ds",
});

export default defineConfig;
