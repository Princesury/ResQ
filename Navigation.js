import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Home from "./src/componenets/Home";
import Token from "./src/componenets/Token";
import Setting from "./src/componenets/Setting";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Scanner from "./src/componenets/Scanner";
import "react-native-gesture-handler";
import Search from "./src/componenets/Search";
import Restaurents from './src/componenets/Restaurents'
import Hospitals from './src/componenets/Hospitals'
import Banks from './src/componenets/Banks'
import PublicServices from './src/componenets/PublicServices'
import ProductDetailScreen from "./src/componenets/ProductDetailScreen";
  import Notification from "./src/componenets/Notification";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CustomTabBarLabel({ label, focused }) {
  return (
    <Text style={{ fontSize: focused ? 12 : 10, fontWeight: focused ? "700" : "normal" }}>
      {label}
    </Text>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
      <Stack.Screen name="Restaurents" component={Restaurents} options={{ headerShown: false }} />
      <Stack.Screen name="Hospitals" component={Hospitals} options={{ headerShown: false }} />
      <Stack.Screen name="Banks" component={Banks} options={{ headerShown: false }} />
      <Stack.Screen name="Public-Services" component={PublicServices} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Token" component={Token} options={{ headerShown: false }} />
      <Stack.Screen name="Notify" component={Notification} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function Navigate() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Scan") {
            iconName = "qrcode";
          } else if (route.name === "Setting") {
            iconName = "account";
          }
          return <MaterialCommunityIcons name={iconName} color={color} size={30} />;
        },
        tabBarLabel: ({ focused }) => (
          <CustomTabBarLabel label={route.name} focused={focused} />
        ),
        tabBarActiveTintColor: "#00A877",
        tabBarInactiveTintColor: "grey",
      })}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scanner}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Navigate />
    </NavigationContainer>
  );
}
