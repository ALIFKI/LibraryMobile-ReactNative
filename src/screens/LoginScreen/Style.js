import {StyleSheet} from 'react-native'


const LoginStyle = StyleSheet.create({
    content : {
        padding : 10,
    },
    imgBg : {
        height: 240
    },
        header : {
            display : "flex",
            flexDirection : "column",
            justifyContent : "center",
            alignItems : 'center'
        },
        form : {
            padding : 5
        },
        input: {
            borderRadius : 40,
            borderWidth : 1,
            borderColor : 'white',
            marginTop: 30,
            color: 'white',
            backgroundColor :"white"
          },
})

module.exports = LoginStyle