import {StyleSheet,Dimensions} from 'react-native'

const w = Dimensions.get('screen').width
const h = Dimensions.get('screen').height
const Style = StyleSheet.create({
    content : {
        padding : 16
    },
    head : {
        top : -10,
        left : -10,
        position : 'absolute',
        height : 90,
        width : 90,
        backgroundColor : 'white',
        zIndex : 10,
        borderRadius : 45,
        display : "flex",
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center'
    },
    bot : {
        top : -10,
        right : -10,
        position : 'absolute',
        height : 90,
        width : 90,
        backgroundColor : 'white',
        zIndex : 10,
        borderRadius : 45,
        display : "flex",
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center'
    },
    mainContent : {
        paddingTop : 100,
        display : 'flex',
        flexDirection : 'column',
        padding : 10
    },
    card : {
        display : 'flex',
        flexDirection : 'row',
        height : 70,
        width : 320,
        borderRadius : 10,
        backgroundColor : 'white',
        alignItems : 'center',
        padding : 10,
        marginTop: 10,
        justifyContent : 'space-around'
    },
    buttonCreate : {
        height : 70,
        width : 70,
        backgroundColor : 'white',
        display : "flex",
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 40,
        position : 'absolute',
        bottom : 100,
        right : 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    modalShadow : {
        backgroundColor : 'black',
        opacity : 0.3,
        height : h,
        width : w
    },
    modalContent : {
        opacity : 1,
        backgroundColor : 'white',
        position : 'absolute',
        top : 400,
        bottom : 0,
        left :0,
        right : 0,
        borderTopLeftRadius : 20,
        borderTopEndRadius : 20,
        display : 'flex',
        flexDirection : 'column',
        // justifyContent : 'center',
        alignItems : 'center'
    },
    modalHeader : {
        padding : 20
    },
    panelMain : {
        width : w,
        display : 'flex',
        flexDirection : 'row',
        alignItems :'center',
        justifyContent : 'center',
        // flexWrap : 'wrap',
        padding : 10,
    },
    panel : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        height : 70,
        width : 70,
        borderRadius : 25,
        backgroundColor : 'white',
        shadowColor: "#F9F9F9",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.32,
        shadowRadius: 10.00,
        
        elevation: 2,
    },
    input: {
        // borderRadius : 40,
        // borderWidth : 1,
        // borderColor : 'white',
        // marginTop: 30,
        // color: 'white',
        color : 'black',
        backgroundColor :"black",
        shadowColor: "#F9F9F9",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.32,
        shadowRadius: 10.00,
        
        elevation: 0.2,
      },
      inputTxt: {
        // borderRadius : 40,
        // borderWidth : 1,
        // borderColor : 'white',
        // marginTop: 30,
        // color: 'white',
        borderRadius : 10,
        color : 'black',
        backgroundColor :"white"
      },
      formInput : {
          padding : 5
      },
})

module.exports = Style