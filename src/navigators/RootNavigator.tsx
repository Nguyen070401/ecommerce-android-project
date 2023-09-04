import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabsNavigator, {TabsStackParamList} from './TabsNavigator'
import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabsStackParamList>;
  DetailsScreen: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="TabsStack" component={TabsNavigator}
      options={{
        headerShown: false,
      }}
      ></RootStack.Screen>
      <RootStack.Screen name="DetailsScreen" component={DetailsScreen}></RootStack.Screen>
    </RootStack.Navigator>
  )
}

export default RootNavigator