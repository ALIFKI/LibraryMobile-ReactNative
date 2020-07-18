import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity } from 'react-native'
import Style from './Style'
export default class BookCard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={Style.card}>
                <Image style={Style.imageBook} source={{uri : 'https://images-na.ssl-images-amazon.com/images/I/51gHME-uBsL._AC_.jpg'}}/>
                <View style={Style.bookCard}>
                    <View style={Style.details}>
                        <Text style={Style.bookTitle}> {this.props.data.title} </Text>
                        <Text style={Style.author}>by {this.props.data.author} </Text>
                        <Text style={Style.time}> {this.props.data.time} </Text>
                    </View>
                    <View style={Style.action}>
                        <TouchableOpacity 
                        onPress={()=>{console.log('res')}}>
                            {
                                this.props.data.status === 1 ? (<Text style={Style.returnTxt}>Return</Text>) : (<Text style={Style.borrowTxt}>Borrow</Text>)
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
