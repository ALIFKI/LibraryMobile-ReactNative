import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Toast} from 'galio-framework'
export default class ToastComponent extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View>
                <Toast isShow={this.props.isShow} positionIndicator="bottom" color="warning">{this.props.Txt}</Toast>
            </View>
        )
    }
}
