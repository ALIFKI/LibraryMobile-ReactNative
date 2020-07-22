import {StyleSheet,Dimensions} from 'react-native'


const ScreenWidth = Dimensions.get('screen').width
const ScreenHeight = Dimensions.get('screen').height
const Style = StyleSheet.create({
    container : {
        height : ScreenHeight
    },
    content : {
        padding : 16
    },
    mainContent : {
        display : 'flex',
        flexDirection : 'column',
    },
    CardContent : {
        paddingTop : 30,
        display : "flex",
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center'
    },
    cardBody : {
        height : 150,
        width : ScreenWidth -39,
        backgroundColor : 'white',
        borderRadius : 20,
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
        height : ScreenHeight,
        width : ScreenWidth
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
    }
})

module.exports = Style