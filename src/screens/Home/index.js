import React, { Component } from 'react'
import {View,ScrollView,Text,Image} from 'react-native'
import HomeStyle from './Style';
import {Input} from 'galio-framework'
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';
import profile from '../../images/felin.jpg';
import Awsome from 'react-native-vector-icons/FontAwesome'
import HomeWrapper from '../../components/HomeWrapper'

class HomeScreen extends Component {
    render() {
        return (
            <ScrollView style={HomeStyle.content} >
                <View style={HomeStyle.headerTop}>
                    <View style={HomeStyle.profile}>
                        <View style={HomeStyle.profileWrapper}>
                        <Image source={profile} style={HomeStyle.profileImage}/>
                        </View>
                        <View>
                            <Text style={HomeStyle.txtStyle}>
                                Hello Alifki
                            </Text>
                        </View>
                    </View>
                    <View style={HomeStyle.notif}>
                        <Awsome name="bell" color={'white'} size={16}/>
                    </View>
                </View>
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
                        onChange={()=>{}}
                        borderless
                        />
                </View>
                <HomeWrapper/>
                <HomeWrapper/>
            </ScrollView>
        )
    }
}

export default HomeScreen