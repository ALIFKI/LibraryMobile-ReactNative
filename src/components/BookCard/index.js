import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity } from 'react-native'
import {API_URL} from '@env'
import Style from './Style'
export default class BookCard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={Style.card}>
                <Image style={Style.imageBook} source={{uri : `${API_URL}uploads/${this.props.data.image}`}}/>
                <View style={Style.bookCard}>
                    <View style={Style.details}>
                        <Text style={Style.bookTitle}> {this.props.data.title} </Text>
                        <Text style={Style.author}>by {this.props.data.author} </Text>
                        <Text style={Style.time}> {this.props.data.time} 6 Hours ago</Text>
                    </View>
                    <View style={Style.action}>
                            {
                                this.props.data.return_date === null ? (
                                    <TouchableOpacity 
                                    onPress={()=>{this.props.handleReturn(this.props.data.id)}}>
                                        <Text style={Style.returnTxt}>Return</Text>
                                    </TouchableOpacity>) : (
                                    <TouchableOpacity 
                                    onPress={()=>{console.log('return')}}>
                                        <Text style={Style.borrowTxt}>borrow</Text>
                                    </TouchableOpacity>
                                    )
                            }
                    </View>
                </View>
            </View>
        )
    }
}
