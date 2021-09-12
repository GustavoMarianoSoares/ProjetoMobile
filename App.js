import React from "react";
import { Text, View, Image } from "react-native";


import { css } from "./assets/css/css";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Qr from "./views/Qr";
import Cardapio from "./views/Cardapio";
import Comida from "./views/Comida";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ler QR Code" component={Qr} />
        <Stack.Screen name="Cardápio" component={Cardapio} />
        <Stack.Screen name="Comida" component={Comida} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
