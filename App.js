import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/navigation/index";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}
