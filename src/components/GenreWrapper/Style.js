import {StyleSheet} from 'react-native';


const GenreStyle = StyleSheet.create({
    content : {
        display : 'flex',
        flex : 1,
        padding : 16,
        backgroundColor : '#282A41',
    },
    headerTop : {
        display : 'flex',
        flexDirection : 'row',
    },
    notif : {
        position : 'absolute',
        right : 16,
        top: 5,
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'flex-start',
        justifyContent : 'flex-end',
    },
    profileWrapper : {
        // display : 'flex',
        // flexDirection : 'row',
        // alignItems : 'center',
        // justifyContent : "center",
        paddingLeft : 5,
        paddingBottom : 10,
        height : 70,
        width : 80,
        borderColor : 'white',
    },
    profileImage : {
        height : 70,
        width : 70,
        borderRadius : 35,
        borderColor : 'white',
        borderWidth : 3
    },
    txtStyle : {
        padding : 10,
        color : 'white',
        fontFamily : 'Poppins-Regular'
    },
    bookWrapper : {
        paddingTop : 16
    },
        titleTxt : {
            color : 'white',
            display : 'flex',
            flexDirection : 'row',
            flexWrap : 'wrap',
            justifyContent : "space-between",
            alignItems : 'center',
            paddingBottom : 10
        },
        TxtMain : {
            color : 'white',
            fontFamily : "Poppins-Medium",
            fontSize : 12
        },
        TxtMore : {
            color : '#5A5D6D',
            fontFamily : "Poppins-Regular",
            fontSize : 10,
            marginRight : 10
        }
})

module.exports = GenreStyle