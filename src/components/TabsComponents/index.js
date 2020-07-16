import React from 'react'
import { View, Text } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home';
import HistoryScreen from '../../screens/HistoryScreen';
import Ionicons from 'react-native-vector-icons/AntDesign'
import Ion from 'react-native-vector-icons/Ionicons'
import AwsemIcon from 'react-native-vector-icons/FontAwesome'
import SearchScreen from '../../screens/SearchScreen'
import UserScreen from '../../screens/UserScreen';
import BorrowedScreen from '../../screens/BorrowedScreen/Index';
import AddButton from '../SearchButton';

const Tab = createBottomTabNavigator()


export default function TabsBar() {
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel : false,
            activeTintColor: 'black', // active icon color
            inactiveTintColor: '#E0E0E0',  // inactive icon color
            style: {
                backgroundColor: '#FFF',
                borderTopLeftRadius : 30,
                borderTopRightRadius : 30,
                height : 60
            }}}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon : ({color,size})=>(
            <Ionicons name="home" color={color} size={size}/>
        )}}
        />
        <Tab.Screen name="History" component={HistoryScreen} options={{
            tabBarIcon : ({color,size})=>(
            <Ionicons name="paperclip" color={color} size={size}/>
        )}}
        />
        <Tab.Screen name="Search" component={SearchScreen} options={{
            tabBarIcon : ({color,size})=>(
            // <AwsemIcon name="search" color={color} size={size}/>
            <AddButton/>
        )}}
        />
        <Tab.Screen name="Borrowed" component={BorrowedScreen} options={{
            tabBarIcon : ({color,size})=>(
            <Ion name="ios-book" color={color} size={size}/>
        )}}
        />
        <Tab.Screen name="Account" component={UserScreen} options={{
            tabBarIcon : ({color,size})=>(
                <AwsemIcon name="user" color={color} size={size}/>
        )}}
        />
      </Tab.Navigator>
    )
}
