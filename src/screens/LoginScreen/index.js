import React, { Component } from 'react'
import { Image,TextInput } from 'react-native';
import { theme, withGalio,Text,Input,Icon,GalioProvider} from 'galio-framework'
import { View } from 'native-base';
import LoginStyle from './Style'
import image from '../../images/bg-cover.png'

class LoginScreen extends Component {
    render() {
        const customTheme = {
            SIZES: { BASE: 18, },
            // this will overwrite the Galio SIZES BASE value 16
            COLORS: { PRIMARY: '#3B5998', } 
            // this will overwrite the Galio COLORS PRIMARY color #B23AFC
          };
        return (
            <>
            <GalioProvider theme={customTheme}>
            <View style={LoginStyle.content}>
                <View style={LoginStyle.header}>
                    <Image source={image} style={LoginStyle.imgBg}></Image>
                    <Text h5>LOGIN</Text>
                </View>
                <View style={LoginStyle.form}>
                    <TextInput placeholder="email" style={LoginStyle.input}></TextInput>
                </View>
            </View>
            </GalioProvider>
            </>
        )
    }
}
export default LoginScreen