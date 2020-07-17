import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import TabsBar from '../components/TabsComponents';
import RegisterScreen from '../screens/RegisterScreen';
import DetailScreen from '../screens/DetailScreen';
import { navigationRef } from './RootNavigation';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
            <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}}/>
            <Stack.Screen name="detail" component={DetailScreen} options={{headerShown:false}}/>
            <Stack.Screen name="dashboard" component={TabsBar} options={{headerShown: false}} />
            <Stack.Screen name="register" component={RegisterScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}