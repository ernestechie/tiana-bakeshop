import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Colors } from "./constants/colors";
import { Screens } from "./constants/screens";
import ExplorePage from "./screens/ExplorePage";
import OnboardingPage from "./screens/OnboardingPage";
import SignUpPage from "./screens/SignUpPage";

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ProfilePage from "./screens/ProfilePage";
import ShoppingBasketPage from "./screens/ShoppingBasketPage";
import { RootStackParamList } from "./types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function ExploreLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary2,
      }}
    >
      <Tab.Screen
        name={Screens.HomePage}
        component={ExplorePage}
        options={{
          headerShown: false,
          headerTitle: "Explore options",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size - 4} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Basket}
        component={ShoppingBasketPage}
        options={{
          headerShown: false,
          headerTitle: "Shopping basket",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="cart-sharp" size={size - 4} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Profile}
        component={ProfilePage}
        options={{
          headerShown: false,
          headerTitle: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-sharp" size={size - 4} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.Onboarding}
        component={OnboardingPage}
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        }}
      />
      <Stack.Screen
        name={Screens.SignUp}
        component={SignUpPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Screens.Explore}
        component={ExploreLayout}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Screens.ProductDetails}
        component={ProductDetailsScreen}
        options={{
          // headerShown: false,
          presentation: "modal",
          title: "Product details",
          headerTintColor: Colors.white,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        }}
      />
    </Stack.Navigator>
  );
}

preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
