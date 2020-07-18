import React, { Component } from 'react'
import { Text,View,ScrollView,Image,TouchableOpacity } from 'react-native'
import Style from './Style'
import Awsome from 'react-native-vector-icons/FontAwesome';
import BookCard from '../../components/BookCard'


export default class BorrowedScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [
                {
                    title : 'Harry Potter and the camber of secret',
                    author : 'JK Rowling',
                    image : 'https://images-na.ssl-images-amazon.com/images/I/51gHME-uBsL._AC_.jpg',
                    time : '5 Day ago',
                    status : 1
                },
                {
                    title : 'Harry Potter and the deathy hollow',
                    author : 'JK Rowling',
                    image : 'https://images-na.ssl-images-amazon.com/images/I/51gHME-uBsL._AC_.jpg',
                    time : '5 Day ago',
                    status : 2
                }
            ]
        }
    }
    render() {
        return (
            <ScrollView style={Style.content}>
                <View style={Style.mainContent}>
                    <View style={Style.header}>
                        <Text style={Style.titleTxt}>
                            Your Books
                        </Text>
                        <Awsome name="bell" color={'white'} size={16}/>
                    </View>
                    <View style={Style.bookWraper}>
                        {
                            this.state.data.map((row,index)=>{
                                return <BookCard key={index} data={row}/>
                            })
                        }
                    </View>
                </View>
            </ScrollView>
        )
    }
}
