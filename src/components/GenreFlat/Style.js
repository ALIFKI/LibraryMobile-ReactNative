import {StyleSheet} from 'react-native';

const CardStyle = StyleSheet.create({
    wrapper : {
        paddingTop : 10
    },
    card : {
        padding : 10,
        paddingTop : 0,
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center'
    },
    image : {
        height : 60,
        width : 60,
        borderRadius : 15
    },
        genreTxt : {
            color : 'white',
            margin : 5,
            fontSize : 10,
            fontFamily : 'Poppins-Regular'
        },
            icon : {
                position : 'absolute',
                top : 15
            }
})

module.exports = CardStyle