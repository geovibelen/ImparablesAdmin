import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Preguntas } from "./Screens/Preguntas";
import { Visitas } from "./Screens/Visitas";
import { Resultados } from "./Screens/Resultados";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { cargarConfiguracion } from "./utils/conexion"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabHome() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PeguntasScreen" component={Preguntas}></Tab.Screen>
      <Tab.Screen name="VisitasScreen" component={Visitas}></Tab.Screen>
      <Tab.Screen name="ResultadosScreen" component={Resultados}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {

  if(!global.estaCargado){
    cargarConfiguracion();
  };
  
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="ImparablesAdmin">

          <Stack.Screen name="ImparablesAdmin" component={TabHome}></Stack.Screen>
          
          <Stack.Screen
            name="PreguntasScreen"
            component={Preguntas}
          ></Stack.Screen>

          <Stack.Screen
            name="VisitasScreen"
            component={Visitas}
          ></Stack.Screen>

          <Stack.Screen
            name="ResultadosScreen"
            component={Resultados}
          ></Stack.Screen>

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
