import { NavigationContainer } from "@react-navigation/native";

// Custom imports
import RootNavigator from "./navigator/RootNavigator";

export default function App() {
  return (
    // @ts-ignore //TODO: add a type configuration
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
