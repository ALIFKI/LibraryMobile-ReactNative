import React, { Component } from 'react'
import {View,ScrollView, Dimensions,TouchableHighlight } from 'react-native'
import {Text,Button} from 'galio-framework'
import DetailStyle from './Style';
import IonIcon from 'react-native-vector-icons/FontAwesome'

class DetailsScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={DetailStyle.header}>
                    <View style={DetailStyle.bg}></View>
                    <View style={DetailStyle.mainContent}>
                        <View style={DetailStyle.BookContent}>
                            <View style={DetailStyle.BookImage}>

                            </View>
                            <View style={DetailStyle.BookDetails}>
                                <Text style={DetailStyle.title}>Harry Potter Chamber OF secrets</Text>
                                <Text style={DetailStyle.author}>By JK Rowling</Text>
                                <Text style={DetailStyle.time}>6 Hours Ago</Text>
                                <View style={DetailStyle.action}>
                                <Button color={'#4660CE'} shadowless round>
                                    <Text style={{color : 'white'}}>Borrow</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                        <View style={DetailStyle.desc}>
                            <Text style={DetailStyle.synopsis}>Synopsis</Text>
                                <Text style={DetailStyle.synopsisTxt}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut minus atque beatae aliquid sint. Cupiditate facere qui non, dicta voluptates facilis? Magnam minima obcaecati numquam, sed harum aspernatur voluptatum vel!</Text>
                        </View>
                    </View>
                </View>
                <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => this.props.navigation.goBack()}
                        style={DetailStyle.backButton}
                        >
                        <View style={DetailStyle.touch} >
                            <IonIcon name="arrow-left" size={15} color={'white'}/><Text style={{color: 'white',marginLeft : 5}}>Back</Text>
                        </View>
                </TouchableHighlight>
            </ScrollView>
        )
    }
}
export default DetailsScreen