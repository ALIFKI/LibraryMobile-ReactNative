import React, { Component } from 'react'
import { Text,View,ScrollView,Modal,Alert,TouchableOpacity } from 'react-native'
import SearchBar from '../../components/SearchBar'
import Style from './Style'
import Awsome from 'react-native-vector-icons/FontAwesome'

export default class SearchScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            visibleModal : false
        }
    }
    render() {
        return (
            <View>
            <ScrollView style={Style.content}>
                <SearchBar/>
                <View style={Style.mainContent}>
                    <View style={Style.cardBook}>

                    </View>
                    <View style={Style.cardBook}>
                        
                    </View>
                    <View style={Style.cardBook}>
                    </View>
                    <View style={Style.cardBook}>   
                    </View>
                    <View style={Style.cardBook}>

                    </View>
                    <View style={Style.cardBook}>
                        
                    </View>
                    <View style={Style.cardBook}>
                    </View>
                    <View style={Style.cardBook}>   
                    </View>
                </View>
            </ScrollView>
            <View style={Style.buttonFot}>
                <Awsome name='sort-amount-asc' size={24}/>
                <TouchableOpacity onPress={()=>{this.setState({visibleModal: true})}}>
                    <Awsome name='filter' size={24}/>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.visibleModal}
                onRequestClose={() => {
                    this.setState({
                        visibleModal : false
                    })
                }}
            >
                <View style={Style.modal}></View>
            </Modal>
            </View>
        )
    }
}
