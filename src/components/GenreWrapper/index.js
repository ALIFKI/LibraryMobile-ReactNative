import React, { Component } from 'react'
import { Text, View } from 'react-native'
import GenreStyle from './Style';
import BooksWrapper from '../BooksWrapper';

export default class GenreWrapper extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={GenreStyle.bookWrapper}>
            <View style={GenreStyle.titleTxt}>
                <Text style={GenreStyle.TxtMain}>See Genre</Text>
                <Text style={GenreStyle.TxtMore}>See All</Text>
            </View>
            {/* <BooksWrapper/> */}
            </View>
        )
    }
}
