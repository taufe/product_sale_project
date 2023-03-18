
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import Search from "../screens/Search";
import BookMark from "../screens/BookMark";
import Profile from "../screens/Profile";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#000",
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 8,
        },
        tabBarStyle: {
            height: 72, // set a fixed height value
            backgroundColor: "#FF7730",
            paddingBottom: Platform.OS === 'android' ? 2 : 0 // to avoid cutting off the icons on Android
          },
      }}
    >
      <BottomTab.Screen
        name="search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="BookMark"
        component={BookMark}
        options={{
          tabBarLabel: "Bookmark",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={24} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
