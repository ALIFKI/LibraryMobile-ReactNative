import React, { Component } from 'react'
import { Image,TextInput, Alert,TouchableOpacity,ToastAndroid } from 'react-native';
import { theme, withGalio,Text,Input,GalioProvider, Button,Toast} from 'galio-framework'
import { View,Icon } from 'native-base';
import LoginStyle from './Style'
import image from '../../images/loginBg.png'
import { connect } from 'react-redux';
import {login} from '../../redux/actions/auth';
import ToastComponent from '../../components/Toast'


class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            focus : false,
            username : '',
            password  : '',
            isLoading : false,
            validate : false,
            isShow : false
        }
    }
    showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
          "All Your Base Are Belong To Us",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      };
    
    
    onRegister = ()=>{
        this.props.navigation.navigate('register')
    }
    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
          this.setState({ 
              username : text,
              validate : false ,
            })
        }
        else {
          this.setState({ 
              username : text,
              validate : true
         })
        }
      }
    handleLogin = ()=>{
        if (this.state.validate === true) {
            var data = {
                username : this.state.username,
                password : this.state.password
            }
            this.props.login(data).then((res)=>{
                console.log(res.value.data.data)
                this.props.navigation.navigate('dashboard')
            }).catch((err)=>{
                console.log(err.response)
                    Alert.alert(
                        'Oopss!!',
                        err.response.data.msg,
                        [
                            { text: 'OK', onPress: () => console.log('OK Pressed') }
                        ],
                        { cancelable: false }
                    )
            })
        }
        else{
            Alert.alert(
                'Oopss!!',
                'Email Invalid',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
            )
        }
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
                        <Input placeholder="Email" rounded borderless={true} style={LoginStyle.input,LoginStyle.boxShadow} placeholderTextColor={'#D4D7DE'} color={'black'} onChangeText={text=>this.validate(text)}/>
                    </View>
                    <View style={LoginStyle.formInput}>
                        <Input placeholder="Password" rounded borderless={true} password style={LoginStyle.input,LoginStyle.boxShadow} placeholderTextColor={'#D4D7DE'} onChangeText={text=>this.setState({password : text})}/>
                    </View>
                    <View style={LoginStyle.formInput}>
                        <Text style={LoginStyle.textForgot}>Forgot Password?</Text>
                    </View>
                    <View  style={LoginStyle.formInput,LoginStyle.submitWrapper} >
                        <TouchableOpacity
                        
                        >
                        <Button color={'black'} shadowless round onPress={this.handleLogin}>Log in</Button>
                        </TouchableOpacity>
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
const mapStateToProps = state =>({
    auth : state.auth
})
const mapDispatchToProps = {login}

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)