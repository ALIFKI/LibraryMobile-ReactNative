import {StyleSheet,Dimensions} from 'react-native'

const ScreenWidth = Dimensions.get('screen').width
const ScreenHeight = Dimensions.get('screen').height
const Style = StyleSheet.create({
    content : {
        padding : 16,
        backgroundColor : '#282A41'
    },
    mainContent : {
        padding : 10,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        flexWrap : 'wrap'
    },
    cardBook : {
        marginTop : 20,
        height : 200,
        width : 130,
        backgroundColor : 'white',
        borderRadius : 10
    },
        buttonFot : {
            height : 50,
            width : 130,
            backgroundColor : 'white',
            display : 'flex',
            justifyContent : 'space-around',
            alignItems  : 'center',
            left : (ScreenWidth/2)-65,
            flexDirection : 'row',
            position : 'absolute',
            borderRadius : 25,
            bottom : 20,
            shadowColor: "#F9F9F9",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.32,
            shadowRadius: 10.00,
            
            elevation: 2,
        },
        modal : {
            height : ScreenHeight,
            width : ScreenWidth,
            backgroundColor : 'white',
            borderRadius : 20
        }
})

module.exports = Style