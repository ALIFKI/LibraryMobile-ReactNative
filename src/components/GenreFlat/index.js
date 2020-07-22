import React, { Component } from 'react'
import { Text, View,FlatList,Image } from 'react-native';
import {Card} from 'galio-framework'
import CardStyle from './Style';
import Awsome from 'react-native-vector-icons/FontAwesome'
import { Icon } from 'native-base';

export default class GenreFlat extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [
                {
                    imageUrl : "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v515-aum-03-b-abstractbackground_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=c5a5a9bf04a44f6d26d33a48cb7c0986",
                    title    : "Aventure",
                    icon     : 'heartbeat'
                  },
                  {
                    imageUrl : "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg",
                    title    : "Romance",
                    icon     : 'heartbeat'
                  },
                  {
                    imageUrl : "https://image.freepik.com/free-vector/simple-shapes-with-trendy-gradients_23-2148271812.jpg",
                    title    : "Comedy",
                    icon     : 'heartbeat'
                  },
                  {
                    imageUrl : "https://image.freepik.com/free-vector/simple-shapes-with-trendy-gradients_23-2148271812.jpg",
                    title    : "Novel",
                    icon     : 'heartbeat'
                    
                  },
                  {
                    imageUrl : "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg",
                    title    : "Adult",
                    icon     : 'heartbeat'

                  },
            ]
        }
    }
    render() {
      const image = 'https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg'
        return (
            <View style={CardStyle.wrapper}>
                <FlatList 
                style={{marginBottom : 0,
                display : 'flex'}}
                horizontal
                data={this.props.data}
                renderItem={({ item: rowData }) => {
                  return (
                      <View style={CardStyle.card}>
                          <Image source={{uri : image}} style={CardStyle.image}/>
                          <View style={CardStyle.icon}>
                              <Awsome name={'film'} color={'white'} size={30}/>
                          </View>
                          <Text style={CardStyle.genreTxt}> {rowData.genre} </Text>
                      </View>
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}