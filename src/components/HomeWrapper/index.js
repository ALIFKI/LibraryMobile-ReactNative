import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HomeStyle from './Style';
import BooksWrapper from '../BooksWrapper';

export default class HomeWrapper extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={HomeStyle.bookWrapper}>
            <View style={HomeStyle.titleTxt}>
                <Text style={HomeStyle.TxtMain}> {this.props.title} </Text>
                <Text style={HomeStyle.TxtMore}>See All</Text>
            </View>
            <BooksWrapper/>
            </View>
        )
    }
}
