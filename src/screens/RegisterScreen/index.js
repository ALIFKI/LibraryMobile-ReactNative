import React, { Component } from 'react'
import { Image,TextInput } from 'react-native';
import { theme, withGalio,Text,Input,GalioProvider, Button,Icon} from 'galio-framework'
import { View } from 'native-base';
import LoginStyle from './Style'

class RegisterScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            focus : false
        }
    }
    componentDidMount(){
        console.log('res')
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
                    <Text>
                        Back
                    </Text>
                </View>
                <View style={LoginStyle.header}>
                        <Text h6 style={LoginStyle.wl}>Lets Start Your Jurney !!</Text>
                        <Text muted>
                            Create your account
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
                        <Text muted>Don't Have account?  </Text><Text>Resgister</Text>
                    </View>
                </View>
            </View>
            </GalioProvider>
            </>
        )
    }
}
export default RegisterScreen