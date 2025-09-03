// app/index.tsx
import { Redirect } from "expo-router";

export default function Index() {
  // Send the app to the tab navigator by default
  return <Redirect href="/(tabs)" />;
}