import React from 'react'
import { View, Text } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import adminScreen from '../../screens/adminScreen'


const DrawerNav = createDrawerNavigator()
export default function Drawer(){
    return (
        <DrawerNav.Navigator>
            {/* <Text>Drawer</Text> */}
            <DrawerNav.Screen name="admin" component={adminScreen} />
            {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        </DrawerNav.Navigator>
    )


}