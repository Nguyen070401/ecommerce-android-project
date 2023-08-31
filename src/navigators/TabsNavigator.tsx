import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import Icons from "@expo/vector-icons/MaterialIcons";

export type TabsStackParamList ={
    Home: undefined;
    Cart: undefined;
    Payment: undefined;
    Profile: undefined;
};

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

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
        <TabsStack.Screen name="Cart" component={HomeScreen}
            options={{
                tabBarIcon(props) {
                    return <Icons name ="shopping-cart" {...props}></Icons>
                }
            }}
        ></TabsStack.Screen>
        <TabsStack.Screen name="Payment" component={HomeScreen}
            options={{
                tabBarIcon(props) {
                    return <Icons name ="account-balance-wallet" {...props}></Icons>
                }
            }}
        ></TabsStack.Screen>
        <TabsStack.Screen name="Profile" component={HomeScreen}
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