import React, { Component } from 'react'
import { Text, View,FlatList } from 'react-native';
import {Card} from 'galio-framework'
import CardStyle from './Style'

export default class BooksWrapper extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [
                {
                    imageUrl : "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
                    title    : "something"
                  },
                  {
                    imageUrl : "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
                    title    : "something"
                  },
                  {
                    imageUrl : "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
                    title    : "something"
                  },
                  {
                    imageUrl : "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
                    title    : "something"
                  },
                  {
                    imageUrl : "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
                    title    : "something"
                  },
                  {
                    imageUrl : "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
                    title    : "something"
                  },
            ]
        }
    }
    render() {
        return (
            <View style={CardStyle.wrapper}>
                <FlatList 
                style={{marginBottom : 0}}
                horizontal
                data={this.state.data}
                renderItem={({ item: rowData }) => {
                  return (
                    <Card
                      title={null}
                      image={rowData.imageUrl}
                      style={{width : 120,marginLeft : 10}}
                      borderless
                      shadow={false}
                    >
                    </Card>
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}
