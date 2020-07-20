import {StyleSheet,Dimensions} from 'react-native'


const ScreenHeight = Dimensions.get('screen').height
const ScreenWidth = Dimensions.get('screen').width

const Style = StyleSheet.create({
    content : {
        height : ScreenHeight,
        padding : 16,
        backgroundColor : 'white'
    },
    mainContent : {
        display : 'flex',
        flexDirection : 'column',
    },
    userProfile : {
        padding : 10,
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
    },
    profileImage : {
        margin : 15,
        height : 100,
        width : 100,
        borderRadius : 50,
        // shadowOffset: {
        //     width: 0,
        //     height: 12,
        // },
        // shadowOpacity: 0.58,
        // shadowRadius: 16.00,

        // elevation: 24,
    },
    boxShadow : {
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
        name : {
            fontFamily : 'Poppins-Bold',
            color : '#212121'
        },
        joinAt : {
            fontFamily : 'Poppins-Regular',
            fontSize : 12,
            color : '#B7B7B7'
        },
    statistic : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        padding : 10,
        paddingTop : 20
    },
        dataBar : {
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'center',
            alignItems : 'center'
        },
            dataCount : {
                fontFamily : 'Poppins-Medium'
            },
    action : {
        paddingTop : 60,
        // position : 'absolute',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
    }
})

module.exports = Style