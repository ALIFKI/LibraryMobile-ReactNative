import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HomeStyle from './Style'
import {Input} from 'galio-framework'
import * as RootNav from '../../routes/RootNavigation'
export default class SearchBar extends Component {
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
                onFocus={()=>{RootNav.navigate('search')}}
                onChange={()=>{}}
                borderless
                />
            </View>
        )
    }
}
