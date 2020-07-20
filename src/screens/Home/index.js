import React, { Component } from 'react'
import {View,ScrollView,Text,Image} from 'react-native'
import HomeStyle from './Style';
import {Input} from 'galio-framework'
// import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';
import SearchBar from '../../components/SearchBar'
import profile from '../../images/felin.jpg';
import {getData} from '../../redux/actions/home'
import Awsome from 'react-native-vector-icons/FontAwesome'
import HomeWrapper from '../../components/HomeWrapper'
import GenreWrapper from '../../components/GenreWrapper';
import { connect } from 'react-redux';

class HomeScreen extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.handleGetData()
    }
    handleGetData = ()=>{
        this.props.getData(this.props.user.auth.token).then((res)=>{
            // console.log(res)
        }).catch((err)=>{
            // console.log(err)
        })
    }
    render() {
        return (
            <ScrollView style={HomeStyle.content} >
                <View style={HomeStyle.headerTop}>
                    <View style={HomeStyle.profile}>
                        <View style={HomeStyle.profileWrapper}>
                        <Image source={profile} style={HomeStyle.profileImage}/>
                        </View>
                        <View>
                            <Text style={HomeStyle.txtStyle} onPress={this.handleGetData}>
                                Hello {this.props.user.auth.name}
                            </Text>
                        </View>
                    </View>
                    <View style={HomeStyle.notif}>
                        <Awsome name="bell" color={'white'} size={16}/>
                    </View>
                </View>
                <SearchBar/>
                    <HomeWrapper title={'Top Available for you'}/>
                    <GenreWrapper/>
                    <HomeWrapper title={'More Book'}/>
            </ScrollView>
        )
    }
}
const mapStateToProps = state =>({
    user : state.auth
})
const mapDispatchToProps = {getData}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)