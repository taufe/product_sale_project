import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/screens/SignIn";
import { AppContextProvider } from "./src/context/AppContext";
const Tab = createNativeStackNavigator();
import BottomTabNavigator from "./src/navigations/BottomNavigation";

export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="SignIn">
          <Tab.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}
