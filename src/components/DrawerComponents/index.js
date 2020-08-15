import React from 'react'
import { View, Text } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import adminScreen from '../../screens/adminScreen'
import AuthorScreen from '../../screens/AuthorScreen'
import GenreScreen from '../../screens/GenreScreen'

const DrawerNav = createDrawerNavigator()
export default function Drawer(){
    return (
        <DrawerNav.Navigator>
            {/* <Text>Drawer</Text> */}
            <DrawerNav.Screen name="Home" component={adminScreen} />
            <DrawerNav.Screen name="Author" component={AuthorScreen} />
            <DrawerNav.Screen name="Genre" component={GenreScreen} />
            {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        </DrawerNav.Navigator>
    )


}