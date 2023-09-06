import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import TabsNavigator, {TabsStackParamList} from './TabsNavigator'
import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabsStackParamList>;
  Details: {
    id: string,
  };
}

//KNP do
const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;


const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="TabsStack" component={TabsNavigator}
      options={{
        headerShown: false,
      }}
      ></RootStack.Screen>
      <RootStack.Screen name="Details" component={DetailsScreen}
      options={{
        headerShown: false,
      }}
      ></RootStack.Screen>
    </RootStack.Navigator>
  )
}

export default RootNavigator