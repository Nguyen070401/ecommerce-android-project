import { View, Text } from 'react-native'
import React from 'react'
import {
    BottomTabScreenProps,
    createBottomTabNavigator,
  } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen'
import Icons from "@expo/vector-icons/MaterialIcons";
import { CompositeScreenProps } from "@react-navigation/native";
import { RootStackScreenProps } from "./RootNavigator";
import Model from '../screens/Model'

//KNP do
export type TabsStackParamList ={
    Home: undefined;
    Cart: undefined;
    Payment: undefined;
    Profile: undefined;
};

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

export type TabsStackScreenProps<T extends keyof TabsStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabsStackParamList, T>,
    RootStackScreenProps<"TabsStack">
  >;

const TabsNavigator = () => {
  return (
    <TabsStack.Navigator>
        <TabsStack.Screen name="Home" component={HomeScreen}
            options={{
                headerShown: false,
                tabBarIcon(props) {
                    return <Icons name ="home" {...props}></Icons>
                }
            }}
        ></TabsStack.Screen>
        <TabsStack.Screen name="Cart" component={Model}
            options={{
                tabBarIcon(props) {
                    return <Icons name ="shopping-cart" {...props}></Icons>
                }
            }}
        ></TabsStack.Screen>
        <TabsStack.Screen name="Payment" component={Model}
            options={{
                tabBarIcon(props) {
                    return <Icons name ="account-balance-wallet" {...props}></Icons>
                }
            }}
        ></TabsStack.Screen>
        <TabsStack.Screen name="Profile" component={Model}
            options={{
                tabBarIcon(props) {
                    return <Icons name ="person" {...props}></Icons>
                }
            }}
        ></TabsStack.Screen>
    </TabsStack.Navigator>
  )
}

export default TabsNavigator