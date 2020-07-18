import {StyleSheet,Dimensions} from 'react-native'


const ScreenHeight = Dimensions.get('screen').height
const ScreenWidth = Dimensions.get('screen').width

const Style = StyleSheet.create({
    content : {
        padding : 16,
        backgroundColor : '#282A41',
    },
        titleTxt: {
            color : 'white',
            fontFamily : 'Poppins-Bold',
            fontSize : 16
        },
    mainContent : {
        display : 'flex',
        flexDirection  : 'column'
    },
    header : {
        display :'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems  : 'center',
        padding : 10
    },
    bookWraper : {
        display : 'flex',
        flexDirection : 'column',
        paddingTop : 16
     },
     card : {
         padding : 10,
         paddingLeft : 0,
         paddingRight : 0
     }
     ,
     bookCard : {
         borderRadius : 20,
         display : 'flex',
         flexDirection : 'row',
         position : 'relative',
         marginTop : 10,
         padding : 10,
         paddingLeft : 100,
         backgroundColor : '#3D3F54',
         minHeight : 110,
         justifyContent : 'space-around'
     },
     imageBook : {
        padding : 16,
        position : 'absolute',
        height : 120,
        width : 90,
        backgroundColor : 'black',
        zIndex : 1,
        borderRadius : 13,
        left : 10
     },
     details : {
         display : 'flex',
         flexDirection : 'column',
        //  justifyContent : 'center'
     },
     action : {
         display : 'flex',
         flexDirection : 'row',
         justifyContent : 'center',
         alignItems : 'center',
     },
     bookTitle : {
         color : 'white',
         fontFamily : 'Poppins-Medium',
         fontSize : 12
     },
     author : {
        color : '#8D919D',
        fontFamily : 'Poppins-Medium',
        fontSize : 10
    },
    time : {
        color : '#8D919D',
        fontFamily : 'Poppins-Medium',
        fontSize : 10,
        marginTop : 30
    },
    borrowTxt : {
        color : 'white',
        fontFamily : 'Poppins-Medium'
    },
    returnTxt : {
        color : '#C4787D',
        fontFamily : 'Poppins-Medium'
    }
})

module.exports = Style