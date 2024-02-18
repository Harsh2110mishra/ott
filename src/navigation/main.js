import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../constants/colors";

// imported screens
import Details from "../screens/Details/index";
import Home from "../screens/Home/home";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: colors.background,
  },
  headerTitleStyle: {
    fontSize: 24,
    color: colors.text,
    textAlign: "center",
    alignSelf: "center",
  },
  headerTintColor: colors.headings,
};

function Main() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({ title: route.params.item.title })}
      />
    </Stack.Navigator>
  );
}

export default Main;
