import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from "@react-navigation/native";
import CharactersScreen from "../screens/CharactersScreen";
import LocationsScreen from "../screens/LocationsScreen";
import EpisodesScreen from "../screens/EpisodesScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {

  return (
      <NavigationContainer>
        <Tab.Navigator >
          <Tab.Screen name="Characters" component={CharactersScreen} />
          <Tab.Screen name="Episodes" component={EpisodesScreen}  /> 
          <Tab.Screen name="Locations" component={LocationsScreen} />
        </Tab.Navigator>   
      </NavigationContainer>   

  );
}