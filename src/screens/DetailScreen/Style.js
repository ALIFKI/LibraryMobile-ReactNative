import {StyleSheet,Dimensions} from 'react-native';

const ScreenWidth = Dimensions.get('screen').width
const ScreenHeight = Dimensions.get('screen').height
const DetailStyle = StyleSheet.create({
    content : {
        padding : 16
    },
    header : {        
        height : ScreenHeight-50
    },
    bg : {
        position : 'absolute',
        // zIndex : 0,
        left : 0,
        right : 0,
        backgroundColor : '#282A41',
        height : 200
    },
    mainContent : {
        display : "flex",
        flexDirection : 'column',
        padding : 16,
    },
    BookContent : {
        zIndex : 1,
        marginTop : 10,
        left : 16,
        top : 30,
        position  : 'absolute',
        display : 'flex',
        flexDirection : 'row'
    },
        BookImage : {
            height : 180,
            width : 130,
            borderRadius : 10,
            marginRight : 20,
        },
        title : {
            color : 'white',
            fontFamily : 'Poppins-Bold'
        },
        author : {
            color : '#9598A5',
            fontFamily : 'Poppins-Regular',
            fontSize : 12

        },
        BookDetails : {
            display : 'flex',
            flexDirection : 'column',
            maxWidth : 200
        },
        time : {
            marginTop : 30,
            color : '#9598A5',
            fontFamily : 'Poppins-Regular',
            fontSize: 10
        },
        action : {
            position : 'absolute',
            display : 'flex',
            bottom : 0,
            zIndex : 2,
            flexDirection : 'column',
        },
        boxShadow : 
        {
            shadowColor: "#F9F9F9",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.32,
            shadowRadius: 10.00,
            
            elevation: 2,
        },
        desc : {
            paddingTop : 210,
            // width : ScreenWidth-32,
            margin : 10,
            // backgroundColor : 'black'
        },
        synopsis : {
            paddingBottom : 10,
            paddingTop : 10,
            fontFamily : 'Poppins-Medium',
        },
        synopsisTxt : {
            fontFamily : 'Poppins-Regular'
        },
        backButton : {
            position : 'absolute',
            height : 90,
            width : 90,
            paddingBottom : 10,
            bottom : -20,
            left : -20,
            color : 'white',
            backgroundColor : '#333333',
            display : 'flex',
            flexDirection : 'row',
            alignItems: "center",
            justifyContent : "center",
            shadowColor: "#F9F9F9",
            borderRadius : 45,
            zIndex : 33,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.32,
            shadowRadius: 10.00,
            
            elevation: 2,
        },
        touch : {
            display : 'flex',
            flexDirection : 'row',
        },
        boxShadow : {
            shadowColor: "#F9F9F9",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.32,
            shadowRadius: 10.00,
            
            elevation: 2,
        }
})

module.exports = DetailStyle