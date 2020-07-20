import React, { Component } from 'react'
import { Text, View,Dimensions } from 'react-native'
import HTML from 'react-native-render-html'
import { connect } from 'react-redux'
import Style from './Style'

class UserScreen extends Component {
    render() {
        return (
            <View style={Style.content}>
                <Text>{this.props.user.auth.name}</Text>
            </View>
        )
    }
}
const mapStateToProps = state=>({
    user  : state.auth
})
export default connect(mapStateToProps)(UserScreen)
