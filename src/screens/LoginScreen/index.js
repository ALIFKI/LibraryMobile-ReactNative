import React, { Component } from 'react'
import { Image,TextInput } from 'react-native';
import { theme, withGalio,Text,Input,GalioProvider, Button} from 'galio-framework'
import { View,Icon } from 'native-base';
import LoginStyle from './Style'
import image from '../../images/loginBg.png'
// import { API_URL } from '@env'

class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            focus : false
        }
    }
    onRegister = ()=>{
        this.props.navigation.navigate('register')
    }
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
                    <View style={LoginStyle.bgImage} >
                    <Image source={image} style={LoginStyle.imgBg}></Image>
                    </View>
                    <Text h6 style={LoginStyle.wl}>Welcome Back !!</Text>
                    <Text muted>
                        Log in to your account in Library App
                    </Text>
                </View>
                <View style={LoginStyle.form}>
                    <View style={LoginStyle.formInput}>
                        <Input placeholder="Email" rounded borderless={true} style={LoginStyle.input,LoginStyle.boxShadow} placeholderTextColor={'#D4D7DE'} color={'black'}/>
                    </View>
                    <View style={LoginStyle.formInput}>
                        <Input placeholder="Password" rounded borderless={true} password style={LoginStyle.input,LoginStyle.boxShadow} placeholderTextColor={'#D4D7DE'}/>
                    </View>
                    <View style={LoginStyle.formInput}>
                        <Text style={LoginStyle.textForgot}>Forgot Password?</Text>
                    </View>
                    <View  style={LoginStyle.formInput,LoginStyle.submitWrapper} >
                        <Button color={'black'} shadowless round>Log in</Button>
                    </View>
                    <View style={LoginStyle.registerTxt}>
                        <Text muted>Don't Have account?  </Text><Text onPress={this.onRegister}>Resgister</Text>
                    </View>
                </View>
            </View>
            </GalioProvider>
            </>
        )
    }
}
export default LoginScreen