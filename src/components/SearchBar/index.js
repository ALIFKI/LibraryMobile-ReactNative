import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HomeStyle from './Style'
import {Input} from 'galio-framework'
import * as RootNav from '../../routes/RootNavigation'
export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state ={
            txt : '',
            search : false
        }
    }
    handleKeyDown = (e)=>{
        if(e.nativeEvent.key == "Enter"){
            dismissKeyboard();
            console.log('res')
        }
    }
    render() {
        return (
            <View style={HomeStyle.searchBar}>
            <Input
                placeholder="Search Some Books?"
                right
                icon="search"
                family="fontawesome"
                iconSize={14}
                iconColor="#5E626F"
                placeholderTextColor="#5E626F"
                style={{
                    backgroundColor : '#3D3F54'
                }}
                onBlur={()=>{this.setState({search : false})}}
                onPress={()=>{console.log('perss')}}
                keyboardType="default"
                returnKeyType="done"
                onKeyPress={this.handleKeyDown}
                onFocus={()=>{RootNav.navigate('search');this.setState({search : true})}}
                onChangeText={text=>this.setState({txt : text})}
                borderless
                />
            </View>
        )
    }
}
